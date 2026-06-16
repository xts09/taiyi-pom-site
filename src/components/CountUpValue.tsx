import type { CSSProperties } from "react";
import { ValueText } from "@/components/UnitText";

type CountUpValueProps = {
  value: string;
};

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const parseValue = (value: string) => {
  const match = value.match(/^([\d,]+)(.*)$/);

  if (!match) {
    return null;
  }

  return {
    numberText: match[1],
    unitSuffix: match[2] ?? "",
  };
};

const getCountSteps = (targetNumber: number) => {
  if (targetNumber <= 20) {
    return Array.from({ length: targetNumber + 1 }, (_, index) => index);
  }

  return Array.from({ length: 21 }, (_, index) =>
    Math.round(targetNumber * (1 - (1 - index / 20) ** 3))
  );
};

export function CountUpValue({ value }: CountUpValueProps) {
  const parsed = parseValue(value);
  const targetNumber = parsed
    ? Number.parseInt(parsed.numberText.replace(/,/g, ""), 10)
    : 0;

  if (!parsed || !Number.isFinite(targetNumber)) {
    return <ValueText value={value} />;
  }

  const shouldUseGrouping = parsed.numberText.includes(",");
  const steps = getCountSteps(targetNumber);

  return (
    <span
      className="count-up-value"
      aria-label={value}
      style={
        {
          "--character-count": parsed.numberText.length,
          "--step-count": steps.length - 1,
        } as CSSProperties
      }
    >
      <span className="count-up-window" aria-hidden="true">
        <span className="count-up-track">
          {steps.map((step, index) => (
            <span className="count-up-step" key={`${step}-${index}`}>
              <span className="count-up-number">
                {shouldUseGrouping ? numberFormatter.format(step) : String(step)}
              </span>
            </span>
          ))}
        </span>
      </span>
      {parsed.unitSuffix ? (
        <span className="count-up-unit" aria-hidden="true">
          <ValueText value={parsed.unitSuffix} />
        </span>
      ) : null}
      <span className="sr-only">
        <ValueText value={value} />
      </span>
    </span>
  );
}

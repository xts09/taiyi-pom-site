import type { CSSProperties } from "react";
import { ValueText } from "@/components/UnitText";

type CountUpValueProps = {
  value: string;
};

const digitReel = Array.from({ length: 20 }, (_, index) => index % 10);

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

export function CountUpValue({ value }: CountUpValueProps) {
  const parsed = parseValue(value);

  if (!parsed) {
    return <ValueText value={value} />;
  }

  return (
    <span className="count-up-value" aria-label={value}>
      {parsed.numberText.split("").map((character, index) => {
        if (character === ",") {
          return (
            <span key={`${character}-${index}`} className="odometer-comma">
              ,
            </span>
          );
        }

        const digit = Number(character);

        if (!Number.isFinite(digit)) {
          return character;
        }

        const currentDigitIndex = parsed.numberText
          .slice(0, index)
          .replace(/\D/g, "").length;

        return (
          <span
            key={`${character}-${index}`}
            className="odometer-digit"
            style={
              {
                "--digit": digit,
                "--digit-index": currentDigitIndex,
              } as CSSProperties
            }
            aria-hidden="true"
          >
            <span className="odometer-reel">
              {digitReel.map((reelDigit, reelIndex) => (
                <span key={`${reelDigit}-${reelIndex}`}>{reelDigit}</span>
              ))}
            </span>
          </span>
        );
      })}
      <ValueText value={parsed.unitSuffix} />
    </span>
  );
}

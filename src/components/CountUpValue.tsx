import { ValueText } from "@/components/UnitText";

type CountUpValueProps = {
  value: string;
};

export function CountUpValue({ value }: CountUpValueProps) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const unitSuffix = match?.[2].trim();

  if (!match || !unitSuffix) {
    return (
      <span className="count-up-value">
        <ValueText value={value} />
      </span>
    );
  }

  return (
    <span className="count-up-value">
      <span className="count-up-number">{match[1]}</span>
      <span className="count-up-static-unit">
        {" "}
        <ValueText value={unitSuffix} />
      </span>
    </span>
  );
}

import type { ReactNode } from "react";

const unitRenderers: Record<string, ReactNode> = {
  "g/cm3": (
    <>
      g/cm<sup>3</sup>
    </>
  ),
  "kJ/m2": (
    <>
      kJ/m<sup>2</sup>
    </>
  ),
  m2: (
    <>
      m<sup>2</sup>
    </>
  ),
  degC: <>&deg;C</>,
  "ohm.cm": <>&Omega;&middot;cm</>,
  ohm: <>&Omega;</>,
  "10^-5/degC": (
    <>
      &times;10<sup>-5</sup>/&deg;C
    </>
  ),
};

const valuePattern =
  /(10\^-5\/degC|g\/cm3|kJ\/m2|ohm\.cm|degC|m2|ohm|\b1e\d+\b)/g;

const renderValuePart = (part: string, index: number) => {
  if (unitRenderers[part]) {
    return <UnitText key={`${part}-${index}`} unit={part} />;
  }

  const exponentMatch = part.match(/^1e(\d+)$/);

  if (exponentMatch) {
    return (
      <span key={`${part}-${index}`}>
        10<sup>{exponentMatch[1]}</sup>
      </span>
    );
  }

  return part;
};

export function UnitText({ unit }: { unit: string }) {
  return <>{unitRenderers[unit] ?? unit}</>;
}

export function ValueText({ value }: { value: string }) {
  const parts = value.split(valuePattern);

  return <>{parts.map(renderValuePart)}</>;
}

export function ValueWithUnit({
  value,
  unit,
}: {
  value: string;
  unit: string;
}) {
  return (
    <>
      {value} <UnitText unit={unit} />
    </>
  );
}

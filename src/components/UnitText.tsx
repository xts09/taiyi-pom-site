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
};

const unitPattern = /(g\/cm3|kJ\/m2|ohm\.cm|degC|m2|ohm)/g;

export function UnitText({ unit }: { unit: string }) {
  return <>{unitRenderers[unit] ?? unit}</>;
}

export function ValueText({ value }: { value: string }) {
  const parts = value.split(unitPattern);

  return (
    <>
      {parts.map((part, index) =>
        unitRenderers[part] ? (
          <UnitText key={`${part}-${index}`} unit={part} />
        ) : (
          part
        )
      )}
    </>
  );
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

type PropertyWithLabel = {
  label: string;
};

type CorePropertyGroup = {
  terms: string[];
  preferredTerm?: string;
};

const publicCorePropertyGroups: CorePropertyGroup[] = [
  { terms: ["density", "specific gravity"] },
  { terms: ["melt flow rate", "mfi"] },
  { terms: ["molding shrinkage"] },
  { terms: ["tensile strength", "tensile stress"] },
  { terms: ["tensile modulus"] },
  { terms: ["flexural modulus"] },
  {
    terms: [
      "charpy notched impact",
      "izod notched impact",
      "impact strength",
    ],
    preferredTerm: "charpy",
  },
  {
    terms: ["heat deflection temperature", "hdt"],
    preferredTerm: "1.8 mpa",
  },
];

export const getPublicCoreProperties = <T extends PropertyWithLabel>(
  properties: readonly T[],
) =>
  publicCorePropertyGroups.flatMap((group) => {
    const matches = properties.filter((property) => {
      const normalizedLabel = property.label.toLowerCase();

      return group.terms.some((term) => normalizedLabel.includes(term));
    });
    const preferredTerm = group.preferredTerm;
    const preferredMatch = preferredTerm
      ? matches.find((property) =>
          property.label.toLowerCase().includes(preferredTerm),
        )
      : undefined;
    const selectedProperty = preferredMatch ?? matches[0];

    return selectedProperty ? [selectedProperty] : [];
  });

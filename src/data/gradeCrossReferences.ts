export type GradeCrossReferenceRecord = {
  id: string;
  reference: {
    grade: string;
    displayName: string;
    ownerLabel?: string;
    aliases: readonly string[];
  };
  materialFamily: "POM";
  candidateGrades: readonly string[];
  publicPosition: string;
  matchBasis: readonly string[];
  requiredChecks: readonly string[];
  source: {
    document: "SEM_MODEL_TRAFFIC_PROJECT.md";
    relationshipStatus: "screening-seed";
    reviewedAt: "2026-08-14";
  };
};

const source = {
  document: "SEM_MODEL_TRAFFIC_PROJECT.md",
  relationshipStatus: "screening-seed",
  reviewedAt: "2026-08-14",
} as const;

export const gradeCrossReferences = [
  {
    id: "asahi-kasei-9520",
    reference: {
      grade: "9520",
      displayName: "Asahi Kasei 9520",
      ownerLabel: "Asahi Kasei",
      aliases: ["9520", "Asahi Kasei 9520", "TENAC 9520"],
    },
    materialFamily: "POM",
    candidateGrades: ["ETM750"],
    publicPosition:
      "Very-high-flow POM for thin-wall and flow-sensitive injection molding.",
    matchBasis: [
      "POM material family",
      "Very-high-flow screening direction",
      "Thin-wall and flow-sensitive molding focus",
    ],
    requiredChecks: [
      "Compare both current TDS revisions under matching flow-test conditions",
      "Confirm filling, surface, dimensions, and part strength in the intended mold",
    ],
    source,
  },
  {
    id: "reference-k300",
    reference: {
      grade: "K300",
      displayName: "K300",
      aliases: ["K300"],
    },
    materialFamily: "POM",
    candidateGrades: ["XT-100"],
    publicPosition:
      "Balanced-flow POM for precision and general injection-molded parts.",
    matchBasis: [
      "POM material family",
      "Balanced-flow screening direction",
      "Precision and general injection-molding focus",
    ],
    requiredChecks: [
      "Confirm the exact supplier, grade revision, and incumbent TDS",
      "Compare flow, shrinkage, mechanics, and molded-part dimensions",
    ],
    source,
  },
  {
    id: "duracon-m90-44",
    reference: {
      grade: "M90-44",
      displayName: "DURACON® M90-44",
      ownerLabel: "Polyplastics / DURACON®",
      aliases: [
        "M90-44",
        "M9044",
        "DURACON M90-44",
        "DURACON® M90-44",
        "Polyplastics M90-44",
      ],
    },
    materialFamily: "POM",
    candidateGrades: ["XT-100"],
    publicPosition:
      "Balanced-flow POM for precision and general injection-molded parts.",
    matchBasis: [
      "POM material family",
      "Balanced-flow screening direction",
      "Precision and general injection-molding focus",
    ],
    requiredChecks: [
      "Compare both current TDS revisions using the same test methods and conditions",
      "Validate flow, shrinkage, dimensions, mechanics, appearance, and process window",
    ],
    source,
  },
  {
    id: "polyplastics-gb-25r",
    reference: {
      grade: "GB-25R",
      displayName: "Polyplastics GB-25R",
      ownerLabel: "Polyplastics",
      aliases: ["GB-25R", "GB25R", "Polyplastics GB-25R"],
    },
    materialFamily: "POM",
    candidateGrades: ["EGB25"],
    publicPosition:
      "25% glass-bead-filled POM for shrinkage and thermal-profile review.",
    matchBasis: [
      "POM material family",
      "25% glass-bead-filled modification direction",
      "Shrinkage and thermal-profile screening focus",
    ],
    requiredChecks: [
      "Confirm filler content and the longitudinal/transverse shrinkage test basis",
      "Compare thermal, mechanical, surface, and molded-part dimensional behavior",
    ],
    source,
  },
  {
    id: "polyplastics-gh-25",
    reference: {
      grade: "GH-25",
      displayName: "Polyplastics GH-25",
      ownerLabel: "Polyplastics",
      aliases: ["GH-25", "GH25", "Polyplastics GH-25", "DURACON GH-25"],
    },
    materialFamily: "POM",
    candidateGrades: ["EGH502H"],
    publicPosition:
      "25% glass-fiber-reinforced POM for stiffness, shrinkage, and thermal-profile review.",
    matchBasis: [
      "POM material family",
      "25% glass-fiber-reinforced modification direction",
      "Stiffness, shrinkage, and thermal screening focus",
    ],
    requiredChecks: [
      "Confirm fiber content, orientation-sensitive data, and matching test conditions",
      "Validate weld lines, warpage, dimensions, surface, and critical part loads",
    ],
    source,
  },
  {
    id: "polyplastics-sf-20",
    reference: {
      grade: "SF-20",
      displayName: "Polyplastics SF-20",
      ownerLabel: "Polyplastics",
      aliases: ["SF-20", "SF20", "Polyplastics SF-20", "DURACON SF-20"],
    },
    materialFamily: "POM",
    candidateGrades: ["EHI402T"],
    publicPosition:
      "High-impact POM for toughness and low-temperature performance review.",
    matchBasis: [
      "POM material family",
      "High-impact modification direction",
      "Toughness and low-temperature screening focus",
    ],
    requiredChecks: [
      "Compare impact data with the same notch, temperature, and conditioning basis",
      "Validate stiffness, elongation, dimensions, and the intended failure mode",
    ],
    source,
  },
  {
    id: "hostaform-s9364",
    reference: {
      grade: "S9364",
      displayName: "HOSTAFORM S9364",
      ownerLabel: "Celanese / HOSTAFORM",
      aliases: [
        "S9364",
        "S 9364",
        "HOSTAFORM S9364",
        "Celanese S9364",
      ],
    },
    materialFamily: "POM",
    candidateGrades: ["EDR180"],
    publicPosition:
      "High-impact POM for toughness, low-temperature performance, and elongation review.",
    matchBasis: [
      "POM material family",
      "High-impact modification direction",
      "Toughness, low-temperature, and elongation screening focus",
    ],
    requiredChecks: [
      "Compare impact and elongation under matching methods and conditioning",
      "Validate process window, dimensions, assembly, and functional durability",
    ],
    source,
  },
  {
    id: "polyplastics-eb-10",
    reference: {
      grade: "EB-10",
      displayName: "Polyplastics EB-10",
      ownerLabel: "Polyplastics",
      aliases: ["EB-10", "EB10", "Polyplastics EB-10", "DURACON EB-10"],
    },
    materialFamily: "POM",
    candidateGrades: ["ECN1003B"],
    publicPosition:
      "Conductive POM for resistivity and charge-control performance review.",
    matchBasis: [
      "POM material family",
      "Conductive modification direction",
      "Surface and volume resistivity screening focus",
    ],
    requiredChecks: [
      "Confirm surface or volume quantity, units, method, specimen, and conditioning",
      "Validate electrical uniformity with mechanics, dimensions, color, and processing",
    ],
    source,
  },
  {
    id: "polyplastics-m450-44",
    reference: {
      grade: "M450-44",
      displayName: "Polyplastics M450-44",
      ownerLabel: "Polyplastics",
      aliases: [
        "M450-44",
        "M45044",
        "Polyplastics M450-44",
        "DURACON M450-44",
      ],
    },
    materialFamily: "POM",
    candidateGrades: ["ETM450"],
    publicPosition: "High-flow POM for precision injection-molded parts.",
    matchBasis: [
      "POM material family",
      "High-flow screening direction",
      "Precision injection-molding focus",
    ],
    requiredChecks: [
      "Compare flow values only under matching temperature and load conditions",
      "Validate filling, surface, strength, shrinkage, and critical dimensions",
    ],
    source,
  },
  {
    id: "schulman-af-9",
    reference: {
      grade: "AF-9",
      displayName: "Schulman AF-9",
      ownerLabel: "Schulman",
      aliases: ["AF-9", "AF9", "Schulman AF-9"],
    },
    materialFamily: "POM",
    candidateGrades: ["EPAF100A"],
    publicPosition:
      "Aramid-fiber-modified wear-resistant POM for wear, stiffness, and thermal-profile review.",
    matchBasis: [
      "POM material family",
      "Aramid-fiber-modified wear direction",
      "Wear, stiffness, and thermal screening focus",
    ],
    requiredChecks: [
      "Confirm aramid content and compare data under matching test conditions",
      "Test wear and friction with the intended load, speed, mate, finish, and environment",
    ],
    source,
  },
  {
    id: "polyplastics-m90-45",
    reference: {
      grade: "M90-45",
      displayName: "Polyplastics M90-45",
      ownerLabel: "Polyplastics",
      aliases: [
        "M90-45",
        "M9045",
        "Polyplastics M90-45",
        "DURACON M90-45",
      ],
    },
    materialFamily: "POM",
    candidateGrades: ["ETM090U"],
    publicPosition:
      "UV-resistant POM for material, color, and exposure-condition review.",
    matchBasis: [
      "POM material family",
      "UV-resistant modification direction",
      "Color and exposure-condition screening focus",
    ],
    requiredChecks: [
      "Confirm exact color, stabilizer package, exposure method, duration, and limits",
      "Validate retained appearance, mechanics, dimensions, and functional performance",
    ],
    source,
  },
] as const satisfies readonly GradeCrossReferenceRecord[];

export const crossReferenceCandidateGrades = Array.from(
  new Set(
    gradeCrossReferences.flatMap((record) => [...record.candidateGrades]),
  ),
);

export type GradeCrossReferenceMatch = {
  record: GradeCrossReferenceRecord;
  matchedAlias: string;
  score: number;
};

export const normalizeReferenceGrade = (value: string) =>
  value
    .normalize("NFKC")
    .toLocaleLowerCase("en-US")
    .replace(/[®™]/g, "")
    .replace(/[^a-z0-9]+/g, "");

const aliasEntries = gradeCrossReferences.flatMap((record) => {
  const aliases = new Set([
    record.reference.grade,
    record.reference.displayName,
    ...record.reference.aliases,
  ]);

  return Array.from(aliases, (alias) => ({
    alias,
    key: normalizeReferenceGrade(alias),
    record,
  }));
});

export function searchGradeCrossReferences(
  query: string,
  limit = 4,
): GradeCrossReferenceMatch[] {
  const normalizedQuery = normalizeReferenceGrade(query);

  if (!normalizedQuery) return [];

  const bestByRecord = new Map<string, GradeCrossReferenceMatch>();

  for (const entry of aliasEntries) {
    let score = 0;

    if (entry.key === normalizedQuery) {
      score = 100;
    } else if (
      entry.key.length >= 4 &&
      normalizedQuery.includes(entry.key)
    ) {
      score = 80;
    } else if (
      normalizedQuery.length >= 4 &&
      entry.key.includes(normalizedQuery)
    ) {
      score = 70;
    }

    if (score === 0) continue;

    const current = bestByRecord.get(entry.record.id);
    if (!current || score > current.score) {
      bestByRecord.set(entry.record.id, {
        record: entry.record,
        matchedAlias: entry.alias,
        score,
      });
    }
  }

  return Array.from(bestByRecord.values())
    .sort(
      (left, right) =>
        right.score - left.score ||
        left.record.reference.displayName.localeCompare(
          right.record.reference.displayName,
          "en",
        ),
    )
    .slice(0, Math.max(1, limit));
}

export const findGradeCrossReference = (query: string) =>
  searchGradeCrossReferences(query, 1)[0];

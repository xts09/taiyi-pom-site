import { readFileSync } from "node:fs";
import { resolve } from "node:path";

type SeoRecord = {
  kind: "product" | "engineering-tds" | "conductive-entry";
  grade: string;
  polymer: string;
  slug?: string;
  description?: string;
  applications?: string | string[];
  features?: string[];
  properties?: Array<{
    label?: string;
    value?: string;
    unit?: string;
    method?: string;
  }>;
  seo?: {
    indexable?: boolean;
  };
};

const catalogPath = resolve(process.cwd(), "src/generated/catalog.json");
const records = JSON.parse(readFileSync(catalogPath, "utf8")) as SeoRecord[];
const routedRecords = records.filter(
  (record) =>
    record.kind === "product" || record.kind === "engineering-tds",
);
const indexableRecords = routedRecords.filter(
  (record) => record.seo?.indexable !== false,
);
const failures: string[] = [];

const normalize = (value: unknown) =>
  String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const descriptionGroups = new Map<string, SeoRecord[]>();
const contentGroups = new Map<string, SeoRecord[]>();

for (const record of indexableRecords) {
  const label = `${record.polymer} ${record.grade}`;
  const description = normalize(record.description);
  const descriptionWords = description.split(" ").filter(Boolean).length;
  const meaningfulProperties = (record.properties ?? []).filter(
    (property) =>
      normalize(property.label) &&
      normalize(property.value) &&
      !["n a", "na", "missing"].includes(normalize(property.value)),
  );

  if (!record.slug) failures.push(`${label}: missing canonical slug`);
  if (descriptionWords < 10) {
    failures.push(`${label}: description has fewer than 10 words`);
  }
  if (meaningfulProperties.length < 4) {
    failures.push(`${label}: fewer than 4 meaningful properties`);
  }

  const descriptionMatches = descriptionGroups.get(description) ?? [];
  descriptionMatches.push(record);
  descriptionGroups.set(description, descriptionMatches);

  const contentSignature = JSON.stringify({
    description,
    applications: record.applications,
    features: record.features,
    properties: record.properties,
  });
  const contentMatches = contentGroups.get(contentSignature) ?? [];
  contentMatches.push(record);
  contentGroups.set(contentSignature, contentMatches);
}

const fullyDuplicatedGroups = [...contentGroups.values()].filter(
  (group) => group.length > 1,
);
for (const group of fullyDuplicatedGroups) {
  failures.push(
    `fully duplicated grade content: ${group
      .map((record) => `${record.polymer} ${record.grade}`)
      .join(", ")}`,
  );
}

if (failures.length > 0) {
  console.error(`SEO catalog check failed with ${failures.length} issue(s):`);
  for (const failure of failures.slice(0, 20)) console.error(`- ${failure}`);
  if (failures.length > 20) {
    console.error(`- ${failures.length - 20} more issue(s) omitted`);
  }
  process.exitCode = 1;
} else {
  const repeatedDescriptionPages = [...descriptionGroups.values()]
    .filter((group) => group.length > 1)
    .reduce((count, group) => count + group.length, 0);
  const excludedPages = routedRecords.length - indexableRecords.length;

  console.log(
    `SEO catalog check passed: ${indexableRecords.length} indexable grade pages, ` +
      `${excludedPages} excluded, ${repeatedDescriptionPages} pages share a description, ` +
      "0 fully duplicated pages.",
  );
}

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";

type JsonRecord = Record<string, unknown>;

const root = process.cwd();
const catalogDirectory = resolve(root, "content/catalog/products");
const outputPath = resolve(root, "src/generated/catalog.json");
const checkOnly = process.argv.includes("--check");

const collectJsonFiles = (directory: string): string[] => {
  if (!existsSync(directory)) return [];

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory()
      ? collectJsonFiles(path)
      : extname(entry.name) === ".json"
        ? [path]
        : [];
  });
};

const requireString = (record: JsonRecord, field: string, source: string) => {
  if (typeof record[field] !== "string" || record[field].trim() === "") {
    throw new Error(`${source}: ${field} must be a non-empty string`);
  }
};

const requireStringArray = (record: JsonRecord, field: string, source: string) => {
  const value = record[field];
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    throw new Error(`${source}: ${field} must be a string array`);
  }
};

const slugify = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const validateSeo = (record: JsonRecord, source: string) => {
  if (record.seo === undefined) return;
  if (typeof record.seo !== "object" || record.seo === null) {
    throw new Error(`${source}: seo must be an object`);
  }
  for (const field of ["title", "description", "image"]) {
    const value = (record.seo as JsonRecord)[field];
    if (value !== undefined && (typeof value !== "string" || value.trim() === "")) {
      throw new Error(`${source}: seo.${field} must be a non-empty string`);
    }
  }
  const indexable = (record.seo as JsonRecord).indexable;
  if (indexable !== undefined && typeof indexable !== "boolean") {
    throw new Error(`${source}: seo.indexable must be a boolean`);
  }
};

const validateTds = (record: JsonRecord, source: string) => {
  if (
    typeof record.tds !== "object" ||
    record.tds === null ||
    !["data-only", "pdf"].includes(String((record.tds as JsonRecord).status))
  ) {
    throw new Error(`${source}: tds.status must be data-only or pdf`);
  }

  const tds = record.tds as JsonRecord;
  if (tds.status === "pdf") {
    requireString(tds, "pdfPath", source);
    const publicPath = String(tds.pdfPath);
    if (
      !/^\/documents\/tds\/[a-z0-9-]+\/taiyi-[a-z0-9-]+-tds-en-r\d{2}\.pdf$/.test(
        publicPath,
      )
    ) {
      throw new Error(`${source}: TDS PDF path does not follow the naming rule`);
    }
    const pdfPath = resolve(root, `public/${publicPath.replace(/^\//, "")}`);
    if (!existsSync(pdfPath)) {
      throw new Error(`${source}: missing TDS file ${String(tds.pdfPath)}`);
    }
  }
};

const validateRecord = (record: JsonRecord, source: string) => {
  if (record.schemaVersion !== 1) {
    throw new Error(`${source}: schemaVersion must be 1`);
  }
  if (!Number.isInteger(record.sortOrder)) {
    throw new Error(`${source}: sortOrder must be an integer`);
  }
  for (const field of ["id", "grade", "polymer", "kind"]) {
    requireString(record, field, source);
  }
  validateSeo(record, source);

  if (record.kind === "product") {
    for (const field of ["slug", "title", "family", "category", "description"]) {
      requireString(record, field, source);
    }
    for (const field of ["colors", "features", "applications", "documents"]) {
      requireStringArray(record, field, source);
    }
    if (!Array.isArray(record.properties)) {
      throw new Error(`${source}: properties must be an array`);
    }
    validateTds(record, source);
    return;
  }

  if (record.kind === "engineering-tds") {
    for (const field of ["slug", "family", "category", "description", "applications"]) {
      requireString(record, field, source);
    }
    if (!Array.isArray(record.properties)) {
      throw new Error(`${source}: properties must be an array`);
    }
    validateTds(record, source);
    return;
  }

  if (record.kind === "conductive-entry") {
    for (const field of ["matrix", "technology", "range", "rangeLabel"]) {
      requireString(record, field, source);
    }
    return;
  }

  throw new Error(`${source}: unsupported kind ${String(record.kind)}`);
};

const files = collectJsonFiles(catalogDirectory).sort();
const records = files.map((file) => {
  const source = relative(root, file).replaceAll("\\", "/");
  const record = JSON.parse(readFileSync(file, "utf8")) as JsonRecord;
  validateRecord(record, source);
  return record;
});

const assertUnique = (field: "id") => {
  const seen = new Set<string>();
  for (const record of records) {
    const value = String(record[field]).toLowerCase();
    if (seen.has(value)) throw new Error(`Duplicate ${field}: ${String(record[field])}`);
    seen.add(value);
  }
};

assertUnique("id");

const routedRecords = records.filter((record) => typeof record.slug === "string");
const routedSlugs = new Map<string, string>();
for (const record of routedRecords) {
  const routeKeys = [String(record.slug)];
  if (record.kind === "product") {
    routeKeys.push(slugify(String(record.grade)));
    if (Array.isArray(record.aliases)) {
      routeKeys.push(...record.aliases.map(String));
    }
  }

  for (const routeKey of new Set(routeKeys)) {
    const slug = routeKey.toLowerCase();
    const existing = routedSlugs.get(slug);
    if (existing && existing !== String(record.id)) {
      throw new Error(`Duplicate product route ${routeKey}: ${existing}`);
    }
    routedSlugs.set(slug, String(record.id));
  }
}

records.sort((left, right) => {
  const kindOrder = String(left.kind).localeCompare(String(right.kind));
  return kindOrder || Number(left.sortOrder) - Number(right.sortOrder);
});

const output = `${JSON.stringify(records, null, 2)}\n`;

if (checkOnly) {
  if (!existsSync(outputPath) || readFileSync(outputPath, "utf8") !== output) {
    throw new Error("Generated catalog is stale. Run npm run catalog:generate.");
  }
  console.log(`Catalog check passed: ${records.length} records.`);
} else {
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, output, "utf8");
  console.log(`Generated ${records.length} catalog records.`);
}

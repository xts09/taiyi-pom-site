export type ContactIntent =
  | "sample"
  | "grade-evaluation"
  | "tds"
  | "quote-supply";

export type ContactContext = {
  application?: string;
  candidates?: string;
  grade?: string;
  intent?: ContactIntent;
  material?: string;
  reference?: string;
  requirement?: string;
  source?: string;
};

export type ContactContextSearchParams = Record<
  string,
  string | string[] | undefined
>;

export function hasContactSearchParams(
  searchParams: ContactContextSearchParams,
) {
  return Object.values(searchParams).some((value) =>
    (Array.isArray(value) ? value : [value]).some((item) =>
      Boolean(item?.trim()),
    ),
  );
}

const urlContextKeys = [
  "source",
  "material",
  "application",
  "grade",
  "reference",
  "candidates",
] as const;
const allowedIntents = new Set<ContactIntent>([
  "sample",
  "grade-evaluation",
  "tds",
  "quote-supply",
]);

const contactContextHashPrefix = "#inquiry?";

const normalizeContextValue = (
  value: string | string[] | undefined,
  maxLength = 160
) => {
  const firstValue = Array.isArray(value) ? value[0] : value;

  if (!firstValue) return undefined;

  const normalized = firstValue
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);

  return normalized || undefined;
};

export function parseContactContext(
  searchParams: ContactContextSearchParams
): ContactContext {
  const context = Object.fromEntries(
    urlContextKeys.flatMap((key) => {
      const value = normalizeContextValue(searchParams[key]);
      return value ? [[key, value]] : [];
    })
  ) as ContactContext;
  const intent = normalizeContextValue(searchParams.intent, 40);

  if (intent && allowedIntents.has(intent as ContactIntent)) {
    context.intent = intent as ContactIntent;
  }

  return context;
}

export function createContactHref(
  context: ContactContext,
  contactPath = "/contact",
) {
  const searchParams = new URLSearchParams();

  for (const key of urlContextKeys) {
    const value = normalizeContextValue(context[key]);
    if (value) searchParams.set(key, value);
  }

  if (context.intent && allowedIntents.has(context.intent)) {
    searchParams.set("intent", context.intent);
  }

  const query = searchParams.toString();
  return query ? `${contactPath}${contactContextHashPrefix}${query}` : contactPath;
}

export function parseContactContextHash(hash: string) {
  if (!hash.startsWith(contactContextHashPrefix)) return {};

  return parseContactContext(
    Object.fromEntries(
      new URLSearchParams(hash.slice(contactContextHashPrefix.length)),
    ),
  );
}

export function getContactContextLabel(context: ContactContext) {
  const details = [
    context.application,
    context.material,
    context.grade,
    context.reference,
    context.candidates,
  ].filter((value): value is string => Boolean(value));

  return details.length > 0 ? details.join(" / ") : context.source;
}

export type ContactContextMessageLabels = {
  grade: string;
  reference: string;
  candidates: string;
  requirement: string;
  intent: string;
  sampleIntent: string;
  evaluationIntent: string;
  tdsIntent: string;
  quoteSupplyIntent: string;
};

const defaultContextMessageLabels: ContactContextMessageLabels = {
  grade: "Grade of interest",
  reference: "Reference grade",
  candidates: "Candidate shortlist",
  requirement: "Priority requirement",
  intent: "Inquiry intent",
  sampleIntent: "Sample request",
  evaluationIntent: "Grade evaluation",
  tdsIntent: "TDS or documents",
  quoteSupplyIntent: "Quote or supply discussion",
};

export function getContactContextMessage(
  context: ContactContext,
  labels: ContactContextMessageLabels = defaultContextMessageLabels,
) {
  const intentLabel =
    context.intent === "sample"
      ? labels.sampleIntent
      : context.intent === "grade-evaluation"
        ? labels.evaluationIntent
        : context.intent === "tds"
          ? labels.tdsIntent
          : context.intent === "quote-supply"
            ? labels.quoteSupplyIntent
            : undefined;

  return [
    context.grade ? `${labels.grade}: ${context.grade}` : undefined,
    context.reference ? `${labels.reference}: ${context.reference}` : undefined,
    context.candidates
      ? `${labels.candidates}: ${context.candidates}`
      : undefined,
    context.requirement
      ? `${labels.requirement}: ${context.requirement}`
      : undefined,
    intentLabel ? `${labels.intent}: ${intentLabel}` : undefined,
  ]
    .filter((value): value is string => Boolean(value))
    .join("\n");
}

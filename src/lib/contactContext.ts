export type ContactIntent = "sample" | "grade-evaluation";

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

const contextKeys = [
  "source",
  "material",
  "application",
  "grade",
  "reference",
  "candidates",
  "requirement",
] as const;
const allowedIntents = new Set<ContactIntent>(["sample", "grade-evaluation"]);

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
    contextKeys.flatMap((key) => {
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

export function createContactHref(context: ContactContext) {
  const searchParams = new URLSearchParams();

  for (const key of contextKeys) {
    const value = normalizeContextValue(context[key]);
    if (value) searchParams.set(key, value);
  }

  if (context.intent && allowedIntents.has(context.intent)) {
    searchParams.set("intent", context.intent);
  }

  const query = searchParams.toString();
  return query ? `/contact?${query}` : "/contact";
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

export function getContactContextMessage(context: ContactContext) {
  const intentLabel =
    context.intent === "sample"
      ? "Sample request"
      : context.intent === "grade-evaluation"
        ? "Grade evaluation"
        : undefined;

  return [
    context.grade ? `Grade of interest: ${context.grade}` : undefined,
    context.reference ? `Reference grade: ${context.reference}` : undefined,
    context.candidates
      ? `Candidate shortlist: ${context.candidates}`
      : undefined,
    context.requirement
      ? `Priority requirement: ${context.requirement}`
      : undefined,
    intentLabel ? `Inquiry intent: ${intentLabel}` : undefined,
  ]
    .filter((value): value is string => Boolean(value))
    .join("\n");
}

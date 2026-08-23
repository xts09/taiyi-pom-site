import type { SiteMessages } from "./types.ts";

type MaterialOptionLabel = keyof SiteMessages["Contact"]["form"]["materialOptionLabels"];

const materialOptionLabelByOwnerId = {
  "base-pom-resin": "Base POM Resin",
  "wear-resistant-low-friction-pom-compound":
    "Wear-Resistant & Low-Friction POM",
  "glass-fiber-reinforced-pom-compound": "Glass Fiber Reinforced POM",
  "glass-bead-filled-pom-compound": "Glass Bead Filled POM",
  "conductive-antistatic-pom-compound": "Conductive / Antistatic POM",
  "pa6-compound": "PA6 Compounds",
  "pa66-compound": "PA66 Compounds",
  "ppa-compound": "PPA Compounds",
  "conductive-antistatic-compounds": "Conductive & Antistatic Compounds",
} as const satisfies Readonly<Record<string, MaterialOptionLabel>>;

export const createComponentMaterialOwnerLabels = (
  messages: SiteMessages,
): Readonly<Record<string, string>> =>
  Object.fromEntries(
    Object.entries(materialOptionLabelByOwnerId).map(([ownerId, optionLabel]) => [
      ownerId,
      messages.Contact.form.materialOptionLabels[optionLabel],
    ]),
  );

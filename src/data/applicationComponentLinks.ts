import { applications } from "./applications.ts";
import {
  applicationComponentRelations,
  type PartExampleRelation,
} from "./applicationComponentRelations.ts";

export type ApplicationComponentLink = {
  applicationSlug: string;
  partLabel: string;
  href: string;
  label: string;
};

const guideLabelByComponentSlug = {
  "precision-plastic-gears": "Precision Plastic Gear Guide",
  "bushings-and-sleeves": "Bushings & Sleeves Guide",
  "conveyor-chain-components": "Conveyor Chain Components Guide",
  "valve-spools-and-cartridges": "Valve Spools & Cartridges Guide",
  "textile-guide-components": "Textile Guide Components Guide",
  "ic-handling-trays": "IC Handling Trays Guide",
} as const;

const createApplicationComponentLinks = (
  relation: PartExampleRelation,
): ApplicationComponentLink[] => {
  const application = applications.find(
    (item) => item.slug === relation.applicationSlug,
  );
  const label =
    guideLabelByComponentSlug[
      relation.componentSlug as keyof typeof guideLabelByComponentSlug
    ];

  if (!application || !label) {
    throw new Error(
      `Broken application-component relation: ${relation.applicationSlug}::${relation.componentSlug}`,
    );
  }

  return relation.partIds.map((partId) => {
    const part = application.parts.find((item) => item.id === partId);

    if (!part) {
      throw new Error(
        `Broken application part relation: ${relation.applicationSlug}::${partId}`,
      );
    }

    return {
      applicationSlug: relation.applicationSlug,
      partLabel: part.label,
      href: `/components/${relation.componentSlug}`,
      label,
    };
  });
};

export const applicationComponentLinks: ApplicationComponentLink[] =
  applicationComponentRelations.flatMap((relation) =>
    relation.relationType === "part-example"
      ? createApplicationComponentLinks(relation)
      : [],
  );

export const getApplicationComponentLink = (
  applicationSlug: string,
  partLabel: string,
) =>
  applicationComponentLinks.find(
    (link) =>
      link.applicationSlug === applicationSlug && link.partLabel === partLabel,
  );

export const getApplicationComponentLinks = (applicationSlug: string) =>
  applicationComponentLinks.filter(
    (link) => link.applicationSlug === applicationSlug,
  );

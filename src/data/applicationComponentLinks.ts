export type ApplicationComponentLink = {
  applicationSlug: string;
  partLabel: string;
  href: string;
  label: string;
};

export const applicationComponentLinks: ApplicationComponentLink[] = [
  {
    applicationSlug: "motion-components",
    partLabel: "Precision Gear",
    href: "/components/precision-plastic-gears",
    label: "Precision Plastic Gear Guide",
  },
  {
    applicationSlug: "motion-components",
    partLabel: "Bushing",
    href: "/components/bushings-and-sleeves",
    label: "Bushings & Sleeves Guide",
  },
];

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

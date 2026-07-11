import Link from "next/link";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import type { ResourcePage } from "@/data/resources";

type ResourcePageActionsProps = {
  relatedLinks: ResourcePage["relatedLinks"];
};

export function ResourcePageActions({
  relatedLinks,
}: ResourcePageActionsProps) {
  return (
    <>
      <section className="resource-related-links" aria-label="Related resources">
        <h2>Related Next Steps</h2>
        <div>
          {relatedLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <MaterialRecommendationCta
        kicker="Technical Review"
        title="Need This Filled Around Your Project?"
        className="selection-support-band resource-cta mt-12"
      >
        <p>
          Send the part information, working condition, target property,
          current material, tooling stage, and document needs. We will help
          connect the right material direction with the right supporting data.
        </p>
      </MaterialRecommendationCta>
    </>
  );
}

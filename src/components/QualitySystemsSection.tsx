import Link from "next/link";

import type { Certification } from "@/data/company";

type QualitySystemsSectionProps = {
  certifications: ReadonlyArray<
    Pick<Certification, "standard" | "system" | "documentHref">
  >;
};

export function QualitySystemsSection({
  certifications,
}: QualitySystemsSectionProps) {
  return (
    <section className="quality-systems-section" aria-label="Quality certifications">
      <div className="site-container">
        <div className="certification-strip">
          <p>Quality systems</p>
          <div>
            {certifications.map((certificate) => (
              <Link key={certificate.standard} href={certificate.documentHref}>
                <strong>{certificate.standard}</strong>
                <span>{certificate.system}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

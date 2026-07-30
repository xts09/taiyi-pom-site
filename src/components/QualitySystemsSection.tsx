import Image from "next/image";
import Link from "next/link";

import type { Certification } from "@/data/company";
import { publicPath } from "@/lib/paths";

type QualitySystemsSectionProps = {
  certifications: ReadonlyArray<
    Pick<
      Certification,
      | "standard"
      | "system"
      | "scope"
      | "imageSrc"
      | "documentHref"
    >
  >;
};

export function QualitySystemsSection({
  certifications,
}: QualitySystemsSectionProps) {
  return (
    <section className="quality-systems-section" aria-label="Quality certifications">
      <div className="site-container">
        <div className="certification-strip">
          <header className="certification-heading">
            <div>
              <span aria-hidden="true" />
              <h2>Certified Quality Systems</h2>
            </div>
            <p>
              Independent management-system certificates supporting automotive,
              production, environmental and workplace requirements.
            </p>
          </header>

          <div className="certificate-gallery">
            {certifications.map((certificate) => (
              <Link
                key={certificate.standard}
                className="certificate-document"
                href={certificate.documentHref}
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <figcaption>
                    <span>{certificate.system}</span>
                    <strong>{certificate.standard}</strong>
                  </figcaption>
                  <div className="certificate-image-frame">
                    <Image
                      src={publicPath(certificate.imageSrc)}
                      alt={`${certificate.standard} ${certificate.system} certificate`}
                      fill
                      sizes="(max-width: 48rem) 44vw, (max-width: 70rem) 42vw, 20vw"
                    />
                  </div>
                  <p className="certificate-scope">{certificate.scope}</p>
                  <div className="certificate-document-action">
                    <span className="certificate-view">View certificate ↗</span>
                  </div>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

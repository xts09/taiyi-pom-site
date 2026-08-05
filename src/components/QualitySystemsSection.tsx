import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionIntro } from "@/components/SectionIntro";
import { Card } from "@/components/ui/card";
import type { Certification } from "@/data/company";
import { publicPath } from "@/lib/paths";

type QualitySystemsSectionProps = {
  certifications: ReadonlyArray<
    Pick<
      Certification,
      | "standard"
      | "system"
      | "certificateNumber"
      | "validUntil"
      | "imageSrc"
      | "documentHref"
    >
  >;
};

export function QualitySystemsSection({
  certifications,
}: QualitySystemsSectionProps) {
  const certificateCount = certifications.length.toString().padStart(2, "0");

  return (
    <section
      className="quality-systems-section home-evidence-section home-evidence-section-dark"
      aria-label="Quality certifications"
    >
      <div className="site-container">
        <div className="certification-strip">
          <SectionIntro
            className="certification-heading home-evidence-intro"
            descriptionClassName="home-evidence-description"
            description="View our current IATF 16949, ISO 9001, ISO 14001 and ISO 45001 management-system certificates."
            eyebrow="QUALITY EVIDENCE"
            eyebrowClassName="home-evidence-eyebrow"
            layout="split"
            title="Certified Quality Systems"
            titleClassName="home-evidence-title"
            titleId="quality-systems-title"
            variant="dark"
          />

          <Card className="certificate-vault" variant="evidence">
            <div className="certificate-vault-head">
              <span>Management system documents</span>
              <strong>{certificateCount} current certificates</strong>
            </div>

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
                    <div className="certificate-image-frame">
                      <Image
                        src={publicPath(certificate.imageSrc)}
                        alt={`${certificate.standard} ${certificate.system} certificate`}
                        fill
                        sizes="(max-width: 48rem) 78vw, (max-width: 70rem) 42vw, 20vw"
                      />
                    </div>
                    <figcaption>
                      <span>{certificate.system}</span>
                      <strong>{certificate.standard}</strong>
                    </figcaption>
                    <div className="certificate-meta">
                      <span>Certificate no. {certificate.certificateNumber}</span>
                      <span>Valid through {certificate.validUntil}</span>
                    </div>
                    <span className="certificate-view">
                      View PDF <ArrowUpRight aria-hidden="true" size={14} />
                    </span>
                  </figure>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

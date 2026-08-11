import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionIntro } from "@/components/SectionIntro";
import { Card } from "@/components/ui/card";
import type { Certification, CompanyQualification } from "@/data/company";
import { publicPath } from "@/lib/paths";

type QualitySystemsSectionProps = {
  certifications: ReadonlyArray<
    Pick<
      Certification,
      | "standard"
      | "system"
      | "imageSrc"
      | "documentHref"
    >
  >;
  qualifications: ReadonlyArray<CompanyQualification>;
};

export function QualitySystemsSection({
  certifications,
  qualifications,
}: QualitySystemsSectionProps) {
  const certificateCount = certifications.length.toString().padStart(2, "0");

  return (
    <section
      className="quality-systems-section home-evidence-section home-evidence-section-dark"
      aria-label="Quality certifications"
    >
      <div className="site-container">
        <div className="certification-strip">
          <div className="company-credentials-block">
            <SectionIntro
              className="certification-heading home-evidence-intro"
              descriptionClassName="home-evidence-description"
              description="Recognized enterprise credentials and current management-system certificates provide practical evidence for supplier qualification."
              eyebrow="COMPANY EVIDENCE"
              eyebrowClassName="home-evidence-eyebrow"
              layout="split"
              title="Credentials and Quality Systems"
              titleClassName="home-evidence-title"
              titleId="quality-systems-title"
              variant="dark"
            />

            <div
              className="company-credential-register"
              aria-label="Company credentials"
            >
              {qualifications.map((qualification) => (
                <div
                  className="company-credential-item"
                  key={qualification.title}
                >
                  <span>{qualification.category}</span>
                  <strong>{qualification.title}</strong>
                </div>
              ))}
            </div>
          </div>

          <Card className="certificate-vault" variant="evidence">
            <div className="certificate-vault-head">
              <span>Management system documents</span>
              <strong>{certificateCount} current certificates</strong>
            </div>

            <p className="certificate-vault-intro">
              These documents cover the management systems supporting material
              production, environmental controls, and workplace safety. Open
              each certificate to review its certified scope.
            </p>

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

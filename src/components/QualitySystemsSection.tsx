import { AboutCredentials } from "@/app/about/AboutSections";
import type { Certification, CompanyQualification } from "@/data/company";

type QualitySystemsSectionProps = {
  availableDocuments: ReadonlyArray<string>;
  certifications: ReadonlyArray<Certification>;
  qualifications: ReadonlyArray<CompanyQualification>;
};

export function QualitySystemsSection({
  availableDocuments,
  certifications,
  qualifications,
}: QualitySystemsSectionProps) {
  return (
    <div className="quality-systems-section">
      <div className="site-container">
        <AboutCredentials
          availableDocuments={availableDocuments}
          certifications={certifications}
          description="Enterprise recognition, current management-system certificates and material documents provide practical evidence for supplier review and project qualification."
          presentation="section"
          qualifications={qualifications}
          title="Credentials for Supplier Qualification"
          tone="light"
        />
      </div>
    </div>
  );
}

import { FactoryEvidence } from "@/components/FactoryEvidence";
import { FactoryGallery } from "@/components/FactoryGallery";
import { HomeStageHeader } from "@/components/HomeStageHeader";
import type { FactoryImage } from "@/data/company";

type FactoryEvidenceItem = {
  label: string;
  title: string;
  detail: string;
};

type FactoryProofSectionProps = {
  images: ReadonlyArray<FactoryImage>;
  evidence: ReadonlyArray<FactoryEvidenceItem>;
};

export function FactoryProofSection({
  images,
  evidence,
}: FactoryProofSectionProps) {
  return (
    <section id="factory-snapshot" className="home-stage factory-proof">
      <div className="site-container">
        <div className="factory-proof-layout">
          <FactoryGallery images={images} />

          <div className="factory-proof-content">
            <HomeStageHeader title="Factory Snapshot">
              <p>
                Production, inspection, batch and document context stay close
                to the material discussion so teams can qualify more than a
                datasheet.
              </p>
            </HomeStageHeader>

            <FactoryEvidence items={evidence} />
          </div>
        </div>
      </div>
    </section>
  );
}

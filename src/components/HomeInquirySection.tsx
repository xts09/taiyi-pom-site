import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type HomeInquirySectionProps = {
  checklist: ReadonlyArray<string>;
};

export function HomeInquirySection({ checklist }: HomeInquirySectionProps) {
  return (
    <section
      id="material-review"
      className="home-inquiry"
      data-footer-adjacent="true"
    >
      <div className="site-container home-inquiry-inner">
        <div className="home-inquiry-copy">
          <p className="home-inquiry-kicker">START A REVIEW</p>
          <h2>Send the project inputs for a useful first review.</h2>
          <span>
            Known details are enough to begin. Mark uncertain items and include
            any current grade, drawing or failure sample available.
          </span>
        </div>
        <Card className="home-inquiry-panel gap-0 border-0 py-0 shadow-none">
          <p className="home-inquiry-panel-label">PROJECT INPUTS</p>
          <ul className="home-inquiry-checklist">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button
            asChild
            size="form"
            variant="primary"
            className="home-inquiry-action h-auto"
          >
            <Link href="/contact">
              Discuss Your Application
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </Button>
        </Card>
      </div>
    </section>
  );
}

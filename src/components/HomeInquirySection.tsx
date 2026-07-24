import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type HomeInquirySectionProps = {
  checklist: ReadonlyArray<string>;
};

export function HomeInquirySection({ checklist }: HomeInquirySectionProps) {
  return (
    <section id="material-review" className="home-inquiry">
      <div className="site-container home-inquiry-inner">
        <div className="home-inquiry-copy">
          <h2>Send the part. We’ll narrow the grade.</h2>
          <span>
            Share the working conditions, tooling constraints and required
            documents so the discussion starts with engineering context.
          </span>
        </div>
        <Card className="home-inquiry-panel gap-0 rounded-none border-0 py-0 shadow-none">
          <ul className="home-inquiry-checklist">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button
            asChild
            variant="ghost"
            className="home-inquiry-action h-auto rounded-none"
          >
            <Link href="/contact">Send Requirement &rarr;</Link>
          </Button>
        </Card>
      </div>
    </section>
  );
}

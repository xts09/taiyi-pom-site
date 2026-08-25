import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { HomeMessages } from "@/i18n/types";

type HomeInquirySectionProps = {
  messages: HomeMessages["inquiry"];
  contactHref: string;
};

export function HomeInquirySection({
  messages,
  contactHref,
}: HomeInquirySectionProps) {
  return (
    <section
      id="material-review"
      className="home-inquiry"
      data-footer-adjacent="true"
    >
      <div className="site-container home-inquiry-inner">
        <div className="home-inquiry-copy">
          <h2>{messages.eyebrow}</h2>
          <span>{messages.title}</span>
        </div>
        <Card className="home-inquiry-panel gap-0 border-0 py-0 shadow-none">
          <p className="home-inquiry-panel-label">{messages.checklistLabel}</p>
          <ul className="home-inquiry-checklist">
            {messages.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button
            asChild
            size="form"
            variant="primary"
            className="home-inquiry-action h-auto"
          >
            <Link href={contactHref}>
              {messages.action}
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </Button>
        </Card>
      </div>
    </section>
  );
}

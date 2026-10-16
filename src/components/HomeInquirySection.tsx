import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionIntro } from "@/components/SectionIntro";
import type { ContactFormMessages, HomeMessages } from "@/i18n/types";
import { createContactHref, type ContactIntent } from "@/lib/contactContext";
import { publicPath } from "@/lib/paths";
import styles from "./HomeSections.module.css";

type HomeInquirySectionProps = {
  messages: HomeMessages["inquiry"];
  inquiryLabels: ContactFormMessages["inquiryTypeOptions"];
  localizedHref: (href: string) => string;
};

const inquiryIntents: readonly ContactIntent[] = ["tds", "sample", "grade-evaluation", "quote-supply"];

export function HomeInquirySection({
  messages,
  inquiryLabels,
  localizedHref,
}: HomeInquirySectionProps) {
  return (
    <section id="material-review" className={styles.inquiry} aria-labelledby="home-inquiry-title">
      <Image
        className={styles.inquiryBackground}
        fill
        src={publicPath("/images/home/material-curve-bright-blue.webp")}
        alt=""
        sizes="100vw"
      />
      <div className="site-container">
        <div className={styles.inquiryPanel}>
          <SectionIntro
            className={styles.intro}
            titleClassName={styles.title}
            descriptionClassName={styles.description}
            title={messages.eyebrow}
            titleId="home-inquiry-title"
            description={messages.body}
          />
          <ul className={styles.inquiryList}>
            {inquiryIntents.map((intent) => (
              <li key={intent}>
                <Link href={localizedHref(intent === "tds"
                  ? "/technical-data-sheets"
                  : createContactHref({intent, source: messages.eyebrow}))}>
                  {inquiryLabels[intent]}
                  <ArrowRight aria-hidden="true" size={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

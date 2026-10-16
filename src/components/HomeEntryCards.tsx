import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { homeComponentEntries } from "@/data/homeEntries";
import { publicPath } from "@/lib/paths";
import styles from "./HomeSections.module.css";

type HomeEntryCardProps = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
};

export function HomeComponentCard({
  title, href, image, imageAlt, part,
}: HomeEntryCardProps & { part: (typeof homeComponentEntries)[number]["part"] }) {
  return (
    <Link className={styles.partCard} data-part={part} href={href}>
      <h3>{title}</h3>
      <span className={styles.partImage}>
        <Image fill src={publicPath(image)} alt={imageAlt} sizes="(min-width: 48rem) 30vw, 45vw" />
      </span>
      <span className={styles.cardArrow}><ArrowRight aria-hidden="true" size={18} /></span>
    </Link>
  );
}

export function HomeIndustryCard({ title, href, image, imageAlt }: HomeEntryCardProps) {
  return (
    <Link className={styles.industryCard} href={href}>
      <span className={styles.industryImage}>
        <Image fill src={publicPath(image)} alt={imageAlt} sizes="(min-width: 64rem) 23vw, 45vw" />
      </span>
      <h3>{title}</h3>
      <span className={styles.cardArrow}><ArrowRight aria-hidden="true" size={18} /></span>
    </Link>
  );
}

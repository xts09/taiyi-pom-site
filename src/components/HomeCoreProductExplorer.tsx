import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { HomeTaskFirstMessages } from "@/i18n/types";
import { publicPath } from "@/lib/paths";

type HomeCoreProductExplorerProps = {
  messages: HomeTaskFirstMessages["core"];
  familyHrefs: readonly string[];
};

export function HomeCoreProductExplorer({
  messages,
  familyHrefs,
}: HomeCoreProductExplorerProps) {
  const pomHref = familyHrefs[0];
  const materialFamilies = familyHrefs
    .map((href, index) => ({
      href,
      label: index === 0 ? "POM" : messages.supportingLinks[index],
    }))
    .filter((family): family is { label: string; href: string } =>
      Boolean(family.href && family.label),
    );
  if (!pomHref) {
    return null;
  }

  return (
    <section
      id="entry-points"
      className="home-material-entry home-task-section"
    >
      <div className="site-container">
        <header className="home-products-intro">
          <h2>{messages.eyebrow}</h2>
        </header>
        <div className="home-material-stage">
          <nav
            className="home-material-family-nav"
            aria-label={messages.directionsAria}
          >
            {materialFamilies.map((family, index) => (
              <Link
                key={family.label}
                className={
                  index === 0
                    ? "home-material-family-link is-featured"
                    : "home-material-family-link"
                }
                href={family.href}
                aria-describedby={
                  index === 0 ? "home-material-pom-title" : undefined
                }
              >
                <strong>{family.label}</strong>
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            ))}
          </nav>

          <section
            className="home-material-active"
            aria-labelledby="home-material-pom-title"
          >
            <figure className="home-material-visual">
              <Image
                fill
                src={publicPath(
                  "/materials/real/pom-black-modified-pellets-real-master.webp",
                )}
                alt={messages.materialImageAlt}
                sizes="(min-width: 80rem) 46rem, (min-width: 64rem) 50vw, 100vw"
              />
              <figcaption>
                <span>{messages.materialImageCaption}</span>
                <strong aria-hidden="true">POM</strong>
              </figcaption>
            </figure>

            <article className="home-material-active-content">
              <h3 id="home-material-pom-title">PLATFORM® POM</h3>
              <p>{messages.body}</p>
              <Button
                asChild
                className="home-material-learn-more"
                size="form"
                variant="primary"
              >
                <Link href={pomHref}>
                  {messages.action}
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </Button>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}

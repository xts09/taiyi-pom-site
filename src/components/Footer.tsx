import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { AnalyticsSettingsButton } from "@/components/AnalyticsConsent";
import { applications } from "@/data/applications";
import {
  getResourceNavigationGroupPath,
  resourceNavigationGroups,
} from "@/data/resourceNavigation";
import { getCategoryPath } from "@/lib/productCategories";
import { contactEmail } from "@/lib/seo";

function LinkedInMark({
  size = 20,
}: {
  size?: number;
  strokeWidth?: number;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6.5 8.2H3.1V21h3.4V8.2ZM4.8 3A2 2 0 1 0 4.8 7a2 2 0 0 0 0-4ZM21 13.7c0-3.9-2.1-5.8-4.9-5.8-2.3 0-3.3 1.3-3.9 2.2V8.2H8.8V21h3.4v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H21v-7.3Z" />
    </svg>
  );
}

function WhatsAppMark({
  size = 20,
}: {
  size?: number;
  strokeWidth?: number;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a9.84 9.84 0 0 0-8.47 14.84L2 22l5.3-1.47A9.98 9.98 0 1 0 12 2Zm0 17.96a8.02 8.02 0 0 1-4.1-1.12l-.3-.18-3.15.88.84-3.08-.2-.32A7.95 7.95 0 1 1 12 19.96Zm4.38-5.97c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const footerColumns = [
  {
    title: "Products",
    links: [
      { href: getCategoryPath("POM"), label: "POM Compounds" },
      { href: getCategoryPath("PA6 Compound"), label: "PA6 Compounds" },
      { href: getCategoryPath("PA66 Compound"), label: "PA66 Compounds" },
      { href: getCategoryPath("PPA Compound"), label: "PPA Compounds" },
      { href: getCategoryPath("Base POM Resin"), label: "POM Resin" },
      {
        href: "/products/conductive-antistatic-compounds",
        label: "Conductive & Antistatic Compounds",
      },
    ],
  },
  {
    title: "Applications",
    links: [
      ...applications.slice(0, 4).map((item) => ({
        href: `/applications/${item.slug}`,
        label: item.title,
      })),
      { href: "/components", label: "Component Solutions" },
      { href: "/applications", label: "All Applications" },
    ],
  },
  {
    title: "Resources",
    links: resourceNavigationGroups.map((group) => ({
      href: getResourceNavigationGroupPath(group),
      label: group.title,
    })),
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Sales" },
      {
        href: "/about#overview-credentials-title",
        label: "Quality & Compliance",
      },
      {
        href: "/about#manufacturing",
        label: "Manufacturing",
      },
    ],
  },
];

const contactActions = [
  {
    href: `mailto:${contactEmail}`,
    label: "Email",
    detail: contactEmail,
    icon: Mail,
    ariaLabel: `Email ${contactEmail}`,
    external: false,
  },
  {
    href: "tel:+8618796418919",
    label: "Call",
    detail: "+86 187 9641 8919",
    icon: Phone,
    ariaLabel: "Call +86 187 9641 8919",
    external: false,
  },
  {
    href: "https://wa.me/8618796418919",
    label: "WhatsApp",
    detail: "+86 187 9641 8919",
    icon: WhatsAppMark,
    ariaLabel: "Message Taiyi Polymer on WhatsApp",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner site-container">
        <div className="site-footer-lead">
          <div className="site-footer-brand">
            <span className="site-footer-logo">
              <Image
                src="/platform-wordmark-white.png"
                alt="PLATFORM registered trademark"
                width={1400}
                height={217}
              />
            </span>
            <div className="site-footer-brand-body">
              <p className="site-footer-brand-relation">
                Taiyi Polymer · PLATFORM® Engineering Materials
              </p>
            </div>
          </div>

          <div className="site-footer-pitch">
            <h2>Material decisions, grounded in the part.</h2>
            <p className="site-footer-pitch-copy">
              Tell us about your part, operating conditions and performance
              targets. We&apos;ll help shortlist relevant grades and confirm the
              samples and technical documents available for evaluation.
            </p>
            <Link className="site-footer-pitch-action" href="/contact">
              Discuss Your Application
              <ArrowUpRight aria-hidden="true" size={19} strokeWidth={1.8} />
            </Link>
          </div>

          <div
            className="site-footer-contact-actions"
            aria-label="Footer contact actions"
          >
            {contactActions.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.ariaLabel}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                <span className="site-footer-contact-icon">
                  <item.icon aria-hidden="true" size={20} strokeWidth={1.7} />
                </span>
                <span className="site-footer-contact-copy">
                  <span>{item.label}</span>
                  <strong>{item.detail}</strong>
                </span>
              </a>
            ))}
          </div>
        </div>

        <nav
          className="site-footer-menu site-footer-menu--desktop"
          aria-label="Footer navigation"
        >
          {footerColumns.map((column) => (
            <section
              key={column.title}
              className={`site-footer-column site-footer-column--${column.title.toLowerCase()}`}
            >
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((item) => (
                  <li key={`${column.title}-${item.href}-${item.label}`}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        <nav
          className="site-footer-mobile-menu"
          aria-label="Footer navigation"
        >
          {footerColumns.map((column) => (
            <details key={`mobile-${column.title}`}>
              <summary>
                <span>{column.title}</span>
                <span className="site-footer-mobile-menu-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <ul>
                {column.links.map((item) => (
                  <li key={`mobile-${column.title}-${item.href}-${item.label}`}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </nav>

        <div className="site-footer-bottom">
          <div className="site-footer-bottom-meta">
            <p className="site-footer-bottom-location">Yancheng, Jiangsu, China</p>
            <a
              className="site-footer-bottom-link"
              href="https://www.linkedin.com/company/taiyi-nano-technology/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInMark size={15} />
              LinkedIn
              <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.7} />
            </a>
          </div>
          <div className="site-footer-legal">
            <p className="site-footer-copy">
              &copy; 2026 Jiangsu Taiyi Nano Technology Co., Ltd. All rights reserved.
            </p>
            <Link href="/privacy">Privacy Policy</Link>
            <AnalyticsSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { applications } from "@/data/applications";
import { resourcePages } from "@/data/resources";
import { getCategoryPath } from "@/lib/productCategories";

const footerColumns = [
  {
    title: "Products",
    links: [
      { href: getCategoryPath("POM"), label: "POM Compounds" },
      { href: "/contact", label: "PA6 / PA66" },
      { href: "/contact", label: "PPA / PPS" },
      { href: getCategoryPath("Base POM Resin"), label: "POM Resin" },
    ],
  },
  {
    title: "Applications",
    links: applications.map((item) => ({
      href: `/applications/${item.slug}`,
      label: item.title,
    })),
  },
  {
    title: "Resources",
    links: [
      ...resourcePages.map((page) => ({
        href: `/resources/${page.slug}`,
        label: page.navLabel,
      })),
      { href: "/technical-data-sheets", label: "Technical Data Sheets" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Taiyi Nano" },
      { href: "/contact", label: "Contact Sales" },
      { href: "/products", label: "Product Portfolio" },
      { href: "/applications", label: "Application Areas" },
    ],
  },
];

const contactActions = [
  {
    href: "mailto:xiatianshi@jstynm.com",
    label: "Email Us",
    icon: Mail,
  },
  {
    href: "tel:+8618796418919",
    label: "Phone",
    icon: Phone,
  },
  {
    href: "https://www.linkedin.com/company/taiyi-nano-technology/",
    label: "LinkedIn",
    icon: ExternalLink,
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner site-container">
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
            <p className="site-footer-company">
              Jiangsu Taiyi Nano Technology Co., Ltd.
            </p>
            <p className="site-footer-line">
              Modified POM compounds & selected engineering plastic compounds
            </p>
            <p className="site-footer-location">
              Jiangsu, China
            </p>
            <div className="site-footer-contact-actions" aria-label="Footer contact actions">
              {contactActions.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  <item.icon aria-hidden="true" size={14} strokeWidth={2} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav className="site-footer-menu" aria-label="Footer navigation">
          {footerColumns.map((column) => (
            <section
              key={column.title}
              className={`site-footer-column site-footer-column--${column.title.toLowerCase()}`}
            >
              <h2>{column.title}</h2>
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

        <div className="site-footer-bottom">
          <p className="site-footer-copy">
            &copy; 2026 Jiangsu Taiyi Nano Technology Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

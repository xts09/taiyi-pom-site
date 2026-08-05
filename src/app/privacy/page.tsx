import type { Metadata } from "next";
import { contactEmail } from "@/lib/seo";
import styles from "./PrivacyPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Taiyi Polymer",
  description:
    "How Jiangsu Taiyi Nano Technology Co., Ltd. collects, uses, and protects information submitted through the PLATFORM website.",
  alternates: {
    canonical: "/privacy",
  },
};

const updatedDate = "July 28, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`site-container ${styles.heroInner}`}>
          <h1>Privacy Policy</h1>
          <p>
            This policy explains how Jiangsu Taiyi Nano Technology Co., Ltd.
            handles information submitted through the PLATFORM website and
            information generated when the site is used.
          </p>
          <span className={styles.updated}>Last updated {updatedDate}</span>
        </div>
      </section>

      <section className={styles.content}>
        <article className={`site-container ${styles.policy}`}>
          <p className={styles.intro}>
            Jiangsu Taiyi Nano Technology Co., Ltd. is responsible for the
            personal information described in this policy. This notice applies
            to this website, its inquiry forms, and related communications.
          </p>

          <section className={styles.section}>
            <h2>Information we collect</h2>
            <ul>
              <li>
                Inquiry information, including company name, email address,
                material interest, application or part information, and any
                requirement details you choose to provide.
              </li>
              <li>
                Contact information you provide when you email, call, or message
                us through WhatsApp or LinkedIn.
              </li>
              <li>
                Limited technical information used to operate and protect the
                site. The inquiry endpoint temporarily uses an IP address for
                rate limiting and abuse prevention.
              </li>
              <li>
                If Google Analytics or Google Ads tags are enabled, usage data
                such as browser and device information, approximate location,
                site interactions, and cookie or similar identifiers.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>How we use information</h2>
            <ul>
              <li>To review and respond to material and application inquiries.</li>
              <li>
                To provide relevant samples, technical documents, and follow-up
                information requested during an evaluation.
              </li>
              <li>To operate, secure, diagnose, and improve the website.</li>
              <li>
                To measure site and inquiry performance when analytics or
                advertising measurement is enabled.
              </li>
              <li>To comply with applicable legal obligations.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Legal bases</h2>
            <p>
              Where applicable law requires a legal basis, we process inquiry
              information to take steps requested by you, to communicate about a
              potential business relationship, and for our legitimate interests
              in operating and securing the site. We rely on consent where it is
              required for non-essential analytics or advertising technologies.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Sharing and service providers</h2>
            <p>
              We do not sell personal information. We may share information with
              service providers that support website hosting, email delivery,
              security, analytics, and advertising measurement, or with advisers
              and authorities where required by law. These providers process
              information only for the relevant service or legal purpose.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Cookies and analytics</h2>
            <p>
              When Google measurement tags are enabled, Google Analytics may use
              first-party cookies and collect device, browser, approximate
              location, and site interaction data. You can block or delete
              cookies through your browser settings. For more information, see
              Google&apos;s{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              . This website does not currently present a separate Cookie
              Settings control.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Retention and international processing</h2>
            <p>
              We retain inquiry and communication records only for as long as
              reasonably needed to respond, support a business relationship,
              maintain security, and meet legal or recordkeeping requirements.
              Service providers or recipients may process information in
              countries other than your own, subject to applicable safeguards.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Your choices and rights</h2>
            <p>
              Depending on your location, you may have rights to request access,
              correction, deletion, restriction, portability, or objection to
              certain processing. You may also withdraw consent where processing
              is based on consent. We may need to verify your identity before
              completing a request.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact us</h2>
            <p>
              For privacy questions or requests, email{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              . You can also contact Jiangsu Taiyi Nano Technology Co., Ltd. in
              Yancheng, Jiangsu, China.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}

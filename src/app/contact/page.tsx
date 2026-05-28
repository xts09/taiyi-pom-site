import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { publicPath } from "@/lib/paths";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Taiyi Nano | POM Material Inquiry",
  description:
    "Contact Jiangsu Taiyi Nano Technology Co., Ltd. for Natural POM Resin and Modified POM Compounds inquiries, material recommendations, documents, samples, and project evaluation.",
  path: "/contact",
  image: "/factory-extrusion.png",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="mesh-surface mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="inner-hero reveal-up mb-12 max-w-4xl">
          <p className="section-kicker mb-4">
            Contact Taiyi Nano
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Send Us Your Material Requirements
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            For faster material review, send the application, current material
            reference, key requirements, document needs, color, and estimated
            volume in one message.
          </p>
        </div>

        <div className="stagger-list grid gap-8 lg:grid-cols-3">
          <div
            className="premium-card lift-card overflow-hidden rounded-[1.1rem] lg:col-span-1"
            style={{ "--item-index": 0 } as CSSProperties}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={publicPath("/factory-machine.png")}
                alt="Taiyi Nano production equipment"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-950">
                Sales Contact
              </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
              <div>
                <p className="font-semibold text-slate-950">Contact Person</p>
                <p>Ethan Xia</p>
                <p>Sales Manager</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Company</p>
                <p>Jiangsu Taiyi Nano Technology Co., Ltd.</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Email</p>
                <p>xiatianshi@jstynm.com</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">WhatsApp</p>
                <p>+86 18796418919</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Country</p>
                <p>China</p>
              </div>
            </div>
            </div>
          </div>

          <div
            className="premium-card lift-card rounded-[1.1rem] p-6 lg:col-span-2"
            style={{ "--item-index": 1 } as CSSProperties}
          >
            <h2 className="text-xl font-semibold text-slate-950">
              What to Include in Your Inquiry
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-700">
              To help us recommend a suitable material, please include the
              following information when contacting us:
            </p>

            <div className="stagger-list mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Application or molded part type",
                "Current material or reference grade",
                "Key performance requirements",
                "MFI / processing requirements if known",
                "Color and document requirements",
                "Estimated monthly or annual volume",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200/80 bg-white/70 p-4 text-sm font-semibold text-slate-700"
                  style={{ "--item-index": index } as CSSProperties}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:xiatianshi@jstynm.com?subject=POM%20Material%20Inquiry&body=Dear%20Ethan%2C%0D%0A%0D%0AWe%20would%20like%20to%20inquire%20about%20POM%20materials.%0D%0A%0D%0AApplication%3A%0D%0ACurrent%20material%20or%20reference%20grade%3A%0D%0AKey%20requirements%3A%0D%0AEstimated%20volume%3A%0D%0ADestination%20country%3A%0D%0A%0D%0ARegards%2C"
                className="cta-primary px-6 py-3 text-sm"
              >
                Email Ethan
              </a>

              <a
                href="https://wa.me/8618796418919"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary px-6 py-3 text-sm"
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-6 text-xs leading-5 text-slate-500">
              For technical review, please attach relevant drawings, current
              material references, TDS, or performance requirements where
              available.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

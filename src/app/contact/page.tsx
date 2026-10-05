import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { contactPage, site } from "@/lib/content";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.intro,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
      <PageIntro eyebrow="Contact" title={contactPage.heading}>
        <p>{contactPage.intro}</p>
      </PageIntro>

      <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
        <ContactForm />

        <aside className="self-start">
          <h2 className="h3">Let&apos;s talk.</h2>
          <p className="mt-3">{contactPage.diagnostic}</p>
          <dl className="mt-6 space-y-4 border-t border-rule pt-6">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="font-bold break-all text-ink hover:text-orange-safe">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Phone</dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="font-bold text-ink hover:text-orange-safe">
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}

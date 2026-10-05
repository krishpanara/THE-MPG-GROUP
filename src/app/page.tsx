import ButtonLink from "@/components/ButtonLink";
import CircuitBanner from "@/components/CircuitBanner";
import ClosingCta from "@/components/ClosingCta";
import Experience from "@/components/Experience";
import ServiceRows from "@/components/ServiceRows";
import WhyChooseUs from "@/components/WhyChooseUs";
import type { Metadata } from "next";
import { home, site } from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

// Organization data for search engines (brief tab 9).
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/mpgw-brand-assets/mpgw-logo-full-colour@3x.png`,
  email: site.email,
  telephone: site.phone,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />

      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <section aria-labelledby="hero-heading" className="pt-10 md:pt-16">
          <p className="eyebrow">Why we are here</p>
          <h1 id="hero-heading" className="h1 mt-3 max-w-4xl">
            {home.headline}
          </h1>
          <p className="mt-5 max-w-4xl text-lg md:text-xl">{home.subhead}</p>
          <ButtonLink href="/contact" className="mt-8">
            Talk to Us
          </ButtonLink>
        </section>

        <section aria-labelledby="what-heading" className="pt-16">
          <p className="eyebrow">What we do</p>
          <h2 id="what-heading" className="h2 mt-3">
            <span className="block text-body">{home.whatWeDoLead}</span>
            {home.whatWeDoClose}
          </h2>
          <div className="mt-6">
            <ServiceRows />
          </div>
        </section>

        <WhyChooseUs />
        <CircuitBanner />
      </div>

      <div className="mt-14">
        <Experience statement={home.whoWeAre} />
      </div>

      <ClosingCta />
    </>
  );
}

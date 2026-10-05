import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import PageIntro from "@/components/PageIntro";
import ServiceRows from "@/components/ServiceRows";
import { servicesOverview } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: `${servicesOverview.intro} Fractional CHRO, Foundational HR, Business Venture HR, Specialist HR Practices and HR Systems & Technology Platforms.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
        <PageIntro eyebrow="What we offer" title="Five ways we step in, matched to where your business is.">
          <p>{servicesOverview.intro}</p>
        </PageIntro>
        <ServiceRows variant="full" headingLevel="h2" />
      </div>
      <ClosingCta />
    </>
  );
}

import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import Experience from "@/components/Experience";
import PageIntro from "@/components/PageIntro";
import { home, partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description: partners.body,
  alternates: { canonical: "/partners" },
};

// Content rules (brief tab 8): no partner names, photos or biographies.
export default function PartnersPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-8">
        <PageIntro eyebrow="Partners" title={partners.heading}>
          <p>{partners.body}</p>
        </PageIntro>
      </div>
      <Experience statement={home.whoWeAre} showContactRow={false} />
      <ClosingCta />
    </>
  );
}

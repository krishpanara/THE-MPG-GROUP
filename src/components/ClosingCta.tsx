import { contactPage, home } from "@/lib/content";
import ButtonLink from "./ButtonLink";

export default function ClosingCta({ heading = home.closingCta }: { heading?: string }) {
  return (
    <section aria-labelledby="cta-heading" className="bg-tint">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="h2">
            {heading}
          </h2>
          <p className="mt-3">{contactPage.diagnostic}</p>
        </div>
        <ButtonLink href="/contact" className="shrink-0">
          Talk to Us
        </ButtonLink>
      </div>
    </section>
  );
}

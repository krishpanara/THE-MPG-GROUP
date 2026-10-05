import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 md:py-28">
      <p className="eyebrow">404</p>
      <h1 className="h1 mt-3 max-w-3xl">This page is not here.</h1>
      <p className="mt-5 max-w-2xl text-lg">The address may have changed when the site was rebuilt.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="/">Go to the homepage</ButtonLink>
        <ButtonLink href="/services" variant="outline">
          See our services
        </ButtonLink>
      </div>
    </div>
  );
}

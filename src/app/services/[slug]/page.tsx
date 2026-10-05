import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import { services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

// Layout per brief tab 6: title, one-line description, "What it covers" list, Talk to Us button.
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
      <nav aria-label="Breadcrumb" className="pt-6 text-sm">
        <ol className="flex flex-wrap gap-2 text-muted">
          <li>
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/services" className="hover:text-ink">
              Services
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-ink">
            {service.name}
          </li>
        </ol>
      </nav>

      <article className="grid gap-10 pt-8 md:pt-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div>
          <div className="flex items-baseline gap-4">
            <span className="font-num text-[2.5rem] leading-none font-bold text-orange md:text-[3.25rem]">
              {service.number}
            </span>
            <p className="eyebrow">{service.tagline}</p>
          </div>
          <h1 className="h1 mt-4">{service.name}</h1>
          <p className="mt-5 max-w-3xl text-lg md:text-xl">{service.description}</p>

          <section aria-labelledby="covers-heading" className="mt-10 border-t-4 border-ink pt-6">
            <h2 id="covers-heading" className="h2">
              What it covers
            </h2>
            <ul className="mt-5 divide-y divide-rule border-b border-rule">
              {service.covers.map((c) => (
                <li key={c} className="flex gap-4 py-3.5">
                  <span aria-hidden className="mt-[0.55em] size-2.5 shrink-0 bg-orange" />
                  <span className="text-ink">{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <ButtonLink href="/contact" className="mt-10">
            Talk to Us
          </ButtonLink>
        </div>

        <aside aria-labelledby="others-heading" className="self-start bg-white p-6 lg:mt-2">
          <h2 id="others-heading" className="eyebrow">
            Other services
          </h2>
          <ul className="mt-3 divide-y divide-rule">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="flex gap-3 py-3 hover:text-orange-safe">
                  <span className="font-num font-bold text-orange-safe">{s.number}</span>
                  <span className="font-bold text-ink">{s.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </div>
  );
}

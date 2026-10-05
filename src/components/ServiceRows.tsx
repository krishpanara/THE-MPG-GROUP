import Link from "next/link";
import { services } from "@/lib/content";

type Props = {
  /** "summary" for the homepage cards; "full" adds what it covers and best-for on /services. */
  variant?: "summary" | "full";
  headingLevel?: "h2" | "h3";
};

function Arrow() {
  return (
    <svg aria-hidden viewBox="0 0 16 12" className="h-3 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M0 6h14M9 1l5 5-5 5" />
    </svg>
  );
}

export default function ServiceRows({ variant = "summary", headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  const full = variant === "full";

  return (
    <ol className="border-t-4 border-ink">
      {services.map((s) => (
        <li
          key={s.slug}
          className="grid grid-cols-[3rem_1fr] gap-x-3 border-b border-rule py-6 sm:grid-cols-[4.25rem_1fr] md:grid-cols-[4.25rem_1fr_15rem] md:gap-x-8 lg:grid-cols-[4.25rem_1fr_17rem]"
        >
          <span className="font-num text-[2rem] leading-none font-bold text-orange sm:text-[2.5rem]">{s.number}</span>

          <div>
            <Heading className="h3">
              <Link href={`/services/${s.slug}`} className="hover:text-orange-safe">
                {s.name}
              </Link>
            </Heading>
            <p className="eyebrow mt-1.5">{s.tagline}</p>
            <p className="mt-3 max-w-2xl text-body">{s.description}</p>

            {full && (
              <>
                <p className="mt-4 text-sm font-bold tracking-[0.1em] text-ink uppercase">What it covers</p>
                <ul className="mt-2 space-y-1.5">
                  {s.covers.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span aria-hidden className="mt-[0.6em] size-2 shrink-0 bg-orange" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="col-start-2 mt-4 flex flex-col items-start gap-4 md:col-start-3 md:mt-0">
            {full && (
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-ink uppercase">Best for</p>
                <p className="mt-1.5">{s.bestFor}</p>
              </div>
            )}
            <Link
              href={`/services/${s.slug}`}
              className="inline-flex items-center gap-2 font-bold text-orange-safe hover:text-ink"
            >
              View service<span className="sr-only">: {s.name}</span>
              <Arrow />
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
}

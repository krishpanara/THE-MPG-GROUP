import { home, reasons } from "@/lib/content";

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="pt-16">
      <p className="eyebrow">Why choose us</p>
      <h2 id="why-heading" className="h2 mt-3">
        The senior HR team you need, without the full-time salary.
      </h2>
      <p className="mt-3 text-lg font-bold text-orange-safe md:text-xl">{home.whyChooseUs}</p>

      <ul className="mt-7 grid gap-x-10 gap-y-5 md:grid-cols-2">
        {reasons.map((r) => (
          <li key={r.title} className="flex gap-3">
            <span aria-hidden className="mt-[0.5em] size-2.5 shrink-0 bg-orange" />
            <p>
              <strong className="font-bold text-ink">{r.title}</strong> {r.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { industries, site } from "@/lib/content";

type Props = {
  /** Lead line in the right column, e.g. the "Who we are" statement. */
  statement: string;
  showContactRow?: boolean;
};

export default function Experience({ statement, showContactRow = true }: Props) {
  return (
    <section aria-labelledby="experience-heading" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-9 sm:px-8">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-x-12">
          <div>
            <p className="font-num text-7xl leading-[0.9] font-bold md:text-[5.5rem]">100+</p>
            <p className="mt-4 text-sm font-bold tracking-[0.12em] text-peach uppercase">
              Years of combined experience
            </p>
          </div>
          <div className="md:pt-1">
            <p className="text-sm font-bold tracking-[0.12em] text-peach uppercase">Who we are</p>
            <h2 id="experience-heading" className="mt-2 max-w-2xl font-serif text-xl leading-snug font-bold md:text-2xl">
              {statement}
            </h2>
            <p className="mt-2 text-white/85">The partner who diagnoses your business is the partner who treats it.</p>
          </div>
        </div>

        <p className="mt-10 font-bold tracking-[0.14em] text-peach uppercase">Industries we have worked in</p>
        <ul className="mt-3 flex flex-wrap gap-2.5">
          {industries.map((name) => (
            <li key={name} className="border border-white/60 px-2.5 py-1 text-base text-white">
              {name}
            </li>
          ))}
        </ul>

        {showContactRow && (
          <div className="mt-9 flex flex-col gap-3 border-t border-white/25 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-white/85">{site.tagline}</p>
            <ul className="flex flex-col gap-1 font-bold sm:flex-row sm:flex-wrap sm:items-center sm:gap-0">
              <li>
                <a href={site.phoneHref} className="hover:text-peach">
                  {site.phone}
                </a>
              </li>
              <li className="sm:before:mx-4 sm:before:font-normal sm:before:text-white/40 sm:before:content-['|']">
                <a href={`mailto:${site.email}`} className="hover:text-peach">
                  {site.email}
                </a>
              </li>
              <li className="sm:before:mx-4 sm:before:font-normal sm:before:text-white/40 sm:before:content-['|']">
                <a href={site.url} className="hover:text-peach">
                  {site.domain}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

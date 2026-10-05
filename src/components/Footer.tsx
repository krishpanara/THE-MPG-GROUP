import Link from "next/link";
import { services, site } from "@/lib/content";
import Logo from "./Logo";

const heading = "text-sm font-bold tracking-[0.12em] text-peach uppercase";
const link = "text-white/85 transition-colors hover:text-white hover:underline";

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1.4fr_0.8fr_1.2fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-white/85">{site.tagline}</p>
          </div>

          <nav aria-label="Services">
            <p className={heading}>Services</p>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={link}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className={heading}>Company</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/partners" className={link}>
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className={link}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className={heading}>Talk to us</p>
            <address className="mt-3 space-y-2 not-italic">
              <a href={`mailto:${site.email}`} className={`block font-bold break-all ${link}`}>
                {site.email}
              </a>
              <a href={site.phoneHref} className={`block font-bold ${link}`}>
                {site.phone}
              </a>
            </address>
            <p className="mt-3 text-white/85">Partnership enquiries are welcome.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/20 pt-6 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {site.copyrightYear} {site.legalName}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className={link}>
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={link}>
                Terms
              </Link>
            </li>
            <li>
              <Link href="/legal-disclaimer" className={link}>
                Legal disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

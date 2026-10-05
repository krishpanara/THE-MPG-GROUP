"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/content";
import ButtonLink from "./ButtonLink";
import Logo from "./Logo";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 8"
      className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M1 1.5 6 6.5 11 1.5" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  // Close menus on navigation.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServicesOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const navLink = (href: string) =>
    `font-bold transition-colors hover:text-orange-safe ${isActive(href) ? "text-orange-safe" : "text-ink"}`;

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex items-center justify-between gap-4 border-b-2 border-ink py-4">
          <Logo />

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li ref={servicesRef} className="relative">
                <div className="flex items-center gap-1.5">
                  <Link href="/services" className={navLink("/services")}>
                    Services
                  </Link>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    aria-label="Show the five services"
                    onClick={() => setServicesOpen((o) => !o)}
                    className="p-1 text-ink hover:text-orange-safe"
                  >
                    <Chevron open={servicesOpen} />
                  </button>
                </div>
                {servicesOpen && (
                  <ul
                    id="services-menu"
                    className="absolute top-full left-1/2 mt-4 w-80 -translate-x-1/2 border-t-4 border-ink bg-white py-2 shadow-lg"
                  >
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex gap-3 px-5 py-2.5 hover:bg-tint"
                        >
                          <span className="font-num font-bold text-orange-safe">{s.number}</span>
                          <span className="font-bold text-ink">{s.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href="/partners" className={navLink("/partners")}>
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className={navLink("/contact")}>
                  Contact
                </Link>
              </li>
              <li>
                <ButtonLink href="/contact">Talk to Us</ButtonLink>
              </li>
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex items-center gap-2 px-2 py-2 font-bold text-ink lg:hidden"
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <svg aria-hidden viewBox="0 0 20 14" className="h-3.5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M3 1 17 13M17 1 3 13" /> : <path d="M0 1h20M0 7h20M0 13h20" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" aria-label="Main" className="border-b border-rule pb-6 lg:hidden">
            <p className="eyebrow mt-5">Services</p>
            <ul className="mt-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="flex gap-3 py-2">
                    <span className="font-num font-bold text-orange-safe">{s.number}</span>
                    <span className="font-bold text-ink">{s.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="block py-2 font-bold text-orange-safe">
                  All services
                </Link>
              </li>
            </ul>
            <ul className="mt-3 border-t border-rule pt-3">
              <li>
                <Link href="/partners" className="block py-2 font-bold text-ink">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 font-bold text-ink">
                  Contact
                </Link>
              </li>
            </ul>
            <ButtonLink href="/contact" className="mt-4 w-full">
              Talk to Us
            </ButtonLink>
          </nav>
        )}
      </div>
    </header>
  );
}

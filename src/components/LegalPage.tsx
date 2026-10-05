import type { Metadata } from "next";
import type { LegalDoc } from "@/lib/legal";

export function legalMetadata(doc: LegalDoc, path: string): Metadata {
  return {
    title: doc.title,
    alternates: { canonical: path },
    // Drafts stay out of search results until counsel has reviewed them.
    robots: doc.reviewed ? undefined : { index: false, follow: true },
  };
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-10 pb-16 sm:px-8 md:pt-14">
      <p className="eyebrow">Legal</p>
      <h1 className="h1 mt-3">{doc.title}</h1>

      {!doc.reviewed && (
        <p role="note" className="mt-6 border-l-4 border-orange bg-tint px-4 py-3 text-ink">
          <strong>Draft for legal review.</strong> This text is not final. Details in square brackets are still to be
          confirmed.
        </p>
      )}

      <div className="mt-8 space-y-7">
        {doc.sections.map((s, i) => (
          <section key={s.heading ?? i}>
            {s.heading && <h2 className="h3">{s.heading}</h2>}
            <p className={s.heading ? "mt-2" : ""}>{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

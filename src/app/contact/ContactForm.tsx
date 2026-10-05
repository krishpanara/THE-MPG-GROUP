"use client";

import Link from "next/link";
import { useActionState } from "react";
import { contactPage } from "@/lib/content";
import { submitContact, type ContactState } from "./actions";

const input =
  "mt-1.5 block w-full border border-rule bg-white px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-ink aria-invalid:border-orange-safe";
const label = "block font-bold text-ink";

function FieldError({ id, text }: { id: string; text?: string }) {
  if (!text) return null;
  return (
    <p id={id} className="mt-1 text-sm font-bold text-orange-safe">
      {text}
    </p>
  );
}

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(submitContact, { status: "idle" });

  if (state.status === "success") {
    return (
      <div role="status" className="border-t-4 border-orange bg-white p-8">
        <p className="h3">{contactPage.confirmation}</p>
      </div>
    );
  }

  const e = state.errors ?? {};
  const v = state.values ?? {};
  const field = (name: keyof typeof e) => ({
    id: name,
    name,
    defaultValue: v[name],
    "aria-invalid": e[name] ? true : undefined,
    "aria-describedby": e[name] ? `${name}-error` : undefined,
  });

  return (
    <form action={action} noValidate className="space-y-5 border-t-4 border-ink bg-white p-6 sm:p-8">
      {state.message && (
        <p role="alert" className="border-l-4 border-orange bg-tint px-4 py-3 font-bold text-ink">
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input {...field("name")} type="text" autoComplete="name" required className={input} />
          <FieldError id="name-error" text={e.name} />
        </div>
        <div>
          <label htmlFor="company" className={label}>
            Company
          </label>
          <input {...field("company")} type="text" autoComplete="organization" required className={input} />
          <FieldError id="company-error" text={e.company} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input {...field("email")} type="email" autoComplete="email" required className={input} />
          <FieldError id="email-error" text={e.email} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input {...field("phone")} type="tel" autoComplete="tel" className={input} />
          <FieldError id="phone-error" text={e.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          What is the headache?
        </label>
        <textarea {...field("message")} rows={6} required className={input} />
        <FieldError id="message-error" text={e.message} />
      </div>

      {/* Honeypot for bots; hidden from people and screen readers. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <div className="flex gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            aria-invalid={e.consent ? true : undefined}
            aria-describedby={e.consent ? "consent-error" : undefined}
            className="mt-1 size-5 shrink-0 accent-orange-safe"
          />
          <label htmlFor="consent" className="text-ink">
            {contactPage.consent}{" "}
            <Link href="/privacy" className="font-bold text-orange-safe underline">
              Read the privacy notice.
            </Link>
          </label>
        </div>
        <FieldError id="consent-error" text={e.consent} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center bg-orange px-6 py-3 text-lg leading-none font-bold text-white transition-colors hover:bg-orange-safe disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

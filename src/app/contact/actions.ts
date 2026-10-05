"use server";

import { headers } from "next/headers";
import { site } from "@/lib/content";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "company" | "email" | "phone" | "message" | "consent", string>>;
  values?: Record<string, string>;
};

// Simple in-memory rate limit: 5 submissions per IP per 10 minutes (per server instance).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const values = {
    name: get("name"),
    company: get("company"),
    email: get("email"),
    phone: get("phone"),
    message: get("message"),
  };

  // Honeypot: real visitors never see or fill this field.
  if (get("website")) return { status: "success" };

  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = "Please enter your name.";
  if (!values.company) errors.company = "Please enter your company.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.phone && !/^[+\d][\d\s()-]{6,}$/.test(values.phone)) errors.phone = "Please check the phone number.";
  if (values.message.length < 5) errors.message = "Please tell us what the headache is.";
  if (formData.get("consent") !== "on") errors.consent = "Please tick the box so we can reply to you.";
  if (Object.keys(errors).length) return { status: "error", errors, values };

  const h = await headers();
  const ip = h.get("cf-connecting-ip") ?? h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return {
      status: "error",
      message: `Too many messages in a short time. Please try again later or email ${site.email}.`,
      values,
    };
  }

  const text = [
    `Name: ${values.name}`,
    `Company: ${values.company}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "(not given)"}`,
    "",
    "What is the headache?",
    values.message,
    "",
    "Consent to reply: yes",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] RESEND_API_KEY not set; enquiry not emailed:\n" + text);
      return { status: "success" };
    }
    return { status: "error", message: `The form is not available right now. Please email ${site.email}.`, values };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? `The MPG Group website <website@${site.domain}>`,
      to: [process.env.CONTACT_TO ?? site.email],
      reply_to: values.email,
      subject: `Website enquiry from ${values.name}, ${values.company}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] send failed", res.status, await res.text());
    return { status: "error", message: `Sorry, your message did not send. Please email ${site.email}.`, values };
  }

  return { status: "success" };
}

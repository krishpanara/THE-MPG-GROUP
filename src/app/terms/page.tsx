import LegalPage, { legalMetadata } from "@/components/LegalPage";
import { terms } from "@/lib/legal";

export const metadata = legalMetadata(terms, "/terms");

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}

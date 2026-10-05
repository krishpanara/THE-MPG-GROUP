import LegalPage, { legalMetadata } from "@/components/LegalPage";
import { privacy } from "@/lib/legal";

export const metadata = legalMetadata(privacy, "/privacy");

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}

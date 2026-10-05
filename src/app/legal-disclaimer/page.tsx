import LegalPage, { legalMetadata } from "@/components/LegalPage";
import { disclaimer } from "@/lib/legal";

export const metadata = legalMetadata(disclaimer, "/legal-disclaimer");

export default function DisclaimerPage() {
  return <LegalPage doc={disclaimer} />;
}

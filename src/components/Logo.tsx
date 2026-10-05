import Image from "next/image";
import Link from "next/link";

type Props = { variant?: "full-colour" | "charcoal" | "white"; className?: string };

const ASPECT = 422 / 111; // viewBox of the delivered wordmark SVGs

/**
 * Brand wordmark from mpgw-brand-assets (brief tab 1). Full-colour on off-white or white,
 * white on charcoal or dark backgrounds. Never narrower than 160 px.
 */
export default function Logo({ variant = "full-colour", className = "" }: Props) {
  const width = 190;
  return (
    <Link href="/" className={`inline-block shrink-0 ${className}`}>
      <Image
        src={`/mpgw-brand-assets/mpgw-logo-${variant}.svg`}
        alt="The MPG Group"
        width={width}
        height={Math.round(width / ASPECT)}
        priority={variant === "full-colour"}
        unoptimized
        className="h-auto w-[170px] min-w-[160px] sm:w-[190px]"
      />
    </Link>
  );
}

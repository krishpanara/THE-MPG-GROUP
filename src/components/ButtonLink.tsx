import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

/** White on #D9531E only passes contrast at 18px bold or larger (brief tab 2), so buttons stay at that size. */
export default function ButtonLink({ href, children, variant = "solid", className = "" }: Props) {
  const styles =
    variant === "solid"
      ? "bg-orange text-white hover:bg-orange-safe"
      : "border-2 border-ink text-ink hover:bg-ink hover:text-white";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-lg leading-none font-bold transition-colors ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

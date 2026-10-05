type Props = { eyebrow: string; title: string; children?: React.ReactNode };

/** Heading block used at the top of inner pages. */
export default function PageIntro({ eyebrow, title, children }: Props) {
  return (
    <div className="pt-10 pb-8 md:pt-14">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="h1 mt-3 max-w-4xl">{title}</h1>
      {children && <div className="mt-5 max-w-3xl text-lg md:text-xl">{children}</div>}
    </div>
  );
}

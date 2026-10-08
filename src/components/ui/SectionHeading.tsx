import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {children ? (
        <div className="section-heading__support">{children}</div>
      ) : null}
    </header>
  );
}

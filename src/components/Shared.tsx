import type { ReactNode } from "react";
export function Icon({ name }: { name: string }) {
  return (
    <span className="icon" aria-hidden="true">
      <img
        src={`/icons/${name}.png`}
        alt=""
        width="32"
        height="32"
        loading="lazy"
      />
    </span>
  );
}
export function SectionHeading({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="section-number" aria-hidden="true">
        {number}
      </span>
      <div>
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}
export function Brand() {
  return (
    <a className="brand" href="#home" aria-label="CyberShield, back to top">
      <img src="/logos/cybershield.webp" width="44" height="46" alt="" />
      <span>
        CYBERSHIELD<small>Academic project showcase</small>
      </span>
    </a>
  );
}

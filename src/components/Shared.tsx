import { useEffect, useRef, type ReactNode } from "react";
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
      <div className="section-label" aria-hidden="true">
        <span>{number}</span>
        <span>CYBERSHIELD</span>
      </div>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    node.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("reveal-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
export function Brand({ href = "#home" }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="CyberShield">
      <img src="/logos/cybershield.webp" width="44" height="46" alt="" />
      <span>
        CYBERSHIELD<small>Research showcase</small>
      </span>
    </a>
  );
}

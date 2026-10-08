import { useEffect, useRef, useState } from "react";
import { Brand } from "./Shared";

const links = [
  ["Project", "project"],
  ["Security", "security"],
  ["System", "system"],
  ["Evidence", "results"],
  ["Method", "methodology"],
  ["Team", "team"],
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [active, setActive] = useState("home");
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  useEffect(() => {
    const hero = document.querySelector("#home");
    if (!hero || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-76px 0px 0px", threshold: 0.08 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = ["home", ...links.map(([, id]) => id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-22% 0px -62%", threshold: [0.05, 0.25] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`header${pastHero ? " header-surface" : ""}${open ? " menu-open" : ""}`}
    >
      <div className="container nav-inner">
        <Brand />
        <button
          ref={button}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="menu-icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
        <nav
          id="navigation"
          aria-label="Main navigation"
          className={open ? "navigation open" : "navigation"}
        >
          {links.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
          <a className="nav-primary" href="#system" onClick={() => setOpen(false)}>
            View system
          </a>
        </nav>
      </div>
    </header>
  );
}

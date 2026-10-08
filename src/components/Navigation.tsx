import { useEffect, useRef, useState } from "react";
import { Brand } from "./Shared";
const links = [
  ["Project", "project"],
  ["Features", "features"],
  ["Security", "security"],
  ["System", "system"],
  ["Results", "results"],
  ["Team", "team"],
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="header">
      <div className="container nav-inner">
        <Brand />
        <button
          ref={button}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="navigation"
          aria-label="Main navigation"
          className={open ? "navigation open" : "navigation"}
        >
          {links.map(([name, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

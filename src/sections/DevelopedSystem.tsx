import { useRef, useState } from "react";
import { screenshots } from "../data/content";
import { SectionHeading } from "../components/Shared";
export default function DevelopedSystem() {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const s = screenshots[index];
  function move(n: number) {
    setIndex((i) => (i + n + screenshots.length) % screenshots.length);
  }
  return (
    <section className="section" id="system">
      <div className="container">
        <SectionHeading number="05" title="Developed System">
          Explore the actual role-based interfaces of the academic prototype.
        </SectionHeading>
        <div className="gallery">
          <div className="gallery-tabs" aria-label="Choose a dashboard">
            {screenshots.map((shot, i) => (
              <button
                key={shot.id}
                className={i === index ? "selected" : ""}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              >
                {shot.label}
              </button>
            ))}
          </div>
          <div className="gallery-main">
            <div className="gallery-image">
              {s.image ? (
                <button
                  className="image-button"
                  onClick={() => dialog.current?.showModal()}
                  aria-label={`Enlarge ${s.title}`}
                >
                  <img
                    src={s.image}
                    alt={`${s.title}, displaying sample records and role-specific navigation`}
                    width={s.width}
                    height={s.height}
                    loading="lazy"
                  />
                  <span className="enlarge-label">Enlarge screenshot</span>
                </button>
              ) : (
                <div className="screenshot-placeholder">
                  <span className="placeholder-mark" aria-hidden="true">
                    ▧
                  </span>
                  <strong>Sanitized Administrator Dashboard</strong>
                  <p>Public screenshot pending</p>
                </div>
              )}
            </div>
            <div className="gallery-caption" aria-live="polite">
              <p className="eyebrow">ROLE-BASED WORKSPACE</p>
              <h3>{s.title}</h3>
              <p>{s.caption}</p>
              <p className="small">
                {s.image
                  ? "Interface shown using sanitized demonstration data."
                  : "This placeholder will be replaced after the screenshot is sanitized."}
              </p>
              <div className="gallery-controls">
                <button
                  onClick={() => move(-1)}
                  aria-label="Previous dashboard"
                >
                  ‹
                </button>
                <span>
                  {index + 1} / {screenshots.length}
                </span>
                <button onClick={() => move(1)} aria-label="Next dashboard">
                  ›
                </button>
              </div>
            </div>
          </div>
          <div className="gallery-thumbnails" aria-label="Dashboard previews">
            {screenshots.map((shot, i) => (
              <button
                key={shot.id}
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                className={index === i ? "selected" : ""}
              >
                {shot.image ? (
                  <img
                    src={shot.image}
                    alt=""
                    width={shot.width}
                    height={shot.height}
                    loading="lazy"
                  />
                ) : (
                  <span className="thumbnail-placeholder">
                    Screenshot pending
                  </span>
                )}
                <span>{shot.label}</span>
              </button>
            ))}
          </div>
        </div>
        <dialog
          ref={dialog}
          className="lightbox"
          aria-labelledby="lightbox-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) dialog.current?.close();
          }}
        >
          <div className="lightbox-heading">
            <h3 id="lightbox-title">{s.title}</h3>
            <button onClick={() => dialog.current?.close()} autoFocus>
              Close ×
            </button>
          </div>
          {s.image && (
            <div
              className="zoom-region"
              tabIndex={0}
              role="region"
              aria-label="Full-size screenshot; scroll to inspect"
            >
              <img
                src={s.image}
                width={s.width}
                height={s.height}
                alt={`${s.title} with demonstration data`}
              />
            </div>
          )}
          <p className="small">
            Interface shown using sanitized demonstration data. Scroll within
            the image to inspect details.
          </p>
        </dialog>
      </div>
    </section>
  );
}

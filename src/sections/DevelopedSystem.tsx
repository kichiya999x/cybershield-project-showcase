import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { screenshots } from "../data/content";
import { Reveal, SectionHeading } from "../components/Shared";
export default function DevelopedSystem() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const s = screenshots[index];

  useEffect(() => {
    setLoading(Boolean(s.image));
    setImageError(false);
    const next = screenshots[(index + 1) % screenshots.length];
    if (next.image) {
      const preload = new Image();
      preload.src = next.image;
    }
  }, [index, s.image]);

  useEffect(
    () => () => {
      document.body.classList.remove("dialog-open");
    },
    [],
  );

  function move(n: number) {
    setIndex((i) => (i + n + screenshots.length) % screenshots.length);
  }
  function openDialog() {
    document.body.classList.add("dialog-open");
    dialog.current?.showModal();
  }
  function closeDialog() {
    dialog.current?.close();
  }
  function selectWithKeyboard(event: KeyboardEvent, current: number) {
    let next = current;
    if (event.key === "ArrowRight") next = (current + 1) % screenshots.length;
    else if (event.key === "ArrowLeft") next = (current - 1 + screenshots.length) % screenshots.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = screenshots.length - 1;
    else return;
    event.preventDefault();
    setIndex(next);
    tabs.current[next]?.focus();
  }
  return (
    <section className="section system-section" id="system">
      <div className="container">
        <Reveal>
          <SectionHeading number="05" title="Developed System">
            Explore the actual role-based interfaces of the academic prototype.
          </SectionHeading>
        </Reveal>
        <div className="gallery">
          <div
            className="gallery-tabs"
            role="tablist"
            aria-label="Choose a dashboard"
          >
            {screenshots.map((shot, i) => (
              <button
                key={shot.id}
                ref={(node) => {
                  tabs.current[i] = node;
                }}
                id={`dashboard-tab-${shot.id}`}
                role="tab"
                className={i === index ? "selected" : ""}
                aria-selected={i === index}
                aria-controls="dashboard-panel"
                tabIndex={i === index ? 0 : -1}
                onClick={() => setIndex(i)}
                onKeyDown={(event) => selectWithKeyboard(event, i)}
              >
                <span>0{i + 1}</span>
                {shot.label} dashboard
              </button>
            ))}
          </div>
          <div
            className="gallery-main"
            id="dashboard-panel"
            role="tabpanel"
            aria-labelledby={`dashboard-tab-${s.id}`}
          >
            <div className="gallery-image" key={`image-${s.id}`}>
              {s.image ? (
                <button
                  className="image-button"
                  onClick={openDialog}
                  aria-label={`Enlarge ${s.title}`}
                >
                  {loading && !imageError && (
                    <span className="image-loading">Loading dashboard preview…</span>
                  )}
                  {imageError && (
                    <span className="image-loading image-error">
                      Dashboard preview is unavailable. Choose another role.
                    </span>
                  )}
                  <img
                    key={s.image}
                    src={s.image}
                    alt={`${s.title}, displaying sample records and role-specific navigation`}
                    width={s.width}
                    height={s.height}
                    loading="lazy"
                    onLoad={() => setLoading(false)}
                    onError={() => {
                      setLoading(false);
                      setImageError(true);
                    }}
                  />
                  <span className="enlarge-label">
                    <span>View full screenshot</span>
                    <span aria-hidden="true">＋</span>
                  </span>
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
            <div
              className="gallery-caption"
              key={`caption-${s.id}`}
              aria-live="polite"
            >
              <p className="eyebrow">ROLE-BASED WORKSPACE / 0{index + 1}</p>
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
                  <span aria-hidden="true">←</span>
                </button>
                <span>
                  0{index + 1} / 0{screenshots.length}
                </span>
                <button onClick={() => move(1)} aria-label="Next dashboard">
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <dialog
          ref={dialog}
          className="lightbox"
          aria-labelledby="lightbox-title"
          onClose={() => document.body.classList.remove("dialog-open")}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDialog();
          }}
        >
          <div className="lightbox-heading">
            <h3 id="lightbox-title">{s.title}</h3>
            <button onClick={closeDialog} autoFocus>
              Close <span aria-hidden="true">×</span>
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

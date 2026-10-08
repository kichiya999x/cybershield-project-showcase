import { features, problems, projectTitle, workflow } from "../data/content";
import { Icon, SectionHeading } from "../components/Shared";
export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">
          HOPEFUL INNOVATIONS <span> / </span> FEU INSTITUTE OF TECHNOLOGY
        </p>
        <h1>
          CYBER<span>SHIELD</span>
        </h1>
        <p className="project-title">{projectTitle}</p>
        <p className="hero-summary">
          Digitizing firearm accountability through secure, centralized, and
          traceable records.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#project">
            Explore CyberShield
          </a>
          <a className="button outline" href="#demo">
            Watch Demo
          </a>
        </div>
        <div className="hero-bottom">
          <span>Security</span>
          <span>Traceability</span>
          <span>Accountability</span>
          <small>2026 · Academic prototype</small>
        </div>
      </div>
    </section>
  );
}
export function Problem() {
  return (
    <section className="section" id="project">
      <div className="container">
        <SectionHeading number="01" title="The Problem">
          Manual and decentralized record-keeping makes firearm accountability
          harder to maintain.
        </SectionHeading>
        <div className="problem-grid">
          {problems.map((p) => (
            <article className="card problem-card" key={p.title}>
              <Icon name={p.icon} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Introduction() {
  return (
    <section className="section section-tint" id="features">
      <div className="container">
        <SectionHeading number="02" title="Introducing CyberShield">
          One centralized platform for the post-inspection lifecycle of firearm
          records.
        </SectionHeading>
        <div className="introduction">
          <div>
            <p className="intro-copy">
              CyberShield brings firearm records, inspection findings, issuance
              and returns, and accountability monitoring into a shared web-based
              system. Role-specific workspaces support the responsibilities of
              administrators, logistics officers, inspectors, and accountable
              officers.
            </p>
            <div className="feature-grid">
              {features.map((f) => (
                <article className="feature" key={f.title}>
                  <Icon name={f.icon} />
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <figure className="intro-screen">
            <a
              href="#system"
              aria-label="Explore the Logistics Officer Dashboard"
            >
              <div className="screen-frame">
                <img
                  src="/screenshots/logistics.webp"
                  width="1978"
                  height="1248"
                  alt="CyberShield logistics dashboard showing demonstration firearm status and return counts"
                  loading="lazy"
                />
              </div>
            </a>
            <figcaption>
              <strong>Logistics Officer Dashboard</strong>
              <span>Interface shown using sanitized demonstration data.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
export function Workflow() {
  return (
    <section className="section workflow-section">
      <div className="container">
        <SectionHeading number="03" title="How CyberShield Works" />
        <ol className="workflow">
          {workflow.map((w, i) => (
            <li key={w}>
              <span className="step-number">0{i + 1}</span>
              <h3>{w}</h3>
              {i < workflow.length - 1 && (
                <span className="step-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

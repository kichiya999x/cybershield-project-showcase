import { team } from "../data/content";
import { Icon, Brand, SectionHeading } from "../components/Shared";
const methods = [
  [
    "document",
    "Developmental Research",
    "Design, develop, and evaluate a functional prototype.",
  ],
  [
    "synchronize",
    "DevSecOps",
    "Integrate security throughout development and review.",
  ],
  [
    "inspection",
    "ISO/IEC 25010",
    "Evaluate selected software-quality characteristics.",
  ],
  [
    "security",
    "STRIDE & OWASP ASVS",
    "Threat modeling and security verification guide testing.",
  ],
];
export function Methodology() {
  return (
    <section className="section" id="methodology">
      <div className="container">
        <SectionHeading number="07" title="Methodology">
          Structured development. Evidence-based evaluation.
        </SectionHeading>
        <div className="method-grid">
          {methods.map(([icon, title, text]) => (
            <article key={title}>
              <Icon name={icon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="source-note">
          Source: Chapter 3, research design and development methodology;
          Chapter 4, evaluation results.
        </p>
      </div>
    </section>
  );
}
export function Demo() {
  return (
    <section className="section section-tint" id="demo">
      <div className="container">
        <SectionHeading number="08" title="See CyberShield in Action" />
        <div className="demo-panel">
          <div>
            <p className="eyebrow">SYSTEM WALKTHROUGH</p>
            <h3>
              Follow a record.
              <br />
              Understand the workflow.
            </h3>
            <p>
              Dashboard · Inspection · Validation · Issuance · Chain of Custody
              · Audit Trail
            </p>
          </div>
          <div className="video-placeholder">
            <span className="video-symbol" aria-hidden="true">
              ▷
            </span>
            <strong>Sanitized demonstration video</strong>
            <p>Coming soon</p>
            <span>No public sign-in is required for this showcase.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <SectionHeading number="09" title="Hopeful Innovations">
          The research team behind CyberShield.
        </SectionHeading>
        <div className="team-grid">
          {team.map((name) => (
            <article className="team-member" key={name}>
              <span className="initials" aria-hidden="true">
                {name
                  .split(" ")
                  .filter((x) => x.length > 2)
                  .map((x) => x[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <h3>{name}</h3>
            </article>
          ))}
        </div>
        <div className="institution-row">
          <div>
            <strong>FEU Institute of Technology</strong>
            <p>
              Bachelor of Science in Information Technology
              <br />
              with specialization in Cybersecurity
            </p>
          </div>
          <div>
            <span className="small">Project Adviser</span>
            <strong>Mr. Alfredo L. Calimbo</strong>
          </div>
          <img
            className="ticap-logo"
            src="/logos/ticap.webp"
            width="240"
            height="120"
            alt="TICaP 21 — Technology Innovation in Capstone Project"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <>
      <aside className="academic-notice">
        <div className="container">
          <h2>Academic Project Notice</h2>
          <p>
            CyberShield is an academic prototype developed and evaluated within
            a controlled research environment. Available screenshots on this
            website use demonstration data. The project should not be
            interpreted as a publicly deployed or production-certified NAPOLCOM
            operational platform. Additional remediation and deployment-level
            security validation are recommended before broader operational
            implementation.
          </p>
        </div>
      </aside>
      <footer>
        <div className="container footer-inner">
          <Brand />
          <p>
            Hopeful Innovations · FEU Institute of Technology
            <br />© 2026 CyberShield academic project
          </p>
          <a href="https://icons8.com" target="_blank" rel="noreferrer">
            Icons by Icons8
          </a>
        </div>
      </footer>
    </>
  );
}

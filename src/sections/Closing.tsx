import { team } from "../data/content";
import { Icon, Brand, Reveal, SectionHeading } from "../components/Shared";
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
    <section className="section methodology-section" id="methodology">
      <div className="container">
        <Reveal>
          <SectionHeading number="07" title="Methodology">
            Structured development. Evidence-based evaluation.
          </SectionHeading>
        </Reveal>
        <div className="method-grid">
          {methods.map(([icon, title, text], index) => (
            <article key={title}>
              <span className="method-index">0{index + 1}</span>
              <div>
                <Icon name={icon} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
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
    <section className="section demo-section" id="demo">
      <div className="container">
        <Reveal>
          <SectionHeading number="08" title="System Walkthrough">
            A guided demonstration will be added after a sanitized video and
            transcript are approved.
          </SectionHeading>
        </Reveal>
        <div className="demo-panel">
          <div>
            <p className="eyebrow">PLANNED WALKTHROUGH</p>
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
            <span>VIDEO STATUS</span>
            <strong>Sanitized demonstration not yet supplied.</strong>
            <p>
              Playback will remain user-initiated and include captions or a
              transcript when the approved media is available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Team() {
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <Reveal>
          <SectionHeading number="09" title="Hopeful Innovations">
            The research team behind CyberShield.
          </SectionHeading>
        </Reveal>
        <div className="team-grid">
          {team.map((name, index) => (
            <article className="team-member" key={name}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{name}</h3>
              <p>Researcher</p>
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
          <nav aria-label="Footer navigation">
            <a href="#project">Project</a>
            <a href="#system">System</a>
            <a href="#results">Results</a>
            <a href="https://icons8.com" target="_blank" rel="noreferrer">
              Icons by Icons8
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

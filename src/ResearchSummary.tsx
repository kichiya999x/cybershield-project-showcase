import { Brand } from "./components/Shared";
import {
  projectTitle,
  qualityResults,
  securityResults,
  studyObjective,
  team,
} from "./data/content";

const methodology = [
  ["Developmental research", "Design, develop, and evaluate a functional prototype."],
  ["DevSecOps", "Integrate security activities throughout development and review."],
  ["ISO/IEC 25010", "Evaluate selected software-quality characteristics."],
  ["STRIDE and OWASP ASVS", "Guide threat modeling and application-security verification."],
];

const systemAreas = [
  "authorized user management and role-based dashboards",
  "centralized firearm records and post-inspection encoding",
  "issuance, return, custody, and accountability workflows",
  "incident reporting, reconciliation, compliance monitoring, and reports",
];

export default function ResearchSummary() {
  return (
    <div className="research-page">
      <header className="research-header">
        <div className="container research-header-inner">
          <Brand href="/" />
          <a className="research-back" href="/">
            <span aria-hidden="true">← Back to showcase</span> 
          </a>
        </div>
      </header>

      <main className="research-document">
        <header className="research-title-block">
          <p className="eyebrow">RESEARCH SUMMARY · ACADEMIC PROTOTYPE</p>
          <h1>{projectTitle}</h1>
          <p className="research-lead">
            A concise summary of the private undergraduate thesis and the
            evidence presented in the CyberShield project showcase.
          </p>
          <p className="research-notice">
            This page summarizes verified research content. It does not publish
            the full private thesis or represent a production deployment.
          </p>
        </header>

        <div className="research-body">
          <aside className="research-contents" aria-label="Research summary contents">
            <p>Contents</p>
            <ol>
              <li><a href="#background">Background</a></li>
              <li><a href="#objectives">Objectives</a></li>
              <li><a href="#scope">Scope</a></li>
              <li><a href="#research-methodology">Methodology</a></li>
              <li><a href="#system-overview">System overview</a></li>
              <li><a href="#cybersecurity">Cybersecurity</a></li>
              <li><a href="#evaluation">Evaluation</a></li>
              <li><a href="#findings">Findings</a></li>
              <li><a href="#limitations">Limitations</a></li>
              <li><a href="#research-team">Research team</a></li>
            </ol>
          </aside>

          <article className="research-copy">
            <section id="background">
              <p className="research-section-number">01</p>
              <h2>Background / Problem</h2>
              <p>
                The study responds to fragmented post-inspection firearm
                records, delayed validation, conflicting issuance information,
                and limited traceability across accountability activities in
                the National Police Commission – Installations and Logistics
                Service context.
              </p>
            </section>

            <section id="objectives">
              <p className="research-section-number">02</p>
              <h2>General Objective</h2>
              <p>{studyObjective.general}</p>
              <h3>Specific Objectives</h3>
              <ol className="research-list numbered">
                {studyObjective.specific.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ol>
            </section>

            <section id="scope">
              <p className="research-section-number">03</p>
              <h2>Scope</h2>
              <p>{studyObjective.scope}</p>
            </section>

            <section id="research-methodology">
              <p className="research-section-number">04</p>
              <h2>Methodology</h2>
              <dl className="research-definition-list">
                {methodology.map(([term, description]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="system-overview">
              <p className="research-section-number">05</p>
              <h2>System Overview</h2>
              <p>
                CyberShield is a centralized, role-based web prototype designed
                to connect the record lifecycle from inspection through review,
                issuance or return, and audit monitoring. Its functional areas
                include:
              </p>
              <ul className="research-list">
                {systemAreas.map((area) => <li key={area}>{area}</li>)}
              </ul>
            </section>

            <section id="cybersecurity">
              <p className="research-section-number">06</p>
              <h2>Cybersecurity Approach</h2>
              <p>
                The prototype applies role-based permissions, time-based
                one-time-password authentication, least-privilege principles,
                Argon2id password hashing, and tamper-evident audit logging. The
                design documentation also specifies AES-256 data protection;
                its at-rest implementation still requires deployment-level
                validation. WAF and SIEM capabilities remain planned
                infrastructure controls rather than verified application
                features.
              </p>
            </section>

            <section id="evaluation">
              <p className="research-section-number">07</p>
              <h2>Participants / Evaluation Approach</h2>
              <p>
                The software-quality evaluation reports responses from 100
                participants across the four intended user roles. Perceived
                quality was assessed using selected ISO/IEC 25010
                characteristics. Technical security findings came from 24
                executed application-layer test cases guided by the study’s
                threat model and verification criteria.
              </p>
            </section>

            <section id="findings">
              <p className="research-section-number">08</p>
              <h2>ISO/IEC 25010 Findings</h2>
              <p>
                The reported overall composite mean was <strong>4.73 out of
                5.00</strong>, interpreted in the study as “Highly Acceptable.”
                These values represent participant ratings and are separate
                from the technical security tests.
              </p>
              <div className="research-score-table" role="table" aria-label="ISO IEC 25010 findings">
                {qualityResults.map((result) => (
                  <div role="row" key={result.label}>
                    <span role="cell">{result.label}</span>
                    <strong role="cell">{result.value.toFixed(2)}</strong>
                  </div>
                ))}
              </div>

              <h2>Security Testing Findings</h2>
              <p>
                Of {securityResults.total} security test cases, {securityResults.passed}
                passed fully, {securityResults.note} passed with a note, and {securityResults.remediation}
                required remediation. This corresponds to an {securityResults.fullPass}
                full-pass rate and a {securityResults.accepted} accepted-outcome rate.
                Audit-log protection and access-control groups each passed all
                five of their reported cases.
              </p>
            </section>

            <section id="limitations">
              <p className="research-section-number">09</p>
              <h2>Limitations</h2>
              <ul className="research-list">
                <li>The system was developed and evaluated as an academic prototype in a controlled setting.</li>
                <li>Account-lockout enforcement and malformed numeric-input handling require correction and retesting.</li>
                <li>Direct uploaded-media authorization requires separate verification.</li>
                <li>Broader multi-factor authentication coverage and deployment-level data-at-rest protection were not fully validated.</li>
                <li>The reported results are not a production security certification.</li>
              </ul>

              <h2>Recommendations / Future Work</h2>
              <ul className="research-list">
                <li>Complete the identified remediation items and repeat the affected security tests.</li>
                <li>Validate the production deployment architecture, encryption at rest, storage access, monitoring, and recovery controls.</li>
                <li>Conduct broader usability, accessibility, performance, and operational acceptance testing with representative users.</li>
                <li>Prepare an approved, captioned walkthrough using only sanitized demonstration data.</li>
              </ul>
            </section>

            <section id="research-team">
              <p className="research-section-number">10</p>
              <h2>Researchers</h2>
              <ul className="research-name-list">
                {team.map((member) => <li key={member.name}>{member.name}</li>)}
              </ul>
              <h3>Adviser</h3>
              <p>Mr. Alfredo L. Calimbo</p>
              <p className="research-affiliation">
                Bachelor of Science in Information Technology with
                specialization in Cybersecurity<br />
                FEU Institute of Technology
              </p>
            </section>

            <footer className="research-return">
              <p>Continue exploring the interface evidence and detailed result panels.</p>
              <div>
                <a className="button primary" href="/#system">View developed system</a>
                <a className="text-link" href="/#results">Return to research results</a>
              </div>
            </footer>
          </article>
        </div>
      </main>
    </div>
  );
}

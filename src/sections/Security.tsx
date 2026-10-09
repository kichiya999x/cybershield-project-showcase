import { controls } from "../data/content";
import { Icon, Reveal, SectionHeading } from "../components/Shared";

export default function Security() {
  return (
    <section className="section security-section" id="security">
      <div className="container">
        <Reveal>
          <SectionHeading number="05" title="Cybersecurity by Design">
            Layered controls support record integrity, controlled access, and
            traceable activity.
          </SectionHeading>
        </Reveal>
        <div className="security-layout">
          <div className="security-intro">
            <p className="eyebrow">CONTROL MODEL</p>
            <h3>Identity, permissions, and traceable activity.</h3>
            <p>
              The prototype combines identity checks, role permissions,
              protected records, and audit logging. Some controls still require
              staging or deployment-level validation.
            </p>
          </div>
          <div className="security-rows">
            {controls.map((control, index) => (
              <article className="security-row" key={control.title}>
                <span className="security-index">0{index + 1}</span>
                <Icon name={control.icon} />
                <div>
                  <h3>{control.title}</h3>
                  <p>{control.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="security-lower">
          <aside className="architecture">
            <p className="eyebrow">CONCEPTUAL CONTROL FLOW</p>
            <h3>From an authorized user to a traceable record.</h3>
            <div className="architecture-flow">
            <div className="architecture-node">
              <Icon name="users" />
              <strong>Authorized users</strong>
              <span>Role-specific responsibilities</span>
            </div>
            <span className="architecture-connector" aria-hidden="true">/</span>
            <div className="architecture-node accent">
              <strong>CyberShield</strong>
              <span>Identity checks · Role permissions</span>
              <span>Validation · Audit logging</span>
            </div>
            <span className="architecture-connector" aria-hidden="true">/</span>
            <div className="architecture-node">
              <Icon name="database" />
              <strong>Centralized records</strong>
              <span>Traceable accountability history</span>
            </div>
            </div>
            <p className="small">
              Conceptual control flow; not an operational infrastructure
              diagram.
            </p>
          </aside>
          <div className="validation-note">
            <span>RESEARCH TRANSPARENCY</span>
            <strong>Validation is an ongoing process.</strong>
            <p>
              MFA and AES-256 at-rest protection require further validation.
              Web Application Firewall (WAF) and Security Information and Event
              Management (SIEM) components remained planned or deployment-level
              enhancements during testing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

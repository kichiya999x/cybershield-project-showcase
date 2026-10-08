import { controls } from "../data/content";
import { Icon, SectionHeading } from "../components/Shared";
export default function Security() {
  return (
    <section className="section section-tint" id="security">
      <div className="container">
        <SectionHeading number="04" title="Cybersecurity by Design">
          Layered controls support record integrity, controlled access, and
          traceable activity.
        </SectionHeading>
        <div className="security-layout">
          <div className="security-grid">
            {controls.map((c) => (
              <article className="card security-card" key={c.title}>
                <Icon name={c.icon} />
                <h3>{c.title}</h3>
                <p>{c.detail}</p>
                <span className={`control-status ${c.kind}`}>{c.status}</span>
              </article>
            ))}
          </div>
          <aside className="architecture">
            <p className="eyebrow">SECURITY APPROACH</p>
            <h3>
              Access with purpose.
              <br />
              Activity with a record.
            </h3>
            <div className="architecture-node">
              <Icon name="users" />
              <strong>Authorized users</strong>
              <span>Role-specific responsibilities</span>
            </div>
            <span className="architecture-connector" aria-hidden="true">
              ↓
            </span>
            <div className="architecture-node accent">
              <strong>CyberShield</strong>
              <span>Identity checks · Role permissions</span>
              <span>Validation · Audit logging</span>
            </div>
            <span className="architecture-connector" aria-hidden="true">
              ↓
            </span>
            <div className="architecture-node">
              <Icon name="database" />
              <strong>Centralized records</strong>
              <span>Traceable accountability history</span>
            </div>
            <p className="small">
              Conceptual control flow; not an operational infrastructure
              diagram.
            </p>
          </aside>
        </div>
        <div className="validation-note">
          <strong>Validation is an ongoing process.</strong>
          <p>
            MFA and AES-256 at-rest protection require further validation. Web
            Application Firewall (WAF) and Security Information and Event
            Management (SIEM) components remained planned or deployment-level
            enhancements during testing.
          </p>
        </div>
      </div>
    </section>
  );
}

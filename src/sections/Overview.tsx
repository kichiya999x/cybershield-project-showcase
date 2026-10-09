import {
  features,
  interfaceDisclosure,
  problems,
  projectTitle,
  workflow,
} from "../data/content";
import { Icon, Reveal, SectionHeading } from "../components/Shared";

export function Hero() {
  return (
    <section id="home" className="hero">
      <img
        className="hero-texture"
        src="/hero/cybershield-poster-atmosphere.webp"
        alt=""
        aria-hidden="true"
      />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">
            CYBERSHIELD <span>·</span> RESEARCH SHOWCASE
          </p>
          <h1>
            <span>Secure traceability,</span>
            <span>accountability</span>
            <span>&amp; protection.</span>
          </h1>
          <p className="hero-summary">
            An academic research prototype designed for centralized firearm
            traceability and accountability within the National Police
            Commission – Installations and Logistics Service context.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#project">
              Explore the project
            </a>
            <a className="text-link" href="/research/">
              Read research summary
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="CyberShield weapon tracing system">
          <div className="hero-mark-crop">
            <img
              className="hero-mark"
              src="/logos/cybershield-hero-mark.webp"
              width="526"
              height="638"
              alt="CyberShield shield emblem"
            />
          </div>
        </div>
        <div className="hero-footnote">
          <span>CYBERSHIELD / 2026</span>
          <span>FEU Institute of Technology</span>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="section ivory-section problem-section" id="project">
      <div className="container paper-surface">
        <Reveal>
          <SectionHeading number="01" title="The Problem">
            Manual and decentralized record-keeping makes firearm
            accountability harder to maintain.
          </SectionHeading>
        </Reveal>
        <div className="problem-editorial">
          <p className="editorial-statement">
            When records live in separate places, every handoff becomes harder
            to verify.
          </p>
          <div className="problem-list">
            {problems.map((problem, index) => (
              <article key={problem.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Introduction() {
  return (
    <section className="section ivory-section introduction-section" id="features">
      <div className="container">
        <Reveal>
          <SectionHeading number="03" title="Introducing CyberShield">
            One centralized platform for the post-inspection lifecycle of
            firearm records.
          </SectionHeading>
        </Reveal>
        <div className="introduction">
          <div className="introduction-copy">
            <p className="project-title">{projectTitle}</p>
            <p className="intro-copy">
              CyberShield brings firearm records, inspection findings,
              issuance and returns, and accountability monitoring into a shared
              web-based system. Role-specific workspaces support administrators,
              logistics officers, inspectors, and accountable officers.
            </p>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature" key={feature.title}>
                  <Icon name={feature.icon} />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
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
              <span>01 / Developed interface</span>
              <strong>Logistics Officer Dashboard</strong>
              <small>{interfaceDisclosure}</small>
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
        <Reveal>
          <SectionHeading number="04" title="How CyberShield Works">
            A five-stage path from field inspection to an accountable record.
          </SectionHeading>
        </Reveal>
        <ol className="workflow">
          {workflow.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

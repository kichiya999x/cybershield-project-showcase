import { Reveal, SectionHeading } from "../components/Shared";

const formUrl = "https://tally.so/r/kb97v6";
const embedUrl =
  "https://tally.so/embed/kb97v6?alignLeft=1&hideTitle=1&transparentBackground=1";

export default function Reviews() {
  return (
    <section className="section visitor-feedback-section" id="reviews">
      <div className="container">
        <Reveal>
          <SectionHeading number="10" title="Visitor Feedback">
            Explored CyberShield at our exhibit? Share your rating and feedback
            with the research team.
          </SectionHeading>
        </Reveal>
        <div className="visitor-feedback-panel">
          <p className="visitor-feedback-intro">
            Tell us what stood out to you or what we could improve.
            Your feedback helps us learn from this showcase.
          </p>
          <iframe
            className="visitor-feedback-form"
            src={embedUrl}
            title="CyberShield visitor rating and feedback form"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <p className="visitor-feedback-fallback">
            Having trouble viewing the form?{" "}
            <a href={formUrl} target="_blank" rel="noreferrer">
              Open the feedback form
            </a>
          </p>
          <p className="visitor-feedback-privacy">
            Responses are collected using Tally for academic showcase feedback.
            Please do not share confidential or sensitive information.
          </p>
        </div>
      </div>
    </section>
  );
}

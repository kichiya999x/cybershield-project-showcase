import { qualityResults, securityResults as r } from "../data/content";
import { Reveal, SectionHeading } from "../components/Shared";
export default function Results() {
  return (
    <section className="section results-section" id="results">
      <div className="container">
        <Reveal>
          <SectionHeading number="06" title="Research Results">
            Evaluated in a controlled academic environment. Findings include
            both strengths and remaining work.
          </SectionHeading>
        </Reveal>
        <div className="results-grid">
          <article className="quality-panel">
            <div className="panel-heading">
              <span>01</span>
              <h3 className="panel-title">ISO/IEC 25010 Evaluation</h3>
            </div>
            <div className="composite">
              <strong>
                4.73 <span>/ 5.00</span>
              </strong>
              <p>Overall Composite Mean</p>
              <span className="interpretation">Highly Acceptable</span>
            </div>
            <div
              className="bar-chart"
              role="img"
              aria-label="Quality scores out of five: Performance Efficiency 4.94; Reliability 4.78; Functional Suitability 4.76; Security 4.70; Usability 4.49."
            >
              {qualityResults.map((q) => (
                <div className="bar-row" key={q.label}>
                  <span>{q.label}</span>
                  <div className="bar-track">
                    <div style={{ width: `${(q.value / 5) * 100}%` }} />
                  </div>
                  <strong>{q.value.toFixed(2)}</strong>
                </div>
              ))}
              <div className="chart-scale">
                <span>0</span>
                <span>Score out of 5</span>
                <span>5</span>
              </div>
            </div>
            <p className="source-note">
              100 respondents; role-balanced means across four user roles. These
              are perceived software-quality ratings, separate from technical
              security tests.
              <br />
              Source: Chapter 4, Tables 42–43, pp. 161–162.
            </p>
          </article>
          <article className="testing-panel">
            <div className="panel-heading">
              <span>02</span>
              <h3 className="panel-title">Security Testing Results</h3>
            </div>
            <div className="test-total">
              <strong>{r.total}</strong>
              <span>Security Test Cases</span>
            </div>
            <div className="test-outcomes">
              <div className="passed">
                <strong>{r.passed}</strong>
                <span>Fully Passed</span>
              </div>
              <div className="noted">
                <strong>{r.note}</strong>
                <span>Passed with Note</span>
              </div>
              <div className="remediation">
                <strong>{r.remediation}</strong>
                <span>Require Remediation</span>
              </div>
            </div>
            <div className="rate-grid">
              <div>
                <strong>{r.fullPass}</strong>
                <span>Full Pass Rate</span>
              </div>
              <div>
                <strong>{r.accepted}</strong>
                <span>Accepted Outcome Rate</span>
              </div>
            </div>
            <p className="accepted-note">
              Accepted outcomes include the case that passed with a note: 22 of
              24 tests.
            </p>
            <details>
              <summary>Remaining findings & testing scope</summary>
              <ul>
                <li>Correct and retest account-lockout enforcement.</li>
                <li>
                  Validate malformed numeric input with controlled error
                  responses.
                </li>
                <li>
                  Verify direct uploaded-media authorization separately; the
                  upload test passed with a note.
                </li>
              </ul>
              <p>
                PT03 audit-log protection and PT04 access control each passed
                all five cases. Results apply to the executed application-layer
                tests, not a production security certification.
              </p>
            </details>
            <p className="source-note">
              Source: Chapter 4, Table 49, pp. 173–174; Chapter 6, §6.2.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

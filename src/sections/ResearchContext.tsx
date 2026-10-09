import { studyObjective } from "../data/content";
import { Reveal, SectionHeading } from "../components/Shared";

export default function ResearchContext() {
  return (
    <section className="section research-context-section" id="objectives">
      <div className="container">
        <Reveal>
          <SectionHeading number="02" title="Study Objectives & Scope">
            The research questions translated into a focused development and
            evaluation scope.
          </SectionHeading>
        </Reveal>
        <div className="research-context-layout">
          <article className="general-objective">
            <span>General objective</span>
            <p>{studyObjective.general}</p>
          </article>
          <ol className="specific-objectives">
            {studyObjective.specific.map((objective, index) => (
              <li key={objective}>
                <span>0{index + 1}</span>
                <p>{objective}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="scope-summary">
          <span>Project scope</span>
          <p>{studyObjective.scope}</p>
        </div>
      </div>
    </section>
  );
}

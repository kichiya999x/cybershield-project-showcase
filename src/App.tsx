import Navigation from "./components/Navigation";
import { Hero, Problem, Introduction, Workflow } from "./sections/Overview";
import ResearchContext from "./sections/ResearchContext";
import Security from "./sections/Security";
import DevelopedSystem from "./sections/DevelopedSystem";
import Results from "./sections/Results";
import { Methodology, Team, Footer } from "./sections/Closing";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Problem />
        <ResearchContext />
        <Introduction />
        <Workflow />
        <Security />
        <DevelopedSystem />
        <Results />
        <Methodology />
        <Team />
      </main>
      <Footer />
    </>
  );
}

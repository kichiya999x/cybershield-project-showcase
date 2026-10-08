import Navigation from "./components/Navigation";
import { Hero, Problem, Introduction, Workflow } from "./sections/Overview";
import Security from "./sections/Security";
import DevelopedSystem from "./sections/DevelopedSystem";
import Results from "./sections/Results";
import { Methodology, Demo, Team, Footer } from "./sections/Closing";
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
        <Introduction />
        <Workflow />
        <Security />
        <DevelopedSystem />
        <Results />
        <Methodology />
        <Demo />
        <Team />
      </main>
      <Footer />
    </>
  );
}

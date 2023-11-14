import Skills from "./components/landing-page-components/Skills";
import About from "./components/landing-page-components/About";
import Contact from "./components/landing-page-components/Contact";
import Projects from "./components/landing-page-components/Projects";

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

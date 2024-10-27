
import HeroSection from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Project";
import Contact from "./component/Contact";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <About />
    <Skills />
    <Projects />
    <Contact />
   </div>
  );
}

import { personalInfo } from './data/portfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TooltipProvider } from './components/ui/tooltip';

function App() {
  return (
    <TooltipProvider>
      <div className="bg-white text-zinc-900 min-h-screen relative selection:bg-violet-500/20 selection:text-zinc-900">
        <Navbar />
        <Hero data={personalInfo} />
        <About data={personalInfo} />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Achievements />
        <Leadership />
        <Contact data={personalInfo} />
        <Footer data={personalInfo} />
      </div>
    </TooltipProvider>
  );
}

export default App;

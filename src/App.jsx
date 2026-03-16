import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="bg-[color:var(--bg)] text-[color:var(--text)] transition-colors duration-300 min-h-screen">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

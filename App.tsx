import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Problems from './components/Problems';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Education from './components/Education';
import Achievements from './components/Achievements';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Problems />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Education />
        <Achievements />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
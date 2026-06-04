import { useState, useEffect } from 'react';
import { AnimatedCursor } from './components/ui/AnimatedCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Achievements } from './sections/Achievements';
import { WhyHireMe } from './sections/WhyHireMe';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen for assets
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-t-2 border-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-purple-500 rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-white tracking-widest text-sm">
            A
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <AnimatedCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <WhyHireMe />
      </main>

      <Footer />
    </div>
  );
}

export default App;

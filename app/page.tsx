import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills'; 
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Background from './components/Background'; // 1. IMPORT BACKGROUND

export default function Home() {
  return (
    // 2. CHANGE: bg-[#0a0a0a] hata diya taaki background component dikhe. 'relative' add kiya.
    <div className="min-h-screen text-gray-200 font-sans selection:bg-white selection:text-black relative">
      
      {/* 3. ADD BACKGROUND COMPONENT HERE */}
      <Background />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white font-mono">
            Sorabh<span className="text-gray-500">  Kumar</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 font-mono">
            <a href="#about-section" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </div>
          <a href="mailto:sorabhsinghrajput4@gmail.com" className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-colors font-mono">
            Contact Me
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-24 relative z-10">
        
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Footer />

      </main>
    </div>
  );
}
import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import profilePic from './profile.png';

export default function About() {
  return (
    <section id="about-section" className="py-1 border-b border-white/5">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT SIDE: Immersive Text --- */}
        <div className="space-y-8">
          
          {/* Section Label */}
          <p className="text-gray-500 font-mono text-sm tracking-widest">
            .../About me ...
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hello! I'm Sorabh, <br/>
            a <span className="text-gray-400">Full-Stack Developer</span> with a passion for AI.
          </h2>

          {/* Paragraph 1: The Hook (Who you are) */}
          <p className="text-gray-400 text-lg leading-relaxed font-sans">
            I don’t just write code; I engineer solutions. With a unique blend of 
            <strong className="text-white"> Full-Stack Engineering</strong> and 
            <strong className="text-white"> Machine Learning</strong> capabilities, 
            I bridge the gap between complex data systems and intuitive user interfaces.
          </p>

          {/* Paragraph 2: Value Prop (Why hire you?) */}
          <p className="text-gray-400 text-lg leading-relaxed font-sans">
            From building scalable <strong>MERN</strong> applications to deploying <strong>Computer Vision</strong> models for real-time detection, I thrive on solving difficult technical challenges. My goal is simple: to write clean, maintainable code that drives real business value.
          </p>

          {/* Buttons / Links */}
          <div className="flex gap-4 pt-4">
             <a href="https://github.com/sorabh-kumar" className="flex items-center gap-2 px-6 py-3 bg-[#111] border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white hover:text-black transition-colors">
               <Github size={18} /> GitHub
             </a>
             <a href="https://linkedin.com/in/sorabh-kumar" className="flex items-center gap-2 px-6 py-3 bg-[#111] border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white hover:text-black transition-colors">
               <Linkedin size={18} /> LinkedIn
             </a>
          </div>

        </div>

        {/* --- RIGHT SIDE: Image --- */}
        <div className="relative">
          {/* Background Decorative Circle */}
          <div className="absolute -inset-4 bg-gradient-to-r from-gray-800 to-black opacity-30 blur-2xl rounded-full -z-10"></div>
          
          {/* Image Container */}
          <div className="aspect-[4/5] w-full max-w-md mx-auto bg-[#111] rounded-[2rem] border border-white/10 overflow-hidden relative group">
             
             {/* PLEASE REPLACE THIS SRC WITH YOUR OWN IMAGE URL */}
             <img 
               src= {profilePic.src} //"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
               alt="Sorabh Kumar" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
             />

             {/* Overlay Text (Experience/Badge) */}
             <div className="absolute bottom-6 right-6 bg-white text-black px-6 py-3 rounded-2xl font-bold font-mono text-sm">
                9+ Months Exp.
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
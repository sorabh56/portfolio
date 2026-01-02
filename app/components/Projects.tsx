import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "Bookstore Web App",
    desc: "Full Stack MERN application with tiered user access, secure authentication, and inventory management.",
    tags: ['MERN Stack', 'Tailwind', 'Auth'],
    gradient: "from-blue-900/20 to-black"
  },
  {
    title: "EcoLearn Waste Locator",
    desc: "Bridging the gap between citizens and waste management by tracking irregular collection using Geolocation.",
    tags: ['HTML/CSS', 'Google Maps API', 'JS'],
    gradient: "from-green-900/20 to-black"
  },
  {
    title: "Solar Panel AI Monitor",
    desc: "Machine Learning system to predict panel efficiency and maintenance needs for DVC Power Station.",
    tags: ['Python', 'Machine Learning', 'Data Viz'],
    gradient: "from-yellow-900/20 to-black"
  },
  {
    title: "Smart Occupancy Sensor",
    desc: "IoT system using cameras to control lights and fans based on human presence to save energy.",
    tags: ['IoT', 'Computer Vision', 'Python'],
    gradient: "from-purple-900/20 to-black"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-1">
      
      {/* Heading Area */}
      <div className="flex items-end justify-between px-2 mb-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter font-mono">
          / Projects ...
        </h2>
        {/* Scroll Hint Text Removed since it's auto now */}
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden mask-gradient">
        
        {/* Left/Right Fade Gradients */}
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>

        {/* The Moving Track */}
        <div className="flex gap-8 w-max animate-scroll-slow hover:[animation-play-state:paused]">
          
          {/* Loop 1: Original Projects */}
          <div className="flex gap-8">
            {PROJECTS.map((project, index) => (
              <ScrollCard 
                key={index}
                title={project.title}
                desc={project.desc}
                tags={project.tags}
                gradient={project.gradient}
              />
            ))}
          </div>

          {/* Loop 2: Duplicate Projects (For seamless loop) */}
          <div className="flex gap-8">
            {PROJECTS.map((project, index) => (
              <ScrollCard 
                key={`dup-${index}`}
                title={project.title}
                desc={project.desc}
                tags={project.tags}
                gradient={project.gradient}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}

// --- Sub-Component: ScrollCard ---
const ScrollCard = ({ title, desc, tags, gradient }: { title: string, desc: string, tags: string[], gradient: string }) => (
  // Removed snap-center and shrink-0 is implicit in flex
  <div className={`min-w-[85vw] md:min-w-[600px] h-[450px] bg-[#111] border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group hover:border-white/30 transition-all`}>
    
    {/* Gradient Blob Background */}
    <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b ${gradient} blur-[100px] opacity-20 rounded-full pointer-events-none`}></div>

    <div className="relative z-10 space-y-6">
      <div className="flex gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-gray-300 font-mono">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-md tracking-tighter">
        {title}
      </h3>
      <p className="text-gray-400 text-base md:text-lg max-w-sm leading-relaxed font-sans">
        {desc}
      </p>
    </div>

    <div className="relative z-10 flex items-center gap-4 pt-4">
      <button className="px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-colors font-mono uppercase tracking-tight">
        Read more
      </button>
      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all cursor-pointer">
        <ArrowUpRight size={20} />
      </div>
    </div>
  </div>
);
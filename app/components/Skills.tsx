import React from 'react';
import { Terminal, Database, Layout, Server } from 'lucide-react';

// Skill Data with Logos for Scrolling
const SKILLS = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", invert: true },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      
      {/* 1. SECTION TITLE */}
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter font-mono">/ My Stack ...</h2>
      </div>

      {/* 2. INFINITE LOGO SCROLL */}
      <div className="relative w-full overflow-hidden mask-gradient mb-16">
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent"></div>

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          <div className="flex gap-12 px-6">
            {SKILLS.map((skill, index) => (
              <SkillItem key={index} name={skill.name} icon={skill.icon} invert={skill.invert} />
            ))}
          </div>
          <div className="flex gap-12 px-6">
            {SKILLS.map((skill, index) => (
              <SkillItem key={`dup-${index}`} name={skill.name} icon={skill.icon} invert={skill.invert} />
            ))}
          </div>
        </div>
      </div>

      {/* 3. THREE HORIZONTAL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Frontend */}
        <BentoCard 
          title="Frontend" 
          icon={<Layout className="text-white" />} 
          skills={['React.js', 'Next.js', 'Tailwind', 'Vue.js', 'HTML5', 'CSS3', 'Flutter', 'Dart']}
          className="bg-gradient-to-br from-[#111] to-[#0a0a0a]"
        />

        {/* Card 2: Backend */}
        <BentoCard 
          title="Backend" 
          icon={<Server className="text-white" />} 
          skills={['Node.js', 'Express.js', 'Python', 'Java', 'C', 'FastAPI']}
          className="bg-gradient-to-bl from-[#111] to-[#0a0a0a]"
        />

        {/* Card 3: Data & Tools */}
        <BentoCard 
          title="Data & Tools" 
          icon={<Database className="text-white" />} 
          skills={['MySQL', 'Pandas', 'Matplotlib', 'Git', 'Linux', 'Android Studio', 'Docker']}
          className="bg-gradient-to-tr from-[#111] to-[#0a0a0a]"
        />

      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

const SkillItem = ({ name, icon, invert }: { name: string, icon: string, invert?: boolean }) => (
  <div className="flex flex-col items-center gap-3 group cursor-pointer select-none min-w-[80px]">
    <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
      <img 
        src={icon} 
        alt={name} 
        className={`w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${invert ? 'invert brightness-0' : ''}`} 
      />
    </div>
    <span className="text-gray-600 text-[10px] font-mono group-hover:text-white transition-colors uppercase tracking-widest">{name}</span>
  </div>
);

const BentoCard = ({ title, skills, icon, className = "" }: { title: string, skills: string[], icon: any, className?: string }) => (
  <div className={`p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between hover:border-white/20 transition-colors h-full ${className}`}>
    <div>
        <div className="flex justify-between items-start mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight font-mono">{title}</h3>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">{icon}</div>
        </div>
        <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1.5 bg-black/50 text-gray-400 border border-white/10 rounded-lg text-xs font-mono hover:text-white hover:border-white/30 transition-colors cursor-default">
            {skill}
            </span>
        ))}
        </div>
    </div>
  </div>
);
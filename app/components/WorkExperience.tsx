import React from 'react';

export default function WorkExperience() {
  return (
    <section id="work" className="py-1">
       
       {/* Heading: Font size reduced, margin reduced */}
       <div className="flex justify-end mb-8 border-b border-white/10 pb-2">
         <h2 className="text-6xl md:text-6xl font-bold text-white tracking-tighter font-mono leading-none">
           Work
         </h2>
       </div>
      
      {/* Experience Table */}
      <div className="flex flex-col">
        
        {/* Row 1 */}
        <WorkRow 
          date="Jul 2025 - Aug 2025"
          duration="2 mos"
          company="DVC DSTPS"
          role="Machine Learning Intern"
          stack="Python & ML"
        />

        {/* Row 2 */}
        <WorkRow 
          date="Oct 2024 - Jan 2025"
          duration="4 mos"
          company="Pantech Prolabs"
          role="Full Stack Developer"
          stack="React & Python"
        />

        {/* Row 3 */}
        <WorkRow 
          date="Sep 2023 - Nov 2023"
          duration="3 mos"
          company="Learnwik Solution"
          role="Frontend Developer"
          stack="Vue.js & HTML/CSS"
        />

      </div>
      
      {/* Total Experience Summary */}
      <div className="text-right mt-6 text-gray-500 font-mono text-xs">
        Total experience<br/>
        <span className="text-white text-base">9 months</span>
      </div>

    </section>
  );
}

// --- Sub-Component: WorkRow ---
const WorkRow = ({ date, duration, company, role, stack }: { date: string, duration: string, company: string, role: string, stack: string }) => (
  // Reduced padding (py-4) for slimmer rows
  <div className="group flex flex-col md:flex-row border-b border-white/10 transition-all hover:bg-white py-4 px-2 cursor-default items-center">
    
    {/* Col 1: Date & Duration */}
    <div className="w-full md:w-[25%] mb-1 md:mb-0">
      <p className="text-base font-mono text-white group-hover:text-black transition-colors">{date}</p>
      <p className="text-[10px] text-gray-500 font-mono group-hover:text-gray-500 transition-colors">{duration}</p>
    </div>

    {/* Col 2: Company */}
    <div className="w-full md:w-[30%] mb-1 md:mb-0">
      <p className="text-lg font-sans text-gray-300 group-hover:text-black transition-colors">{company}</p>
    </div>

    {/* Col 3: Role & Stack */}
    <div className="w-full md:w-[45%] flex flex-col md:flex-row md:justify-end md:items-center gap-2">
      <span className="text-base font-mono text-white group-hover:text-black transition-colors">
        {role}
      </span>
      <span className="hidden md:block text-gray-600 group-hover:text-gray-400 mx-2 text-sm">|</span>
      <span className="text-sm font-mono text-gray-400 group-hover:text-gray-600 transition-colors">
        {stack}
      </span>
    </div>

  </div>
);
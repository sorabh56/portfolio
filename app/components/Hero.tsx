"use client"
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight,
  Instagram,
  Facebook
} from 'lucide-react';

const ROLES = [
  { top: "Full-stack", bottom: "Developer" },
  { top: "Machine-Learning", bottom: "Engineer" },
  { top: "Application", bottom: "Developer" },
];

const SPEED = {
  TYPING: 100,    
  DELETING: 30,   
  PAUSE: 2000,    
  NEXT_DELAY: 500 
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [phase, setPhase] = useState(0); 

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      // PHASE 0: TYPE TOP TEXT
      if (phase === 0) {
        if (topText.length < currentRole.top.length) {
          setTopText(currentRole.top.slice(0, topText.length + 1));
          timeout = setTimeout(handleTyping, SPEED.TYPING); 
        } else {
          setPhase(1); 
          timeout = setTimeout(handleTyping, SPEED.TYPING);
        }
      } 
      // PHASE 1: TYPE BOTTOM TEXT
      else if (phase === 1) {
        if (bottomText.length < currentRole.bottom.length) {
          setBottomText(currentRole.bottom.slice(0, bottomText.length + 1));
          timeout = setTimeout(handleTyping, SPEED.TYPING);
        } else {
          setPhase(2); 
          timeout = setTimeout(handleTyping, SPEED.PAUSE); 
        }
      }
      // PHASE 2: DELETE BOTTOM
      else if (phase === 2) {
        setPhase(3);
        timeout = setTimeout(handleTyping, SPEED.DELETING);
      }
      // PHASE 3: DELETE BOTTOM TEXT
      else if (phase === 3) {
        if (bottomText.length > 0) {
          setBottomText(bottomText.slice(0, -1));
          timeout = setTimeout(handleTyping, SPEED.DELETING);
        } else {
          setPhase(4); 
          timeout = setTimeout(handleTyping, SPEED.DELETING);
        }
      }
      // PHASE 4: DELETE TOP TEXT
      else if (phase === 4) {
        if (topText.length > 0) {
          setTopText(topText.slice(0, -1));
          timeout = setTimeout(handleTyping, SPEED.DELETING);
        } else {
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setPhase(0);
          timeout = setTimeout(handleTyping, SPEED.NEXT_DELAY);
        }
      }
    };

    timeout = setTimeout(handleTyping, 50);
    return () => clearTimeout(timeout);
  }, [topText, bottomText, phase, roleIndex]);

  return (
    <section id="hero" className="pt-10 flex flex-col w-full">
      
      {/* ROW 1: Top Text */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full min-h-[10vw] md:min-h-[8rem]">
        {/* CHANGE: text-[10vw] and md:text-8xl (Size reduced slightly) */}
        <h1 className="text-[10vw] md:text-8xl font-bold text-white tracking-tighter font-mono leading-none h-[1.1em] flex items-center">
          {topText}
        </h1>

        <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
           <a href="#projects" className="px-8 py-3 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-200 transition-colors font-mono">
             Projects
           </a>
           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer">
             <ArrowRight size={24} />
           </div>
        </div>
      </div>

      {/* ROW 2: Goal + Bottom Text */}
      <div className="flex flex-col md:flex-row justify-between items-end w-full mt-2 md:-mt-2">
         
         <div className="w-full md:w-[40%] mt-8 md:mb-4">
            <p className="text-lg text-gray-400 leading-relaxed font-mono border-l-2 border-white/20 pl-6 ml-1">
              My goal is to write <em>maintainable, clean</em> and <em>understandable code</em> to make the development process enjoyable.
            </p>
         </div>

         <div className="min-h-[10vw] md:min-h-[8rem] w-full md:w-[60%] flex items-end justify-start md:pl-[10%]">
             {/* CHANGE: text-[10vw] and md:text-8xl (Size reduced slightly) */}
             <h1 className="text-[10vw] md:text-8xl font-bold text-white tracking-tighter font-mono leading-none text-left h-[1.1em] flex items-end">
              {bottomText}
             </h1>
         </div>
      </div>

      {/* Social Links */}
      <div className="w-full flex flex-wrap justify-center gap-4 pt-24 pb-0">
        <SocialButton icon={<Github size={18} />} label="Github" href="https://github.com/sorabh56" />
        <SocialButton icon={<Linkedin size={18} />} label="Linkedin" href="https://www.linkedin.com/in/sorabh-kumar-61821b253/" />
        <SocialButton icon={<Mail size={18} />} label="Email" href="mailto:sorabhsinghrajput4@gmail.com" />
        <SocialButton icon={<Instagram size={18} />} label="Instagram" href="https://www.instagram.com/engineer.kabir_singh?igsh=dHRmZGRuOHNyamU0" />
        <SocialButton icon={<Facebook size={18} />} label="Facebook" href="https://www.facebook.com/share/19yUym9geu/" />
      </div>

    </section>
  );
}

const SocialButton = ({ icon, label, href }: { icon: any, label: string, href: string }) => (
  <a 
    href={href}
    className="flex items-center gap-3 px-6 py-3 bg-black border border-white/20 rounded-full transition-all text-gray-300 hover:text-white hover:border-white group font-mono text-sm"
  >
    {icon}
    <span className="font-medium">{label}</span>
  </a>
);
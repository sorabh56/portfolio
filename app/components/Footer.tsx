import React from 'react';
import { Mail, GraduationCap, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        
        {/* --- LEFT COLUMN: Education & Certifications --- */}
        <div className="space-y-16">
           
           {/* 1. Education Section */}
           <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-mono">
                <GraduationCap className="text-gray-400" /> Education
              </h3>
              
              <div className="border-l-2 border-white/10 pl-8 py-2 hover:border-white transition-colors duration-300">
                <h4 className="text-xl text-white font-bold tracking-tight">Dr. B.C. Roy Engineering College</h4>
                <p className="text-gray-400 mt-1">B.Tech in Computer Science and Engineering</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-300">2022 - 2026</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white">CGPA: 6.85</span>
                </div>
              </div>
           </div>

           {/* 2. Certifications Section */}
           <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-mono">
                <Award className="text-gray-400" /> Certifications
              </h3>
              
              <div className="space-y-6">
                <CertRow title="Google Cybersecurity Professional" issuer="Google" />
                <CertRow title="Python Certification" issuer="IIT Bombay" />
                <CertRow title="Android Studio Certification" issuer="IIT Bombay" />
                <CertRow title="AI Essentials" issuer="Google" />
              </div>
           </div>

        </div>

        {/* --- RIGHT COLUMN: CTA Card --- */}
        <div className="bg-[#111] rounded-[2.5rem] p-12 border border-white/5 flex flex-col justify-center items-center text-center h-fit hover:border-white/20 transition-colors duration-500 relative overflow-hidden group">
           
           {/* Background Glow */}
           <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono tracking-tighter relative z-10">
             Let's work together
           </h2>
           <p className="text-gray-400 mb-10 max-w-md text-lg leading-relaxed relative z-10">
             Have a project in mind or just want to discuss the latest in AI? I'm open for opportunities.
           </p>
           
           <a 
             href="mailto:sorabhsinghrajput4@gmail.com" 
             className="relative z-10 px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all flex items-center gap-3 font-mono"
           >
             <Mail size={22} /> Say Hello
           </a>
        </div>

      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm text-gray-600 font-mono">
          &copy; {new Date().getFullYear()} Sorabh Kumar. All rights reserved.
        </p>
        <p className="text-sm text-gray-600 font-mono">
          Designed based on Sorabh Kumar's thoughts 
        </p>
      </div>

    </footer>
  );
}

// Sub-component for Certification Rows
const CertRow = ({ title, issuer }: { title: string, issuer: string }) => (
  <div className="flex justify-between items-center border-b border-white/5 pb-3 group cursor-default">
    <div>
      <h4 className="text-base text-gray-300 group-hover:text-white transition-colors font-medium">{title}</h4>
      <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1 group-hover:text-gray-400 transition-colors">{issuer}</p>
    </div>
  </div>
);
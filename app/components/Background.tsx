import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] h-full w-full bg-[#0a0a0a]">
      {/* Grid Pattern */}
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Optional: Radial Gradient to fade edges (Vignette) */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
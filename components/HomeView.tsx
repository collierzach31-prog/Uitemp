import React from 'react';

const HomeView: React.FC = () => {
  return (
    <div className="flex-1 relative flex flex-col justify-center pl-16 overflow-hidden">
      
      {/* Background Decorative Tech Elements */}
      <div className="absolute right-0 top-0 w-[400px] h-full opacity-10 pointer-events-none border-l border-neon-yellow/20">
         <div className="w-full h-[1px] bg-neon-yellow absolute top-1/4"></div>
         <div className="w-full h-[1px] bg-neon-yellow absolute bottom-1/4"></div>
         {/* Giant Watermark */}
         <div className="absolute top-1/2 right-10 text-[250px] font-arcade text-white opacity-[0.03] rotate-90 origin-center select-none">
            BX
         </div>
      </div>

      {/* Main Content Group */}
      <div className="z-10 flex flex-col items-start gap-1 select-none">
        
        {/* Top Label */}
        <div className="flex items-baseline gap-3 mb-2 opacity-80">
           <div className="w-2 h-2 bg-neon-yellow/50"></div>
           <span className="font-mono text-neon-yellow text-sm tracking-[0.3em]">COMBAT SIMULATOR</span>
        </div>

        {/* Massive Title */}
        <h1 className="font-arcade text-7xl text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] leading-[0.85]">
          BUNKER
        </h1>
        
        {/* Hollow Text Effect */}
        <h1 
          className="font-arcade text-7xl text-transparent tracking-tighter leading-[0.85] opacity-90"
          style={{ 
            WebkitTextStroke: '2px #FFFF00',
            textShadow: '0 0 20px rgba(255, 255, 0, 0.2)'
          }}
        >
          BOX
        </h1>

        {/* Decorative Divider */}
        <div className="flex items-center gap-2 mt-8 mb-10">
           <div className="h-1 w-24 bg-neon-yellow shadow-[0_0_10px_#FFFF00]"></div>
           <div className="h-1 w-2 bg-white/20"></div>
           <div className="h-1 w-2 bg-white/20"></div>
        </div>

        {/* Hero Button */}
        <button 
          className="
            group relative px-10 py-5 bg-transparent 
            flex items-center gap-4 overflow-hidden
            transition-all duration-300
          "
        >
          {/* Button Borders/Shape */}
          <div className="absolute inset-0 border border-neon-yellow/40 skew-x-[-12deg] bg-neon-yellow/5 group-hover:bg-neon-yellow/20 group-hover:border-neon-yellow transition-all" />
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-yellow translate-x-1 translate-y-1" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-yellow -translate-x-1 -translate-y-1" />

          <span className="font-arcade text-2xl text-white group-hover:text-neon-yellow tracking-widest z-10 pl-2">
            INITIATE FIGHT
          </span>
        </button>
      </div>

      {/* Footer System Info */}
      <div className="absolute bottom-6 left-16 font-mono text-[10px] text-white/30 flex gap-8 tracking-wider">
        <span>UNIT: 01</span>
        <span>STATUS: IDLE</span>
        <span>FW: 2.4.0</span>
      </div>

    </div>
  );
};

export default HomeView;
import React, { useState, useEffect } from 'react';

const StatusBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-6 right-8 z-30 select-none pointer-events-none mix-blend-screen">
      <div className="flex flex-col items-end">
        <span className="font-arcade text-5xl text-neon-yellow drop-shadow-[0_0_8px_rgba(255,255,0,0.4)]">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-2 h-2 rounded-full bg-neon-yellow animate-pulse" />
          <span className="font-mono text-xs text-white/40 tracking-[0.3em]">SYSTEM ONLINE</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
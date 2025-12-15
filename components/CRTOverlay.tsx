import React from 'react';

const CRTOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden rounded-md">
      {/* Scanlines - Much subtler, cleaner horizontal lines only */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))',
          backgroundSize: '100% 4px'
        }}
      />
      
      {/* Vignette - Reduced intensity to keep corners visible but framed */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0) 65%, rgba(0,0,0,0.4) 100%)'
        }}
      />
      
      {/* Static glossy reflection (subtle) */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.03] bg-gradient-to-bl from-white to-transparent pointer-events-none rounded-tr-md"
      />
    </div>
  );
};

export default CRTOverlay;
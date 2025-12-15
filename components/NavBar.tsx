import React from 'react';
import { Menu, Swords, Dumbbell, Activity } from 'lucide-react';
import { ScreenView } from '../types';

interface NavBarProps {
  currentView: ScreenView;
  onNavigate: (view: ScreenView) => void;
  onMenuToggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentView, onNavigate, onMenuToggle }) => {
  
  const navItems = [
    { id: 'MENU', icon: Menu, label: 'MENU', action: onMenuToggle },
    { id: 'FIGHT', icon: Swords, label: 'FIGHT', action: () => onNavigate('FIGHT') },
    { id: 'TRAINING', icon: Dumbbell, label: 'TRAINING', action: () => onNavigate('TRAINING') },
    { id: 'STATS', icon: Activity, label: 'STATS', action: () => onNavigate('STATS') },
  ];

  return (
    <div className="h-full w-20 bg-black/80 border-r border-neon-yellow/20 flex flex-col items-center py-6 gap-6 z-20 relative backdrop-blur-md">
      {/* Decorative Top Box */}
      <div className="w-10 h-10 border border-neon-yellow/30 flex items-center justify-center mb-4 bg-neon-yellow/5">
        <div className="w-full h-[1px] bg-neon-yellow/50 transform rotate-45" />
      </div>

      <div className="flex-1 flex flex-col gap-6 w-full">
        {navItems.map((item) => {
          const isActive = currentView === item.id || (item.id === 'MENU' && currentView === 'MENU');
          
          return (
            <button
              key={item.label}
              onClick={item.action}
              className={`
                group relative flex flex-col items-center justify-center w-full h-14 transition-all duration-300
                ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'}
              `}
            >
              {/* Active Indicator Line */}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-neon-yellow shadow-[2px_0_10px_#FFFF00]" />
              )}

              <div className={`
                p-2 transition-transform duration-200 group-hover:scale-110
                ${isActive ? 'text-neon-yellow drop-shadow-[0_0_5px_rgba(255,255,0,0.8)]' : 'text-white'}
              `}>
                <item.icon size={26} strokeWidth={2} />
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Bottom decorative lines */}
      <div className="w-full flex flex-col gap-1 items-center opacity-30">
        <div className="w-8 h-[1px] bg-white" />
        <div className="w-4 h-[1px] bg-white" />
        <div className="w-2 h-[1px] bg-white" />
      </div>
    </div>
  );
};

export default NavBar;
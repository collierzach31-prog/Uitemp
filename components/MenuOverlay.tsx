import React from 'react';
import { MENU_ITEMS } from '../constants';
import { X } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-40 bg-black/95 backdrop-blur-md animate-wipe-in flex flex-col border-l border-neon-yellow/20">
      {/* Header */}
      <div className="h-28 flex items-end justify-between px-10 pb-6 border-b border-neon-yellow/10 bg-gradient-to-b from-transparent to-neon-yellow/5">
        <div>
           <div className="text-[10px] font-mono text-neon-yellow mb-2 tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-neon-yellow rounded-full" />
              NAVIGATION
           </div>
           <h2 className="font-arcade text-4xl tracking-wide text-white">SYSTEM MENU</h2>
        </div>
        <button onClick={onClose} className="text-white/50 hover:text-neon-yellow transition-colors mb-2">
          <X size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* List */}
      <div className="flex-1 p-10 grid grid-cols-1 gap-4 overflow-y-auto content-start">
        {MENU_ITEMS.map((item, idx) => (
          <button
            key={item.id}
            onClick={onClose}
            className="group flex items-center justify-between p-6 bg-white/5 hover:bg-neon-yellow/10 border-l-2 border-transparent hover:border-neon-yellow transition-all duration-300 w-full text-left"
            style={{ animationDelay: `${idx * 75}ms` }}
          >
            <div className="flex items-center gap-8">
              <span className="font-mono text-white/20 group-hover:text-neon-yellow/60 text-lg">0{idx + 1}</span>
              <div className="flex flex-col items-start gap-1">
                <span className="font-arcade text-2xl text-white group-hover:text-neon-yellow tracking-wider transition-colors">{item.label}</span>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">{item.description}</span>
              </div>
            </div>
            
            <item.icon className="w-6 h-6 text-white/20 group-hover:text-neon-yellow transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transform duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuOverlay;
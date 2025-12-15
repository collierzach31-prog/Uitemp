import React, { useState } from 'react';
import StatusBar from './components/StatusBar';
import NavBar from './components/NavBar';
import HomeView from './components/HomeView';
import MenuOverlay from './components/MenuOverlay';
import CRTOverlay from './components/CRTOverlay';
import { ScreenView } from './types';
import { Construction } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ScreenView>('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (view: ScreenView) => {
    setCurrentView(view);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'HOME':
        return <HomeView />;
      default:
        return (
          <div className="flex-1 flex flex-col items-center justify-center text-neon-yellow gap-4">
            <Construction size={48} className="animate-bounce" />
            <h2 className="font-arcade text-xl tracking-wider">UNDER CONSTRUCTION</h2>
            <p className="font-mono text-white/50 text-sm">MODULE: {currentView}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      {/* Screen Container (800x480) - Flex Row for Sidebar Layout */}
      <div 
        className="relative w-[800px] h-[480px] bg-black overflow-hidden flex flex-row shadow-2xl"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        <CRTOverlay />

        {/* Left Sidebar */}
        <NavBar 
          currentView={isMenuOpen ? 'MENU' : currentView} 
          onNavigate={handleNavigate} 
          onMenuToggle={toggleMenu}
        />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col relative z-10 bg-[radial-gradient(circle_at_60%_50%,_rgba(20,20,20,1)_0%,_#000000_100%)]">
           <StatusBar />
           
           <main className="flex-1 flex flex-col relative">
              {renderContent()}
           </main>
           
           <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default App;
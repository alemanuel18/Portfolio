import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CyberBackground from './components/background/CyberBackground';
import MainMenu from './views/MainMenu/MainMenu';
import AboutMe from './views/AboutMe/AboutMe';
import Experience from './views/Experience/Experience';
import Projects from './views/Projects/Projects';
import Options from './views/Options/Options';

export default function App() {
  const [currentView, setCurrentView] = useState('MENU');

  return (
    <div className="relative min-h-screen font-sans overflow-hidden select-none">
      <CyberBackground />

      <AnimatePresence mode="wait">
        {currentView === 'MENU' && <MainMenu key="MENU" changeView={setCurrentView} />}
        {currentView === 'ABOUT' && <AboutMe key="ABOUT" backToMenu={() => setCurrentView('MENU')} />}
        {currentView === 'EXPERIENCE' && <Experience key="EXPERIENCE" backToMenu={() => setCurrentView('MENU')} />}
        {currentView === 'PROJECTS' && <Projects key="PROJECTS" backToMenu={() => setCurrentView('MENU')} />}
        {currentView === 'OPTIONS' && <Options key="OPTIONS" backToMenu={() => setCurrentView('MENU')} />}
      </AnimatePresence>
    </div>
  );
}
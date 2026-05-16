import { useState } from 'react';
import CyberBackground from './components/background/CyberBackground';
//import MainMenu from './views/MainMenu';
//import AboutMe from './views/AboutMe';
//import Experience from './views/Experience';

export default function App() {
  const [currentView, setCurrentView] = useState('MENU');

  return (
    <div className="relative min-h-screen font-sans overflow-hidden select-none">
      <CyberBackground />

      {currentView === 'MENU' && <MainMenu changeView={setCurrentView} />}
      {currentView === 'ABOUT' && <AboutMe backToMenu={() => setCurrentView('MENU')} />}
      {currentView === 'EXPERIENCE' && <Experience backToMenu={() => setCurrentView('MENU')} />}
    </div>
  );
}
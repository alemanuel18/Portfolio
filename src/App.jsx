import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CyberBackground from './components/background/CyberBackground';
import MainMenu from './views/MainMenu/MainMenu';
import AboutMe from './views/AboutMe/AboutMe';
import Experience from './views/Experience/Experience';
import Studies from './views/Studies/Studies';
import Projects from './views/Projects/Projects';
//import Courses from './views/Courses/Courses';
import Technologies from './views/Technologies/Technologies';
import Options from './views/Options/Options';

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen font-sans overflow-hidden select-none">
      <CyberBackground />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainMenu />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/projects" element={<Projects />} />
          {/*<Route path="/courses" element={<Courses />} />*/}
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/options" element={<Options />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
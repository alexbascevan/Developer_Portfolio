import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import CustomCursor from './components/CustomCursor/CustomCursor';
import Home from './components/home/Home';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <StrictMode>
      {!isMobile && <CustomCursor />}
      
      <div>
        <Home />
        <hr />
        <AboutMe />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <Footer />
      </div>
      
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);

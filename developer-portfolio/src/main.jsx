import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';

import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Home from './components/home/Home';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

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
      <ThemeProvider>
        {!isMobile && <CustomCursor />}
        <ThemeToggle />
        
        <div>
          <Home />
          <hr />
          <AboutMe />
          <hr />
          <Skills />
          <hr />
          <Projects />
          <hr />
          <ContactMe />
          <hr />
          <Footer />
        </div>
      </ThemeProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);

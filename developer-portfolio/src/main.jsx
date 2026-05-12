import { StrictMode, useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';

import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader/Loader';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home.jsx';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

const App = () => {
  // Initialize isMobile synchronously to avoid dependency issues with loader timer
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth <= 768;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const loaderInitialized = useRef(false);

  // Set up mobile detection listener (without affecting loader timer)
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Initialize loader timer once on mount (only depends on initial isMobile value)
  useEffect(() => {
    if (loaderInitialized.current) return;
    loaderInitialized.current = true;

    // Mobile: 2.0s total (0.6s enter + 1.0s display + 0.4s exit)
    // Desktop: 2.2s total (0.6s enter + 1.6s display + 0.6s exit)
    const loaderDuration = window.innerWidth <= 768 ? 2000 : 2200;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loaderDuration);

    return () => clearTimeout(timer);
  }, []);

  // Trigger Home animation when loader exits
  useEffect(() => {
    if (!isLoading) {
      // Start home animation immediately when loader exits
      setShowHome(true);
    }
  }, [isLoading]);

  return (
    <StrictMode>
      <ThemeProvider>
        <Loader isLoading={isLoading} />
        {!isMobile && <CustomCursor />}
        <Navigation />

        <div style={{ 
          pointerEvents: isLoading ? 'none' : 'auto'
        }}>
          <Home shouldAnimate={showHome} />
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

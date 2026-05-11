import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';

import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader/Loader';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Navigation from './components/Navigation/Navigation';
import Home from './components/home/Home';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      <ThemeProvider>
        <Loader isLoading={isLoading} />
        {!isMobile && <CustomCursor />}
        <Navigation />

        <div style={{ opacity: isLoading ? 0 : 1 }}>
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

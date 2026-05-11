import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

const Loader = ({ isLoading }) => {
  const [isExiting, setIsExiting] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (!isLoading) {
      setIsExiting(true);
      const exitTimer = setTimeout(() => {
        setIsExiting(false);
      }, 1000);
      return () => clearTimeout(exitTimer);
    }
  }, [isLoading]);

  if (!isLoading && !isExiting) {
    return null;
  }

  return (
    <div
      className={`loader-overlay ${isExiting ? 'loader-exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader-content">
        {/* Animated Grid Background */}
        <div className="loader-grid"></div>

        {/* Main Branding Container */}
        <div className="loader-branding">
          {/* Accent line above text */}
          <div className="loader-accent-top"></div>

          {/* Name - Character by Character Animation */}
        <h1 className="loader-name">
          {'Alex Bascevan'.split('').map((char, i) => (
            <span
              key={i}
              className="loader-char"
              style={{
                animationDelay: `${0.4 + i * 0.05}s`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

          {/* Accent glow line below text */}
          <div className="loader-accent-line"></div>
        </div>

        {/* Loading Indicator - Three Dots */}
        <div className="loader-dots">
          <span className="loader-dot"></span>
          <span className="loader-dot"></span>
          <span className="loader-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;

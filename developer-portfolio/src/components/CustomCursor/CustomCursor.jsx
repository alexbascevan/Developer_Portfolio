import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      setCursorPos({ x: mouseX, y: mouseY });

      // Create a neon dot for the trail effect
      const trail = document.createElement('div');
      trail.classList.add('trail');
      trail.style.left = `${mouseX - 15}px`; // Offset for centering the cursor
      trail.style.top = `${mouseY - 15}px`;  // Offset for centering the cursor
      document.body.appendChild(trail);

      // Remove the trail dot after animation completes (fade-out)
      setTimeout(() => {
        trail.remove();
      }, 1000); // Duration matches the animation time
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: `${cursorPos.x - 25}px`, // Offset for centering the cursor
        top: `${cursorPos.y - 25}px`,  // Offset for centering the cursor
      }}
    ></div>
  );
};

export default CustomCursor;

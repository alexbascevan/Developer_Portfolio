import { useEffect, useRef } from 'react';

const useIntersectionAnimation = (selector = '.section', threshold = 0.25) => {
  const lastScrollY = useRef(0);
  const elementsStateRef = useRef(new Map());
  const debounceTimersRef = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY.current;
        lastScrollY.current = currentScrollY;

        entries.forEach((entry) => {
          const element = entry.target;
          const elementId = Math.random(); // Use element reference as key
          
          // Clear any pending debounce for this element
          if (debounceTimersRef.current.has(element)) {
            clearTimeout(debounceTimersRef.current.get(element));
          }

          if (entry.isIntersecting) {
            // Element is in viewport - fade in immediately
            element.classList.remove('leaving');
            element.classList.add('visible');
            elementsStateRef.current.set(element, true);
          } else {
            // Element is leaving - check if it was previously visible
            const wasVisible = elementsStateRef.current.get(element);
            
            if (wasVisible) {
              // Add small debounce to prevent rapid toggling at boundaries
              const timer = setTimeout(() => {
                if (!observer) return; // Safety check
                
                // Double-check element is still not intersecting
                const rect = element.getBoundingClientRect();
                const isStillOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;
                
                if (isStillOutOfView && elementsStateRef.current.get(element)) {
                  element.classList.remove('visible');
                  element.classList.add('leaving');
                }
              }, 50); // Small delay to avoid flickering
              
              debounceTimersRef.current.set(element, timer);
            }
          }
        });
      },
      { threshold: 0.1 } // Single threshold for stability
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.classList.add('animation-ready');
      elementsStateRef.current.set(element, false);
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      // Clear all debounce timers
      debounceTimersRef.current.forEach(timer => clearTimeout(timer));
      debounceTimersRef.current.clear();
    };
  }, [selector, threshold]);
};

export default useIntersectionAnimation;
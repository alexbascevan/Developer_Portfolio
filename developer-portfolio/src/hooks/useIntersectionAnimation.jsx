import { useEffect } from 'react';

const useIntersectionAnimation = (selector, threshold = 0.25) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, threshold]);
};

export default useIntersectionAnimation;
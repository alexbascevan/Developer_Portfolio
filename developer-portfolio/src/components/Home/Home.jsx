import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa'; // Importing icons from react-icons
import "./Home.css";


function Home() {
  const words = ["Software Developer", "Network Engineer", "Penetration Tester"];
  const [text, setText] = useState(""); // Holds the current displayed text
  const [wordIndex, setWordIndex] = useState(0); // Index of the word being typed
  const [isDeleting, setIsDeleting] = useState(false); // Tracks headline letters deleting
  const [showCursor, setShowCursor] = useState(true); // Controls the flashing cursor

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      // Remove one letter at a time
      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, 100);
    } else {
      // Add one letter at a time
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 100);
    }

    // When the word is fully typed, wait 2 seconds then start deleting
    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    }

    // When the word is fully deleted, switch to the next word
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop back to start
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blinks every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="home">
      <div>
        <img 
          className="portrait"
          src="/images/headshot.png" 
          alt="Headshot of Alex Bascevan"
        />
      </div>

      <div className="homeinfo">

        <h4 className="introduction">I'm Alex Bascevan</h4>
        <h1 className="slogan1">I Develop, I PWN</h1>
        <h1 className="slogan2">I Secure, I Optimize</h1>
        <h4 className="headline">
          {text}
          <span className={`hcursor ${showCursor ? "visible" : ""}`}>_</span>
        </h4>

        <div className="icons">

          <a href="https://www.linkedin.com/in/alex-bascevan-2697752b7" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#6bb7f2" />
          </a>

          <a href="https://github.com/alexbascevan" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="#ffffff" />
          </a>

          <a href="mailto:alexbascevan@icloud.com">
            <FaEnvelope size={30} color="#d14836" />
          </a>

          <a href="/resume/Alex Bascevan - Resume.pdf" target="_blank" rel="noopener noreferrer" title="Alex Bascevan - Resume">
            <FaFileAlt size={30} color="#d14836" />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Home;

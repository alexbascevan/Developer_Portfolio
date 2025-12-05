import React, { useEffect } from 'react';
import './AboutMe.css';

function AboutMe() {
  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'visible' class when the element is in the viewport
          entry.target.classList.add('visible');
          // console.log("visibile");
        } else {
          // Remove the 'visible' class when the element is out of the viewport
          entry.target.classList.remove('visible');
          // console.log("invisible");
        }
      });
    }, {
      threshold: 0.25, // Trigger when 25% of the element is in the viewport
    });

    // Target all .contentBlock elements
    const contentBlocks = document.querySelectorAll('.contentBlock');
    contentBlocks.forEach(block => {
      observer.observe(block); // Start observing each block
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutme">
      <h1>About Me</h1>

      <div className="contentBlock">
        <h2>Education</h2>
        <h3>
          SOFTWARE DEVELOPMENT NETWORK ENGINEERING <br />
          ASSOCIATE'S DEGREE | Sheridan College <br />
          2023 - <span className="highlight">2025</span> <br />
        </h3>
        <h4>Associate’s degree focused on software engineering, network infrastructure, and system design. Completed projects involving full-stack applications, cloud deployment, and cybersecurity practices.</h4>
      </div>

      <div className="contentBlock">
        <h2>Certifications</h2>

        <h3><span className="highlight">CERTIFIED PENETRATION TESTING SPECIALIST (CPTS)</span></h3>
        <h4>Hack The Box / IN PROGRESS</h4>
        <p>
          A hands-on certification covering network, web, and Active Directory penetration testing, emphasizing real-world attack scenarios and ethical hacking techniques.
        </p>

        <hr />

        <h3><span className="highlight">CYBERSECURITY SPECIALIZATION</span></h3>
        <h4>Google Careers / AUGUST 2024</h4>
        <p>
          A foundational cybersecurity certification covering risk assessment, network security, incident response, and security tools, preparing for entry-level security roles.
        </p>

        <hr />

        <h3><span className="highlight">DOCKER FOUNDATIONS PROFESSIONAL CERTIFICATE</span></h3>
        <h4>Docker Inc & LinkedIn / MAY 2024</h4>
        <p>
          The Docker Foundations covers containerization fundamentals, Docker CLI, image creation, networking, and orchestration, providing skills for modern DevOps and cloud environments.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;

import React, { useEffect } from 'react';
import './AboutMe.css';

function AboutMe() {

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          });
        },
        { threshold: 0.25 }
      );
  
      requestAnimationFrame(() => {
        document
          .querySelectorAll('.contentBlock')
          .forEach(card => observer.observe(card));
      });
  
      return () => observer.disconnect();
    }, []);

  return (
    <section className="aboutme">
      <h1>About Me</h1>

      <div className="contentBlock">
        <h2>Education</h2>
        <h3>
          <span className='highlight'>SOFTWARE DEVELOPMENT & NETWORK ENGINEERING </span> <br />
          ASSOCIATE'S DEGREE | Sheridan College <br />
          January 2023 - December 2025 <br />
        </h3>
        <h4>Completed an Associate’s degree with a focus on software engineering, backend development, networking fundamentals, and real-world application design. Developed hands-on experience through collaborative projects and a competitive capstone, with emphasis on system architecture, APIs, databases, and cloud deployment.</h4>
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

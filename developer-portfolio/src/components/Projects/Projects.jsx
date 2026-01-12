import { projectData } from "../../data/projects";
import React, { useEffect } from 'react';
import './Projects.css';


function Projects() {

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add class when in viewport
        } else {
          entry.target.classList.remove('visible'); // Optional: remove when out
        }
      });
    }, {
      threshold: 0.25, // Trigger when 25% of element is in viewport
    });

    // Observe each card individually
    const cards = document.querySelectorAll('.project-item');
    cards.forEach(card => observer.observe(card));

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []);

  return (

    <div className="projects-list">
      {projectData.map((project) => (
        <div key={project.id} className="project-item">
          <h2>{project.name}</h2>
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.name} className="project-image" />
          </a>
          <p>{project.description}</p>
        </div>
      ))}
    </div>

  
  );
}

export default Projects;

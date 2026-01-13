import { projectData } from "../../data/projects";
import { FaGithub} from 'react-icons/fa'; // Importing icons from react-icons
import React, { useEffect } from 'react';
import './Projects.css';


function Projects() {

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
        .querySelectorAll('.project-item')
        .forEach(card => observer.observe(card));
    });

    return () => observer.disconnect();
  }, []);



  return (

    <div className="projects-container">

      <h1 className="projects-title">Projects</h1>
      
      <div className="projects-list">
        {projectData.map((project) => (
          <div key={project.id} className="project-item">
            <h2>{project.name}</h2>

            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </a>

            <p>{project.description}</p>

            <h3 className="tech-stack-title">Tech Stack:</h3>

            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-item">
                  {tech}
                  {index < project.techStack.length - 1 && ", "}
                </span>
              ))}
            </div>
            <br/>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer"> <FaGithub size={30} color="#ffffff" /> </a>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;

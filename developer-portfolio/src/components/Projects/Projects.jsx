import { projectData } from "../../data/projects";
import { FaGithub} from 'react-icons/fa';
import React from 'react';
import '../../styles/projects.css';
import useIntersectionAnimation from '../../hooks/useIntersectionAnimation';


function Projects() {
  useIntersectionAnimation('.project-item');

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

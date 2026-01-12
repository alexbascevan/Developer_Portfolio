import './ProjectCard.css';

const ProjectCard = ({ title, description, image}) => {
    return (
        <div className="project-card">
            <div className="projectCard-text">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <img src={image} alt={title} className="projectCard-image" />
            
        </div>

    );
};

export default ProjectCard;
import './Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Skills() {
  return (
    <section className="skills">
      <h1 className="skills-title">Technologies</h1>
      <div className="technologies-table">
        <div className="technologies-column">
          <h3>Languages</h3>
          <div className="skill-item">
            <i className="fab fa-html5"></i><span>HTML</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-css3-alt"></i><span>CSS</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-js"></i><span>JavaScript</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-ts"></i><span>TypeScript</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-java"></i><span>Java</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-python"></i><span>Python</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-code"></i><span>C</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-code"></i><span>C#</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-code"></i><span>C++</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-database"></i><span>SQL</span>
          </div>
        </div>

        <div className="technologies-column">
          <h3>Frameworks</h3>
          <div className="skill-item">
            <i className="fab fa-java"></i><span>Spring</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-microsoft"></i><span>.NET</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-react"></i><span>React</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-angular"></i><span>Angular</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-cogs"></i><span>Hadoop</span>
          </div>
        </div>

        <div className="technologies-column">
          <h3>Tools</h3>
          <div className="skill-item">
            <i className="fab fa-vscode"></i><span>VSCode</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-git"></i><span>Git</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-docker"></i><span>Docker</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-terminal"></i><span>Unix</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-database"></i><span>SQL Developer</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-linux"></i><span>Kali Linux</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

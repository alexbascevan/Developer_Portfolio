import React from "react";
import "./Skills.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {skillsData} from "../../data/skills";
import useIntersectionAnimation from "../../hooks/useIntersectionAnimation";

function Skills() {
  useIntersectionAnimation('.skillsdivs');

  return (
    <section className="skills">
      <h1 className="skillstitle">{skillsData.title}</h1>

      <div className="skillsdivs">
        {skillsData.sections.map((group, groupIndex) => (
          <div className={group.side} key={groupIndex}>
            {group.items.map((section, sectionIndex) => (
              <div className={section.className} key={sectionIndex}>
                <h2 className="skilldivheading">{section.heading}</h2>

                <p className="skilldivdesc">{section.description}</p>

                <div className="tech-icons">
                  {section.icons.map((icon, iconIndex) => (
                    <div
                      className="icon"
                      data-label={icon.label}
                      key={iconIndex}
                    >
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="svg-icon"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
import React, { useEffect } from "react";
import "./Skills.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {skillsData} from "../../data/skills";

function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    requestAnimationFrame(() => {
      document.querySelectorAll(".skillsdivs").forEach((card) => {
        observer.observe(card);
      });
    });

    return () => observer.disconnect();
  }, []);

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
import React from "react";
import "../../styles/aboutme.css";
import {aboutMeData} from "../../data/aboutMe";
import useIntersectionAnimation from "../../hooks/useIntersectionAnimation";

function AboutMe() {
  useIntersectionAnimation('.contentBlock');

  return (
    <section className="aboutme">
      <h1>{aboutMeData.title}</h1>

      {aboutMeData.sections.map((section, sectionIndex) => (
        <div className={section.className} key={sectionIndex}>
          <h2>{section.heading}</h2>

          {section.entries.map((entry, entryIndex) => (
            <React.Fragment key={entryIndex}>
              <h3>
                <span className="highlight">{entry.title}</span>
                <br />
                {entry.subtitle}
                {entry.date && (
                  <>
                    <br />
                    {entry.date}
                  </>
                )}
              </h3>

              {section.type === "education" ? (
                <h4>{entry.description}</h4>
              ) : (
                <>
                  <h4>{entry.subtitle}</h4>
                  <p>{entry.description}</p>
                </>
              )}

              {entryIndex !== section.entries.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
}

export default AboutMe;
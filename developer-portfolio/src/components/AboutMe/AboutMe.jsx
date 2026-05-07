import React, { useEffect } from "react";
import "./AboutMe.css";
import {aboutMeData} from "../../data/aboutMe";

function AboutMe() {
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
      document.querySelectorAll(".contentBlock").forEach((card) => {
        observer.observe(card);
      });
    });

    return () => observer.disconnect();
  }, []);

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

              {section.type === "certifications" &&
                entryIndex !== section.entries.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
}

export default AboutMe;
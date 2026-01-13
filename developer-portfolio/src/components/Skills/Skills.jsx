import React, { useEffect } from 'react';
import './Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Skills() {
    
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
        .querySelectorAll('.skillsdivs')
        .forEach(card => observer.observe(card));
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills">

        <h1 className="skillstitle">Skills</h1>

        <div className="skillsdivs">
            <div className="leftblocks">
                <div className="frontend">
                    <h2 className='skilldivheading'> Frontend</h2>
                    <p className="skilldivdesc">I'm passionate about design, animation and interactions, always aiming to build fun and responsive websites with great user experiences. </p>
                    <div className="tech-icons">
                        <div className="icon" data-label="React"><img src="/icons/react.svg" alt="react" className="svg-icon"/></div>
                        <div className="icon" data-label="Angular"><img src="/icons/angular.svg" alt="Angular" className="svg-icon"/></div>
                        <div className="icon" data-label="JavaScript"><img src="/icons/js.svg" alt="JavaSript" className="svg-icon"/></div>
                        <div className="icon" data-label="TypeScript"><img src="/icons/typescript.svg" alt="TypeScript" className="svg-icon"/></div>
                        <div className="icon" data-label="HTML5"><img src="/icons/html.svg" alt="HTML5" className="svg-icon"/></div>
                        <div className="icon" data-label="CSS-3"><img src="/icons/css.svg" alt="CSS-3" className="svg-icon"/></div>
                        <div className="icon" data-label="Bootstrap"><img src="/icons/bootstrap.svg" alt="Bootstrap" className="svg-icon"/></div>
                        <div className="icon" data-label="Kotlin"><img src="/icons/kotlin.svg" alt="Kotlin" className="svg-icon"/></div>
                        <div className="icon" data-label="SwiftUI"><img src="/icons/swift.svg" alt="SwiftUI" className="svg-icon"/></div>
                    </div>
                </div>

                <div className="backend">
                    <h2 className='skilldivheading'> Backend</h2>
                    <p className="skilldivdesc">I love problem solving and building complex systems. I strive to create scalable, reliable and secure software solutions.</p>
                    <div className="tech-icons">
                        <div className="icon" data-label="Spring"><img src="/icons/spring.svg" alt="Spring" className="svg-icon"/></div>
                        <div className="icon" data-label="Java"><img src="/icons/java.svg" alt="Java" className="svg-icon"/></div>
                        <div className="icon" data-label="Python"><img src="/icons/python.svg" alt="Python" className="svg-icon"/></div>
                        <div className="icon" data-label="ASP.NET"><img src="/icons/net.svg" alt="ASP.NET" className="svg-icon"/></div>
                        <div className="icon" data-label="PHP"><img src="/icons/php.svg" alt="PHP" className="svg-icon"/></div>
                        <div className="icon" data-label="Oracle DB"><img src="/icons/oracle.svg" alt="Oracle DB" className="svg-icon"/></div>
                        <div className="icon" data-label="MongoDB"><img src="/icons/mongo.svg" alt="MongoDB" className="svg-icon"/></div>
                        <div className="icon" data-label="Tomcat"><img src="/icons/tomcat.svg" alt="Tomcat" className="svg-icon"/></div>
                        <div className="icon" data-label="Hadoop"><img src="/icons/hadoop.svg" alt="Hadoop" className="svg-icon"/></div>
                        <div className="icon" data-label="Kafka"><img src="/icons/kafka.svg" alt="Kafka" className="svg-icon"/></div>
                    </div>
                </div>
            </div>


            <div className="rightblocks">
                <div className="cloud">
                    <h2 className='skilldivheading'> Cloud & DevOps</h2>
                    <p className="skilldivdesc">I am experienced in managing cloud services including AWS, GCP through academic projects and personal initiatives, with a strong understanding of DevOps practices and Agile methodologies.</p>
                    <div className="tech-icons">
                        <div className="icon" data-label="Agile"><img src="/icons/agile.svg" alt="Agile" className="svg-icon"/></div>
                        <div className="icon" data-label="DevOps"><img src="/icons/devops.svg" alt="DevOps" className="svg-icon"/></div>
                        <div className="icon" data-label="AWS"><img src="/icons/aws.svg" alt="AWS" className="svg-icon"/></div>
                        <div className="icon" data-label="GCP"><img src="/icons/gcp.svg" alt="gcp" className="svg-icon"/></div>
                        <div className="icon" data-label="Linux"><img src="/icons/linux.svg" alt="Linux" className="svg-icon"/></div>
                        <div className="icon" data-label="Docker"><img src="/icons/docker.svg" alt="Docker" className="svg-icon"/></div>
                        <div className="icon" data-label="Jenkins"><img src="/icons/jenkins.svg" alt="Jenkins" className="svg-icon"/></div> 
                        <div className="icon" data-label="Ansible"><img src="/icons/ansible.svg" alt="Ansible" className="svg-icon"/></div>
                        <div className="icon" data-label="Github Actions"><img src="/icons/github.svg" alt="Git Hub Actions" className="svg-icon"/></div>                       
                    </div>
                </div>

                <div className="cybersecurity">
                    <h2 className='skilldivheading'> Cybersecurity</h2>
                    <p className="skilldivdesc">I have experience in penetration testing, Linux security, and various cybersecurity practices, with a strong focus on identifying, exploiting, and remediating vulnerabilities.</p>
                    <div className="tech-icons">
                        <div className="icon" data-label="Kali"><img src="/icons/kali.svg" alt="Kali Linux" className="svg-icon"/></div>
                        <div className="icon" data-label="Hack The Box"><img src="/icons/htb.svg" alt="Hack The Box" className="svg-icon"/></div>
                        <div className="icon" data-label="Metasploit"><img src="/icons/metasploit.svg" alt="Metasploit" className="svg-icon"/></div>
                        <div className="icon" data-label="Active Directory"><img src="/icons/ad.svg" alt="Active Directory" className="svg-icon"/></div>
                        <div className="icon" data-label="Nmap"><img src="/icons/nmap.svg" alt="Nmap" className="svg-icon"/></div>
                        <div className="icon" data-label="Wireshark"><img src="/icons/wireshark.svg" alt="Wireshark" className="svg-icon"/></div>
                        <div className="icon" data-label="Hydra"><img src="/icons/hydra.svg" alt="Hydra" className="svg-icon"/></div>
                        <div className="icon" data-label="Burp Suite"><img src="/icons/burpsuite.svg" alt="Burp Suite" className="svg-icon"/></div>
                        <div className="icon" data-label="Bash"><img src="/icons/bash.svg" alt="Bash" className="svg-icon"/></div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  );
}

export default Skills;

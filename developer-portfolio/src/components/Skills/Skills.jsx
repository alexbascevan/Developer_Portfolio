import React, { useEffect } from 'react';
import './Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Skills() {

    useEffect(() => {
        // Create an intersection observer
        const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            // Add the 'visible' class when the element is in the viewport
            entry.target.classList.add('visible');
            // console.log("visibile");
            } else {
            // Remove the 'visible' class when the element is out of the viewport
            entry.target.classList.remove('visible');
            // console.log("invisible");
            }
        });
        }, {
        threshold: 0.50, // Trigger when 25% of the element is in the viewport
        });

        // Target all .contentBlock elements
        const contentBlocks = document.querySelectorAll('.skillsdivs');
        contentBlocks.forEach(block => {
        observer.observe(block); // Start observing each block
        });

        // Cleanup observer on component unmount
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
                        <div className="icon" data-label="React"><span className="iconify" data-icon="logos:react"></span></div>
                        <div className="icon" data-label="Angular"><img src="/icons/angular.svg" alt="Angular" className="svg-icon"/></div>
                        <div className="icon" data-label="JavaScript"><span className="iconify" data-icon="logos:javascript"></span></div>
                        <div className="icon" data-label="TypeScript"><img src="/icons/typescript.svg" alt="TypeScript" className="svg-icon"/></div>
                        <div className="icon" data-label="HTML5"><span className="iconify" data-icon="logos:html-5"></span></div>
                        <div className="icon" data-label="CSS3"><span className="iconify" data-icon="logos:css-3"></span></div>
                        <div className="icon" data-label="Sass"><span className="iconify" data-icon="logos:sass"></span></div>
                        <div className="icon" data-label="Bootstrap"><span className="iconify" data-icon="logos:bootstrap"></span></div>
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
                        <div className="icon" data-label="ASP.NET"><img src="/icons/net.svg" alt="ASP.NET" className="svg-icon"/></div>
                        <div className="icon" data-label="PHP"><img src="/icons/php.svg" alt="PHP" className="svg-icon"/></div>
                        <div className="icon" data-label="Oracle DB"><img src="/icons/oracle.svg" alt="Oracle DB" className="svg-icon"/></div>
                        <div className="icon" data-label="MongoDB"><img src="/icons/mongo.svg" alt="MongoDB" className="svg-icon"/></div>
                        <div className="icon" data-label="cPanel"><img src="/icons/cpanel.svg" alt="cPanel" className="svg-icon"/></div>
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
                        <div className="icon" data-label="AWS"><span className="iconify" data-icon="logos:aws"></span></div> 
                        <div className="icon" data-label="Google Cloud"><span className="iconify" data-icon="logos:google"></span></div>
                        <div className="icon" data-label="Linux"><span className="iconify" data-icon="logos:linux-tux"></span></div>
                        <div className="icon" data-label="Docker"><span className="iconify" data-icon="logos:docker-icon"></span></div>
                        <div className="icon" data-label="Jenkins"><span className="iconify" data-icon="logos:jenkins"></span></div> 
                        <div className="icon" data-label="Ansible"><img src="/icons/ansible.svg" alt="Ansible" className="svg-icon"/></div>
                        <div className="icon" data-label="GitHub"><span className="iconify" data-icon="logos:github-icon"></span></div>
                        <div className="icon" data-label="GitLab"><span className="iconify" data-icon="logos:gitlab"></span></div>
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

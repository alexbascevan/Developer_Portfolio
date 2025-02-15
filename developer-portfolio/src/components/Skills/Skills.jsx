import './Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Skills() {
  return (
    <section className="skills">

        <h1 className="skillstitle">Skills</h1>

        <div class="skillsdivs">
            <div className="leftblocks">
                <div className="frontend">
                    <h2 className='skilldivheading'> Frontend</h2>
                    <p className="skilldivdesc">I'm passionate about design, animation and interactions, always aiming to build fun and responsive websites with great user experiences. </p>
                    <div class="tech-icons">
                        <div class="icon" data-label="React"><span class="iconify" data-icon="logos:react"></span></div>
                        <div class="icon" data-label="Angular"><img src="/icons/angular.svg" alt="Angular" class="svg-icon"/></div>
                        <div class="icon" data-label="JavaScript"><span class="iconify" data-icon="logos:javascript"></span></div>
                        <div class="icon" data-label="TypeScript"><img src="/icons/typescript.svg" alt="TypeScript" class="svg-icon"/></div>
                        <div class="icon" data-label="HTML5"><span class="iconify" data-icon="logos:html-5"></span></div>
                        <div class="icon" data-label="CSS3"><span class="iconify" data-icon="logos:css-3"></span></div>
                        <div class="icon" data-label="Sass"><span class="iconify" data-icon="logos:sass"></span></div>
                        <div class="icon" data-label="Bootstrap"><span class="iconify" data-icon="logos:bootstrap"></span></div>
                        <div class="icon" data-label="Kotlin"><img src="/icons/kotlin.svg" alt="Kotlin" class="svg-icon"/></div>
                        <div class="icon" data-label="SwiftUI"><img src="/icons/swift.svg" alt="SwiftUI" class="svg-icon"/></div>
                    </div>
                </div>

                <div className="backend">
                    <h2 className='skilldivheading'> Backend</h2>
                    <p className="skilldivdesc">I love problem solving and building complex systems. I strive to create scalable, reliable and secure software solutions.</p>
                    <div class="tech-icons">
                        <div class="icon" data-label="Spring"><img src="/icons/spring.svg" alt="Spring" class="svg-icon"/></div>
                        <div class="icon" data-label="Java"><img src="/icons/java.svg" alt="Java" class="svg-icon"/></div>
                        <div class="icon" data-label="ASP.NET"><img src="/icons/net.svg" alt="ASP.NET" class="svg-icon"/></div>
                        <div class="icon" data-label="PHP"><img src="/icons/php.svg" alt="PHP" class="svg-icon"/></div>
                        <div class="icon" data-label="Oracle DB"><img src="/icons/oracle.svg" alt="Oracle DB" class="svg-icon"/></div>
                        <div class="icon" data-label="MongoDB"><img src="/icons/mongo.svg" alt="MongoDB" class="svg-icon"/></div>
                        <div class="icon" data-label="cPanel"><img src="/icons/cpanel.svg" alt="cPanel" class="svg-icon"/></div>
                        <div class="icon" data-label="Tomcat"><img src="/icons/tomcat.svg" alt="Tomcat" class="svg-icon"/></div>
                        <div class="icon" data-label="Postman"><img src="/icons/postman.svg" alt="Postman" class="svg-icon"/></div>
                    </div>
                </div>
            </div>


            <div className="rightblocks">
                <div className="cloud">
                    <h2 className='skilldivheading'> Cloud & DevOps</h2>
                    <p className="skilldivdesc">I am experienced in managing cloud services including AWS, GCP through academic projects and personal initiatives, with a strong understanding of DevOps practices and Agile methodologies.</p>
                    <div class="tech-icons">
                        <div class="icon" data-label="AWS"><span class="iconify" data-icon="logos:aws"></span></div> 
                        <div class="icon" data-label="Google Cloud"><span class="iconify" data-icon="logos:google"></span></div>
                        <div class="icon" data-label="Linux"><span class="iconify" data-icon="logos:linux-tux"></span></div>
                        <div class="icon" data-label="Docker"><span class="iconify" data-icon="logos:docker-icon"></span></div>
                        <div class="icon" data-label="Jenkins"><span class="iconify" data-icon="logos:jenkins"></span></div> 
                        <div class="icon" data-label="Ansible"><img src="/icons/ansible.svg" alt="Ansible" class="svg-icon"/></div>
                        <div class="icon" data-label="GitHub"><span class="iconify" data-icon="logos:github-icon"></span></div>
                        <div class="icon" data-label="GitLab"><span class="iconify" data-icon="logos:gitlab"></span></div>
                    </div>
                </div>

                <div className="cybersecurity">
                    <h2 className='skilldivheading'> Cybersecurity</h2>
                    <p className="skilldivdesc">I have experience in penetration testing, Linux security, and various cybersecurity practices, with a strong focus on identifying, exploiting, and remediating vulnerabilities.</p>
                    <div class="tech-icons">
                        <div class="icon" data-label="Kali"><img src="/icons/kali.svg" alt="Kali Linux" class="svg-icon"/></div>
                        <div class="icon" data-label="Hack The Box"><img src="/icons/htb.svg" alt="Hack The Box" class="svg-icon"/></div>
                        <div class="icon" data-label="Metasploit"><img src="/icons/metasploit.svg" alt="Metasploit" class="svg-icon"/></div>
                        <div class="icon" data-label="Active Directory"><img src="/icons/ad.svg" alt="Active Directory" class="svg-icon"/></div>
                        <div class="icon" data-label="Nmap"><img src="/icons/nmap.svg" alt="Nmap" class="svg-icon"/></div>
                        <div class="icon" data-label="Wireshark"><img src="/icons/wireshark.svg" alt="Wireshark" class="svg-icon"/></div>
                        <div class="icon" data-label="Hydra"><img src="/icons/hydra.svg" alt="Hydra" class="svg-icon"/></div>
                        <div class="icon" data-label="Burp Suite"><img src="/icons/burpsuite.svg" alt="Burp Suite" class="svg-icon"/></div>
                        <div class="icon" data-label="Bash"><img src="/icons/bash.svg" alt="Bash" class="svg-icon"/></div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  );
}

export default Skills;

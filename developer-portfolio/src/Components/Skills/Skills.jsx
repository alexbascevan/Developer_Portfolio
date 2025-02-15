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
                    <p className="skilldivdesc">Experienced in penetration testing, Linux security, and various cybersecurity practices, with a focus on identifying, exploiting and remediating vulnerabilities.</p>
                    <div class="tech-icons">
                        <div><img src="/icons/kali.svg" alt="Kali Linux" class="svg-icon"/></div>
                        <div><img src="/icons/htb.svg" alt="Hack The Box" class="svg-icon"/></div>
                        <div><img src="/icons/metasploit.svg" alt="Metasploit" class="svg-icon"/></div>
                        <div> <img src="/icons/ad.svg" alt="Active Directory" class="svg-icon"/></div>
                        <div><img src="/icons/nmap.svg" alt="nmap" class="svg-icon"/></div>
                        <div><img src="/icons/wireshark.svg" alt="wireshark"class="svg-icon"/></div>
                        <div><img src="/icons/hydra.svg" alt="hydra" class="svg-icon"/></div>
                        <div><img src="/icons/burpsuite.svg" alt="burpsuite" class="svg-icon"/></div>
                    </div>
                </div>

                <div className="backend">
                    <h2 className='skilldivheading'> Backend</h2>
                    <p className="skilldivdesc">I have managed AWS, GCP and various other cloud services during my education and my own projects.</p>
                    <div class="tech-icons">
                        <div class="icon"><span class="iconify" data-icon="logos:aws"></span></div> 
                        <div class="icon"><span class="iconify" data-icon="logos:google"></span></div>
                        <div class="icon"><span class="iconify" data-icon="logos:linux-tux"></span></div>
                        <div class="icon"><span class="iconify" data-icon="logos:docker-icon"></span></div>
                        <div class="icon"><span class="iconify" data-icon="logos:jenkins"></span></div> 
                        <div class="icon"><span class="iconify" data-icon="logos:github-icon"></span></div>
                        <div class="icon"><span class="iconify" data-icon="logos:gitlab"></span></div> 
                    </div>
                </div>
            </div>


            <div className="rightblocks">
                <div className="cybersecurity">
                    <h2 className='skilldivheading'> Cybersecurity</h2>
                    <p className="skilldivdesc">Experienced in penetration testing, Linux security, and various cybersecurity practices, with a focus on identifying, exploiting and remediating vulnerabilities.</p>
                    <div class="tech-icons">
                        <div><img src="/icons/kali.svg" alt="Kali Linux" class="svg-icon"/></div>
                        <div><img src="/icons/htb.svg" alt="Hack The Box" class="svg-icon"/></div>
                        <div><img src="/icons/metasploit.svg" alt="Metasploit" class="svg-icon"/></div>
                        <div> <img src="/icons/ad.svg" alt="Active Directory" class="svg-icon"/></div>
                        <div><img src="/icons/nmap.svg" alt="nmap" class="svg-icon"/></div>
                        <div><img src="/icons/wireshark.svg" alt="wireshark"class="svg-icon"/></div>
                        <div><img src="/icons/hydra.svg" alt="hydra" class="svg-icon"/></div>
                        <div><img src="/icons/burpsuite.svg" alt="burpsuite" class="svg-icon"/></div>
                    </div>
                </div>

                <div className="cloud">
                    <h2 className='skilldivheading'> Cloud & DevOps</h2>
                    <p className="skilldivdesc">I have managed AWS, GCP and various other cloud services during my education and my own projects.</p>
                    <div class="tech-icons">
                        <div class="icon"><span class="iconify" data-icon="logos:aws"></span></div> 
                        <div class="icon"><span class="iconify" data-icon="logos:google"></span></div>
                        <div class="icon"><span class="iconify" data-icon="logos:linux-tux"></span></div>
                        <div class="icon"><span class="iconify" data-icon="logos:docker-icon"></span></div>
                        <div class="icon"><span class="iconify" data-icon="logos:jenkins"></span></div> 
                        <div class="icon"><span class="iconify" data-icon="logos:github-icon"></span></div>
                        <div class="icon"><span class="iconify" data-icon="logos:gitlab"></span></div> 
                    </div>
                </div>
            </div>

        </div>

    </section>
  );
}

export default Skills;

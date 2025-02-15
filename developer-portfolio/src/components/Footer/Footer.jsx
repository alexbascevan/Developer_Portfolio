import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa'; // Importing icons from react-icons
import './Footer.css'

function Footer(){
    return (
        <footer>
            <div className="footericons">
                <a href="https://www.linkedin.com/in/alex-bascevan-2697752b7" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} color="#6bb7f2" />
                </a>

                <a href="https://github.com/alexbascevan" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} color="#ffffff" />
                </a>

                <a href="mailto:alexbascevan@icloud.com">
                <FaEnvelope size={30} color="#d14836" />
                </a>

                <a href="/resume/Alex Bascevan - Resume.pdf" target="_blank" rel="noopener noreferrer" title="Alex Bascevan - Resume">
                    <FaFileAlt size={30} color="#d14836" />
                </a>
            </div>


            <p className="copyright">&copy; {new Date().getFullYear()} Alex Bascevan Portfolio. All rights reserved.</p>
        </footer>
    );
}

export default Footer
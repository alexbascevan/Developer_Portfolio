import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import '../../styles/footer.css'

function Footer(){
    return (
        <footer>
            <SocialLinks className="footericons" />
            <p className="copyright">&copy; {new Date().getFullYear()} - Alex Bascevan</p>
        </footer>
    );
}

export default Footer
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';

const iconMap = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaEnvelope: FaEnvelope,
  FaFileAlt: FaFileAlt
};

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={className}>
      {socialLinks.map((link) => {
        const IconComponent = iconMap[link.icon];
        return (
          <a
            key={link.id}
            href={link.url}
            target={link.target}
            rel={link.target === "_blank" ? "noopener noreferrer" : ""}
            title={link.title || link.label}
          >
            <IconComponent size={30} color={link.color} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

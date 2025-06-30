import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MotionDiv = motion.div;

const Footer = () => {
  return (
    <footer className="footer-section">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="footer-container"
      >
        <div className="footer-content">
          <div className="footer-links">
            <a href="#hero" className="footer-link">
              Home
            </a>
            <a href="#about" className="footer-link">
              About
            </a>
            <a href="#projects" className="footer-link">
              Projects
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/Ahmad131554"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/m-ahmad-14a767363/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ahmadhafeez1118@gmail.com"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <MdEmail />
            </a>
          </div>

          <div className="footer-copyright">
            <p>Designed & Built by M Ahmad</p>
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </MotionDiv>
    </footer>
  );
};

export default Footer;

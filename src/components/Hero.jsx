import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MotionDiv = motion.div;
const MotionA = motion.a;

const Hero = () => {
  return (
    <section id="hero">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-title">M Ahmad.</h1>
        <h2 className="hero-subtitle">I build things for the web.</h2>
        <p className="hero-description">
          I'm a frontend developer specializing in React and JavaScript.
          Passionate about creating responsive, user-friendly web applications.
        </p>
        <MotionA
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-button"
        >
          View My Work
        </MotionA>
        <div className="social-links">
          <a
            href="https://github.com/Ahmad131554"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/m-ahmad-14a767363/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Hero;

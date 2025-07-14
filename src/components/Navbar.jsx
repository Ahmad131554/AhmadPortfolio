import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MotionNav = motion.nav;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <MotionNav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        mobileMenuOpen ? "mobile-open" : ""
      }`}
    >
      <div className="nav-content">
        <a href="#hero" className="nav-logo">
          {"<MA />"}
        </a>

        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#about" className="nav-link" onClick={toggleMobileMenu}>
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="nav-link"
              onClick={toggleMobileMenu}
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={toggleMobileMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={toggleMobileMenu}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ahmad131554"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMobileMenu}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </MotionNav>
  );
};

export default Navbar;

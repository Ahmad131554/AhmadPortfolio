import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const MotionDiv = motion.div;
const MotionForm = motion.form;

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-heading">
          <span className="section-number">03.</span> Get In Touch
        </h2>

        <div className="contact-container">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="contact-info"
          >
            <h3>Let's talk about your project</h3>
            <p>
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll get back to you as soon as
              possible!
            </p>

            <div className="contact-methods">
              <a
                href="mailto:ahmadhafeez1118@gmail.com"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="icon" />
                <span>ahmadhafeez1118@gmail.com</span>
              </a>
              <div className="social-links">
                <a
                  href="https://github.com/Ahmad131554"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/m-ahmad-14a767363/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" />
                </a>
              </div>
            </div>
          </MotionDiv>

          <MotionForm
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* Hidden Netlify form fields */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </MotionForm>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Contact;

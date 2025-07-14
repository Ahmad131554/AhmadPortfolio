import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const MotionDiv = motion.div;
const MotionForm = motion.form;

const Contact = () => {
  const [state, setState] = useState({
    submitting: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ submitting: true });

    const form = e.target;
    const formData = new FormData(form);

    const toastId = toast.loading("Sending your message...");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        toast.success("Message sent successfully!", { id: toastId });
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.", {
          id: toastId,
        });
      })
      .finally(() => {
        setState({ submitting: false });
      });
  };

  return (
    <section id="contact" className="contact-section">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-heading">
          <span className="section-number">04.</span> Get In Touch
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
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={state.submitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={state.submitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                disabled={state.submitting}
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </MotionForm>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Contact;

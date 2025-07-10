import { motion } from "framer-motion";
import { FaDownload, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const MotionDiv = motion.div;
const MotionA = motion.a;

const Experience = () => {
  // Your data
  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "CodeAlpha",
      duration: "June 2025 - Present | 1 Month",
      tasks: [
        "Built responsive portfolio using React + Vite",
        "Implemented animations with Framer Motion",
        "Deployed projects on Vercel",
        "Collaborated in agile development workflows",
      ],
      certLink: "/certificates/codealpha-certificate.pdf",
    },
    {
      role: "JavaScript Developer Intern",
      company: "COMSATS Software House",
      duration: "June 2024 - Sept 2024 | 3 Months",
      tasks: [
        "Developed web applications using vanilla JavaScript",
        "Fixed UI bugs in legacy systems",
        "Optimized DOM manipulation performance",
        "Participated in code reviews",
      ],
      certLink: "/certificates/code-alpha-lor.pdf",
    },
  ];

  const education = {
    degree: "BS (Software Engineering)",
    institution: "CUI Islamabad, Sahiwal Campus",
    year: "2021 - 2025",
  };

  const certificates = [
    {
      name: "React - Crash Course",
      source: "Udemy",
      link: "https://www.udemy.com/certificate/UC-2f4070d9-37f9-4df9-835d-08aa93de5996/",
    },
    {
      name: "JS - Master Course",
      source: "Udemy",
      link: "https://www.udemy.com/certificate/UC-fc96736e-ba73-4002-8fd8-750121af06bc/",
    },
    {
      name: "HTML & CSS Mastery",
      source: "Udemy",
      link: "https://www.coursera.org/account/accomplishments/verify/F7E35BEDZ753",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">
          <span className="section-number">03.</span> Experience & Education
        </h2>

        <div className="resume-container">
          {/* Experience Timeline */}
          <div className="timeline">
            {experience.map((exp, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="timeline-item"
              >
                <h3>{exp.role}</h3>
                <p className="company">
                  {exp.company} <span>• {exp.duration}</span>
                </p>
                <ul className="tasks">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                {exp.certLink && (
                  <a
                    href={exp.certLink}
                    className="certificate-link"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <FaCertificate /> View Certificate{" "}
                    <FaExternalLinkAlt className="external-icon" />
                  </a>
                )}
              </MotionDiv>
            ))}
          </div>

          {/* Education & Skills */}
          <div className="education-skills">
            <div className="education">
              <h3>Education</h3>
              <h4>{education.degree}</h4>
              <p>{education.institution}</p>
              <p>{education.year}</p>
            </div>

            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Supabase",
                  "Git/GitHub",
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="certificates">
              <h3>Certifications</h3>
              <ul>
                {certificates.map((cert, index) => (
                  <li key={index}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      <FaCertificate /> {cert.name} <span>({cert.source})</span>
                      <FaExternalLinkAlt className="external-icon-small" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <MotionA
          href="/resume/ahmad-resume.pdf"
          download="ahmad-resume.pdf"
          className="download-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => console.log("download initiated")}
        >
          <FaDownload /> Download Full Resume
        </MotionA>
      </MotionDiv>
    </section>
  );
};

export default Experience;

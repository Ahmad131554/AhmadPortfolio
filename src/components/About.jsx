// import { motion } from "framer-motion";

// const MotionDiv = motion.div;

// const About = () => {
//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Supabase",
//     "Git",
//     "GitHub",
//   ];

//   return (
//     <section id="about" className="about-section">
//       <MotionDiv
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="about-content"
//       >
//         <h2 className="section-heading">
//           <span className="section-number">01.</span> About Me
//         </h2>
//         <div className="about-grid">
//           <div className="about-text">
//             <p>
//               Hello! I'm Ahmad, a frontend developer passionate about building
//               practical web applications. My journey started with HTML/CSS and
//               has grown to include modern JavaScript frameworks like React.
//             </p>
//             <p>
//               I specialize in creating responsive, user-friendly interfaces with
//               clean code. My projects range from e-commerce solutions to fun
//               interactive games, each helping me grow as a developer.
//             </p>
//             <p>Technologies I work with:</p>
//             <ul className="skills-list">
//               {skills.map((skill) => (
//                 <li key={skill}>{skill}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="about-image">
//             <div className="image-wrapper"></div>
//           </div>
//         </div>
//       </MotionDiv>
//     </section>
//   );
// };

// export default About;

import { motion } from "framer-motion";

const MotionDiv = motion.div;

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Supabase",
    "Git",
    "GitHub",
  ];

  return (
    <section id="about" className="about-section">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="about-content"
      >
        <h2 className="section-heading">
          <span className="section-number">01.</span> About Me
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I'm Ahmad, a frontend developer passionate about building
              practical web applications. My journey started with HTML/CSS and
              has grown to include modern JavaScript frameworks like React.
            </p>
            <p>
              I specialize in creating responsive, user-friendly interfaces with
              clean code. My projects range from e-commerce solutions to fun
              interactive games, each helping me grow as a developer.
            </p>
            <p>Technologies I work with:</p>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img src="/profile.jpeg " alt="M Ahmad" className="profile-img" />
            </div>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
};

export default About;

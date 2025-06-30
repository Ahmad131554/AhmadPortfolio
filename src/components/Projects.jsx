import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const projects = [
  {
    id: 1,
    title: "Feed2Need",
    description:
      "FYP project - an online ecommerce grocery store built with React and Tailwind CSS.",
    tags: ["FYP", "React", "Tailwind", "Ecommerce", "Grocery"],
    github: "https://github.com/Ahmad131554/feed2need",
    live: "https://feed2need.vercel.app/",
    image: "/feed2need.png",
  },
  {
    id: 2,
    title: "Eat-n-Split",
    description:
      "App to share the bill of your outing meals with friends and keep track of them.",
    tags: ["React", "JavaScript", "CSS", "Bill-Splitting"],
    github: "https://github.com/Ahmad131554/eat-n-split",
    live: "https://eat-n-split-two-mu.vercel.app/",
    image: "/eat-n-split.png",
  },
  {
    id: 3,
    title: "Travel List",
    description:
      "App to assist in making list of things needed to pack for travel.",
    tags: ["React", "JavaScript", "CSS", "Travel"],
    github: "https://github.com/Ahmad131554/travel-list",
    live: "https://travel-list-omega-one.vercel.app/",
    image: "/travel-list.png",
  },
  {
    id: 4,
    title: "Pig Game",
    description:
      "A two-player dice game where players roll to accumulate points. First to 100 points wins.",
    tags: ["HTML", "CSS", "JavaScript", "Game"],
    github: "https://github.com/Ahmad131554/pig-game",
    live: "https://rollthepig.netlify.app/",
    image: "/pig-game.png",
  },
  {
    id: 5,
    title: "Guess My Number",
    description:
      "Fun web-based game where players try to guess a random number between 1 and 20.",
    tags: ["HTML", "CSS", "JavaScript", "Game"],
    github: "https://github.com/Ahmad131554/guess-my-number",
    live: "https://randomguesser.netlify.app/",
    image: "/guess-my-number.png",
  },
  {
    id: 6,
    title: "Omnifood",
    description:
      "Static landing page for Omnifood food subscription service with responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "Landing-Page"],
    github: "https://github.com/Ahmad131554/omnifood-restaurant",
    live: "https://omnifood-by-ahmad.netlify.app/",
    image: "/omnifood.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-heading">
          <span className="section-number">02.</span> My Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <MotionArticle
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.github}
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    aria-label="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </MotionArticle>
          ))}
        </div>
      </MotionDiv>
    </section>
  );
};

export default Projects;

import { motion } from 'framer-motion';
import './Projects.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: index * 0.12,
    },
  }),
};

function Projects() {
  const projects = [
    {
      title: 'Automated Business Reporting System',
      type: 'Personal Project - n8n Automation',
      description: [
        'Built an automated pipeline for monthly business reports via Gmail using n8n.',
        'Designed minimalist HTML email templates with dynamic IDR variables.',
        'Integrated Gmail nodes, HTTP Requests, and data transforms in n8n.',
      ],
    },
    {
      title: 'AI Chatbot Agent',
      type: 'Personal Project - API & Prompt Engineering',
      description: [
        'Designed chatbot logic flows, prompt designs, and external API integrations.',
        'Developed intelligent response systems with conversation context management.',
        'Used prompt engineering techniques to improve AI output accuracy.',
      ],
    },
    {
      title: 'Monitoring Infrastructure',
      type: 'Independent Study - DevOps Engineer',
      description: [
        'Setup monitoring stack using Docker, Grafana, and Prometheus.',
        'Configured real-time dashboards for system performance visualization.',
        'Implemented application containerization and network management.',
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Projects & <span className="text-accent">Technical Experience</span>
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="project-content">
                <span className="project-index">0{index + 1}</span>
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
                <ul className="project-desc">
                  {project.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import { motion } from 'framer-motion';
import './Skills.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

function Skills() {
  const skills = {
    "DevOps & Infra": ["Docker", "Grafana", "Prometheus", "Linux", "Mikrotik", "Networking"],
    "Automation & AI": ["n8n (Workflow Automation)", "AI Agent Development", "Prompt Engineering", "API Integration"],
    "AI-Powered Development": ["AI-Assisted Coding", "Agentic Workflows", "Automated Testing", "AI Code Review"],
    "Web & Programming": ["HTML", "CSS", "JavaScript", "Java", "REST API"],
    "Tools & Platform": ["Git", "Gmail API", "Google Workspace", "AI Image Generation"],
    "Soft Skills": ["Problem Solving", "Structured Documentation", "Team Collaboration", "Creativity"]
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Technical <span className="text-accent">Expertise</span>
        </motion.h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={index}
              className="skill-category-minimal"
              variants={fadeUp}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>{category}</h3>
              <div className="skill-tags-grid">
                {items.map((skill, idx) => (
                  <span key={idx} className="skill-tag-item">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

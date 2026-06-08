import { motion } from 'framer-motion';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function About() {
  const skills = [
    { category: 'DevOps & Infra', items: ['Docker', 'Grafana', 'Prometheus', 'Linux', 'Mikrotik'] },
    { category: 'Automation & AI', items: ['n8n', 'AI Agent', 'Prompt Engineering', 'API Integration'] },
    { category: 'AI-Powered Development', items: ['AI-Assisted Coding', 'Agentic Workflows', 'Smart Automation'] }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="section-title-left">About <span className="text-accent">Me</span></h2>
            <p className="lead">
              Building Bridges Between Robust Infrastructure and Artificial Intelligence.
            </p>
            <p>
              I am a DevOps Engineer passionate about exploring how AI can transform the way we work. Specializing in Automation, I focus on building systems that adapt and learn, reducing operational overhead and increasing productivity through intelligent solutions.
            </p>
            <p>
              Every line of code and pipeline I build is designed for maximum efficiency, ensuring that technology works for you, not the other other way around.
            </p>
            
            <div className="stats-minimal">
              <div className="stat">
                <span className="stat-num">04</span>
                <span className="stat-lab">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-num">03</span>
                <span className="stat-lab">Certs</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-skills-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {skills.map((group, i) => (
              <div key={i} className="skill-group-minimal">
                <h4>{group.category}</h4>
                <div className="skill-tags">
                  {group.items.map((item, j) => (
                    <span key={j} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

import { motion } from 'framer-motion';
import './Experience.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const timelineVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: index * 0.15,
    },
  }),
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (index) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: index * 0.15 + 0.2,
    },
  }),
};

function Experience() {
  const experiences = [
    {
      title: 'DevOps Engineer - Independent Study',
      company: 'PT. Nurul Fikri Cipta Inovasi',
      period: '2025',
      details: 'Completed the Certified Independent Study (SIB) in DevOps Engineering. Built monitoring pipelines and infrastructure automation.',
    },
    {
      title: 'Data Management - Internship',
      company: 'PT. Telekomunikasi Indonesia (Telkom)',
      period: '2019 - 2022',
      details: 'Supported data management and operational administration tasks.',
    },
    {
      title: 'Book Printing Production',
      company: 'PT. ARYA DUTA',
      period: '2019 - 2022',
      details: 'Involved in the production process and workflow of book printing.',
    },
    {
      title: 'Driver',
      company: 'GOJEK',
      period: '2019 - 2022',
      details: 'Honed discipline, customer communication, and time management.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Work <span className="text-accent">Experience</span>
        </motion.h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.company}`}
              className="timeline-item"
              variants={timelineVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="timeline-dot"
                variants={dotVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <motion.div
                className="timeline-content"
                whileHover={{ x: 6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-details">{exp.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

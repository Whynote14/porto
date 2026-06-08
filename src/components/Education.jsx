import { motion } from 'framer-motion';
import './Education.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardSlide = {
  hidden: { opacity: 0, x: -60 },
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

function Education() {
  const education = [
    {
      degree: 'B.S. in Informatics Engineering',
      school: 'STT Terpadu Nurul Fikri, Depok',
      period: '2023 - Present (Semester 6)',
      details: 'Focus: DevOps Engineering, AI Development, AI for Business, and Cloud Computing.',
    },
    {
      degree: 'Vocational High School - Network Engineering',
      school: 'SMK Mekanik Cibinong',
      period: '2019 - 2022',
      details: 'Major: Computer & Network Engineering.',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Education
        </motion.h2>

        <div className="edu-list">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              className="edu-card"
              variants={cardSlide}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ x: 8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="edu-index">0{index + 1}</span>
              <h4>{item.degree}</h4>
              <p className="edu-school">{item.school}</p>
              <p className="edu-period">{item.period}</p>
              <p className="edu-details">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

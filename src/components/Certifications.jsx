import { motion } from 'framer-motion';
import './Certifications.css';
import certAiForBusiness from '../assets/cert_ai_for_business.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: index * 0.15,
    },
  }),
};

function Certifications() {
  const certifications = [
    {
      title: 'Certified Independent Study - AI For Business',
      issuer: 'Nurul Fikri Academy',
      date: '2026',
      details: 'Completed the Certified Independent Study (SIB) program in AI For Business. Certificate No: 0578/S-SIB/NFA/VII/2026.',
      link: 'https://drive.google.com/file/d/1pGKnaCiMcoJ8kcW80EZAlsAk8LBDlTDk/view?usp=sharing',
    },
    {
      title: 'Certified Independent Study - DevOps Engineer',
      issuer: 'PT. Nurul Fikri Cipta Inovasi',
      date: '2025',
      details: 'Completed the Certified Independent Study (SIB) program in DevOps Engineering. Certificate No: 2117/S-SIB/NFA/XII/2025.',
      link: 'https://drive.google.com/file/d/1sy7rNJbXDC0u1ojb4YEWwoNwjAQATlTm/view?usp=drive_link',
    },
    {
      title: 'Competency Certificate - Network Engineering',
      issuer: 'PT. Argatama Multi Agung',
      date: '2022',
      details: 'Cabling competency, Mikrotik configuration, and file/printer sharing. No: 156/13.179/kep-MC/VI/2022.',
      link: 'https://drive.google.com/file/d/13L93E38PCI-T43IDE_WrU4iBqIzAmYTh/view?usp=sharing',
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Certifications
        </motion.h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="cert-card"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="cert-badge">CERT</div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} | {cert.date}</p>
                <p className="cert-details">{cert.details}</p>
                <motion.a
                  href={cert.link}
                  className="btn cert-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Credential
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

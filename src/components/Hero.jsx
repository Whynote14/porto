import { motion } from 'framer-motion';
import { useRef } from 'react';
import './Hero.css';
import profileImg from '../assets/foto2.jpeg';
import Hero3DBackground from './Hero3DBackground.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: 'blur(20px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
};

function Hero() {
  const heroContentRef = useRef();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <Hero3DBackground />
      <div className="hero-container">
        <motion.div
          ref={heroContentRef}
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.div className="hero-badge" variants={itemVariants}>
              Open for Career Opportunities
            </motion.div>
            <motion.h1 className="hero-name" variants={itemVariants}>
              Muhamad Zidane <br /> 
              <span className="text-gradient">Al Huda</span>
            </motion.h1>
            <motion.p className="hero-tagline" variants={itemVariants}>
              DevOps Engineer & AI Automation Architect
            </motion.p>
            <motion.p className="hero-summary" variants={itemVariants}>
              Membantu bisnis mengakselerasi pertumbuhan melalui otomasi cerdas dan infrastruktur yang skalabel. Menggabungkan ketangguhan DevOps dengan kecerdasan AI untuk menciptakan workflow masa depan yang efisien.
            </motion.p>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Lihat Portfolio
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Mari Berdiskusi
              </motion.button>
            </motion.div>
          </div>
          <motion.div className="hero-image-container" variants={imageVariants}>
            <div className="profile-frame">
              <img src={profileImg} alt="Muhamad Zidane Al Huda" className="hero-profile" />
              <div className="frame-border"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

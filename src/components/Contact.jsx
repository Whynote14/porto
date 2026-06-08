import { motion } from 'framer-motion';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function Contact() {
  const contactInfo = [
    {
      label: 'Email 📧',
      value: 'zidanemuhammad112@gmail.com',
      href: 'mailto:zidanemuhammad112@gmail.com',
    },
    {
      label: 'LinkedIn 🔗',
      value: 'Muhammad Zidane',
      href: 'https://www.linkedin.com/in/muhammad-zidane-05a3b2293/',
    },
    {
      label: 'GitHub 🐙',
      value: 'whynote14',
      href: 'https://github.com/whynote14',
    },
    {
      label: 'Instagram 📸',
      value: '@qzdneal.14',
      href: 'https://www.instagram.com/qzdneal.14?igsh=MWM2NzZuejkzb285NQ%3D%3D&utm_source=qr',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="section-title">Let's <span className="text-accent">Connect</span> 👋</h2>
          <p className="contact-intro">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the platforms below!
          </p>
          
          <div className="contact-grid">
            {contactInfo.map((info, i) => (
              <motion.a 
                key={i} 
                href={info.href} 
                className="contact-item" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="contact-label">{info.label}</span>
                <span className="contact-value">{info.value}</span>
              </motion.a>
            ))}
          </div>

          <div className="contact-footer">
            <p>© 2026 Muhamad Zidane Al Huda. Crafted with passion & AI.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

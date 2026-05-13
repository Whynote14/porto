import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-desc">
          Saya selalu terbuka untuk mendiskusikan peluang kerja, proyek kolaborasi, atau sekadar berbagi pengetahuan seputar DevOps dan AI Automation.
        </p>
        
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p><a href="mailto:zidanemuhammad112@gmail.com">zidanemuhammad112@gmail.com</a></p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>Phone</h3>
            <p><a href="tel:087748395776">087748395776</a></p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Address</h3>
            <p>kp.bedahan, pabuaran mekar, cibinong, kabupaten bogor</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">📸</div>
            <h3>Instagram</h3>
            <p><a href="https://www.instagram.com/qzdneal.14?igsh=MWM2NzZuejkzb285NQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">@qzdneal.14</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

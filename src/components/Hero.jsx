import './Hero.css';
import profileImg from '../assets/foto2.jpeg';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <img src={profileImg} alt="Profile" className="hero-profile" />
        <h1 className="hero-name">Muhamad Zidane Al Huda</h1>
        <p className="hero-tagline">DevOps Engineer • AI Automation Specialist</p>
        <p className="hero-summary">Passionate about building scalable infrastructure and intelligent automation solutions.</p>
      </div>
    </section>
  );
}

export default Hero;

import './Skills.css';

function Skills() {
  const skills = {
    "DevOps & Infra": ["Docker", "Grafana", "Prometheus", "Linux", "Mikrotik", "Networking"],
    "Automation & AI": ["n8n (Workflow Automation)", "AI Agent Development", "Prompt Engineering", "API Integration"],
    "Cloud": ["Cloud Computing (AWS)", "VPS Management"],
    "Web & Programming": ["HTML", "CSS", "JavaScript", "Java", "REST API"],
    "Tools & Platform": ["Git", "Gmail API", "Google Workspace", "AI Image Generation"],
    "Soft Skills": ["Kepemimpinan", "Kolaborasi Tim", "Kreativitas", "Problem Solving", "Dokumentasi Terstruktur"]
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Technical Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className="skill-category">
              <h3>{category}</h3>
              <ul className="skill-list">
                {items.map((skill, idx) => (
                  <li key={idx} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

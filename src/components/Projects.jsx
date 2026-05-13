import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Sistem Laporan Bisnis Otomatis",
      type: "Proyek Pribadi — n8n Automation",
      description: [
        "Membangun pipeline otomatis pengiriman laporan bisnis bulanan via Gmail menggunakan n8n.",
        "Mendesain template HTML email minimalis dengan Google Fonts (Playfair Display + DM Sans) dan variabel dinamis IDR.",
        "Mengintegrasikan node Gmail, HTTP Request, dan data transform di n8n."
      ]
    },
    {
      title: "AI Chatbot Agent",
      type: "Proyek Pribadi — API & Prompt Engineering",
      description: [
        "Merancang alur logika chatbot, desain prompt, dan integrasi API eksternal.",
        "Mengembangkan sistem respons cerdas dengan pengelolaan konteks percakapan.",
        "Menggunakan teknik prompt engineering untuk meningkatkan akurasi output AI."
      ]
    },
    {
      title: "Monitoring Infrastructure",
      type: "Studi Independen — DevOps Engineer",
      description: [
        "Setup stack monitoring menggunakan Docker, Grafana, dan Prometheus.",
        "Konfigurasi dashboard real-time untuk visualisasi performa sistem.",
        "Implementasi containerisasi aplikasi dan manajemen jaringan."
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects & Technical Experience</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
                <ul className="project-desc">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

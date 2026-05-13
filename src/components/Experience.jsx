import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: "Magang — Data Management",
      company: "PT. Telekomunikasi Indonesia (Telkom)",
      period: "2019 – 2022"
    },
    {
      title: "PERCETAKAN BUKU — PRODUKSI",
      company: "PT. ARYA DUTA",
      period: "2019 – 2022"
    },
    {
      title: "DRIVER",
      company: "GOJEK",
      period: "2019 – 2022"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

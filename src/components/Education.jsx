import './Education.css';

function Education() {
  const education = [
    {
      degree: "S1 Teknik Informatika",
      school: "STT Terpadu Nurul Fikri, Depok",
      period: "2023 – Sekarang (Semester 6)",
      details: "Fokus: DevOps Engineering, AI Development, AI For Bisnis, Cloud Computing"
    },
    {
      degree: "SMK Teknik Jaringan",
      school: "SMK Mekanik Cibinong",
      period: "2019 – 2022",
      details: "Jurusan: Teknik Komputer & Jaringan"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        
        <div className="edu-list">
          {education.map((item, index) => (
            <div key={index} className="edu-card">
              <h4>{item.degree}</h4>
              <p className="edu-school">{item.school}</p>
              <p className="edu-period">{item.period}</p>
              <p className="edu-details">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      title: "Studi Independen Bersertifikat — DevOps Engineer",
      issuer: "PT. Nurul Fikri Cipta Inovasi",
      date: "2025",
      details: "Menyelesaikan program Studi Independen Bersertifikat (SIB) dalam bidang DevOps Engineering. Nomor sertifikat: 2117/S-SIB/NFA/XII/2025.",
      link: "https://drive.google.com/file/d/1sy7rNJbXDC0u1ojb4YEWwoNwjAQATlTm/view?usp=drive_link"
    },
    {
      title: "Sertifikat Kompetensi — Teknik Komputer & Jaringan",
      issuer: "PT. Argatama Multi Agung",
      date: "2022",
      details: "Uji kompetensi perkabelan, konfigurasi Mikrotik, dan sharing file/printer. No: 156/13.179/kep-MC/VI/2022.",
      link: "https://drive.google.com/file/d/13L93E38PCI-T43IDE_WrU4iBqIzAmYTh/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2>Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-badge">📜</div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
                <p className="cert-details">{cert.details}</p>
                <a href={cert.link} className="cert-btn" target="_blank" rel="noopener noreferrer">
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

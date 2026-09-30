const experiences = [
  {
    period: 'Apr 2026 — May 2026',
    company: 'International Group of Aamina',
    location: 'Kuwait',
    role: 'Data Science Analyst Intern',
    bullets: [
      'Built an 11-page Restaurant BI dashboard (KWD 368K revenue, 11K orders) featuring DAX-driven KPIs, drill-through navigation, and a 3-phase strategic business roadmap.',
      'Developed an ECF Payment Analytics platform tracking $724K claims across 50 employees and 7 regions with custom tooltips and drill-through report pages.'
    ]
  },
  {
    period: 'May 2022 — Aug 2022',
    company: 'Dexpro Innovations',
    location: 'Trivandrum, India',
    role: 'Data Science Intern',
    bullets: [
      'Engineered a Network Intrusion Detection System using Stacked Sparse Autoencoders (4-layer: 64→32→16→8) combined with LightGBM/XGBoost on the NSL-KDD dataset.',
      'Designed a custom KL-divergence + MSE composite loss; ran 16 experiments across binary, 5-class, and 13-class attack classification tasks.'
    ]
  },
  {
    period: 'Nov 2021 — Feb 2022',
    company: 'AiVariant',
    location: 'Bangalore, India',
    role: 'Data Science Intern',
    bullets: [
      'Scraped 750+ GoodReads books via BeautifulSoup; built a content-based recommendation engine using TF-IDF vectorization and cosine similarity, deployed live on Streamlit.'
    ]
  },
  {
    period: 'Apr 2021 — Oct 2021',
    company: 'Innodatatics',
    location: 'Bangalore, India',
    role: 'Data Science Intern',
    bullets: [
      'Created a DAT-SCI Q&A Chatbot with 6 domain-specific Word2Vec models and cosine similarity retrieval, deployed as an interactive Streamlit app.',
      'Architected an abusive email detection system: DistilBERT fine-tuned on 48K+ emails combined with Random Forest + TF-IDF features, deployed end-to-end in production.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-eyebrow reveal" style={{ textAlign: 'center' }}>Career</div>
      <div className="exp-heading reveal" style={{ textAlign: 'center' }}>
        My <span className="contact-accent">Experience</span>
      </div>
      <div className="timeline-container reveal">
        <div className="timeline-line"></div>
        {experiences.map((exp, idx) => {
          const side = idx % 2 === 0 ? 'left' : 'right';
          return (
            <div className={`timeline-item ${side}`} key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-meta">
                  {exp.company} &bull; {exp.period} &bull; {exp.location}
                </div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

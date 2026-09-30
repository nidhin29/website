// Icons definitions
const pythonIcon = (
  <svg viewBox="0 0 110 110" style={{ display: 'block' }}>
    <path fill="#3776AB" d="M55 2C25.7 2 27.6 14.6 27.6 14.6h12.3s-1.1 9.7 10.7 9.7h25.4s9.8-.3 9.8-9.8S73.5 2 55 2zm-7.6 5.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4z"/>
    <path fill="#FFE873" d="M55 108c29.3 0 27.4-12.6 27.4-12.6H70.1s1.1-9.7-10.7-9.7H34s-9.8.3-9.8 9.8 12.3 12.5 30.8 12.5zm7.6-5.8a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0-6.4z"/>
    <path fill="#3776AB" d="M39.9 29.2v25.2c0 10.8 9.7 10.5 9.7 10.5h11.9v-7s-10.9.1-10.9-9.5V29.2H39.9z"/>
    <path fill="#FFE873" d="M70.1 80.8V55.6c0-10.8-9.7-10.5-9.7-10.5H48.5v7s10.9-.1 10.9 9.5v19.2h10.7z"/>
  </svg>
);

const sqlIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
  </svg>
);

const scikitIcon = (
  <svg viewBox="0 0 24 24" style={{ display: 'block' }}>
    <circle cx="8" cy="8" r="6" fill="#F19C38" />
    <circle cx="16" cy="16" r="6" fill="#3498DB" />
    <path d="M8 8l8 8" stroke="#fff" strokeWidth="2.5" />
  </svg>
);

const tfIcon = (
  <svg viewBox="0 0 24 24" style={{ display: 'block' }}>
    <path fill="#FF6F00" d="M12 2L2 7l10 5 10-5-10-5zm0 10l10-5v10l-10 5V12z" />
    <path fill="#FFA000" d="M2 7v10l10 5V12L2 7z" />
  </svg>
);

const kerasIcon = (
  <svg viewBox="0 0 24 24" style={{ display: 'block' }}>
    <circle cx="12" cy="12" r="10" fill="#D00000" />
    <text x="12" y="16" fill="#FFF" fontFamily="sans-serif" fontWeight="bold" fontSize="13" textAnchor="middle">K</text>
  </svg>
);

const xgboostIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M12 2v20M12 7l-5 5M12 12l6-6M12 17l-7 3" />
    <circle cx="12" cy="2" r="1.5" fill="#2ECC71" />
    <circle cx="7" cy="12" r="1.5" fill="#2ECC71" />
    <circle cx="18" cy="6" r="1.5" fill="#2ECC71" />
    <circle cx="5" cy="20" r="1.5" fill="#2ECC71" />
  </svg>
);

const lgbmIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M5 19h14M8 19V11M12 19V7M16 19V3" />
    <line x1="8" y1="11" x2="16" y2="3" stroke="#FFF" strokeWidth="1.5" />
  </svg>
);

const huggingFaceIcon = (
  <svg viewBox="0 0 24 24" style={{ display: 'block' }}>
    <circle cx="12" cy="12" r="10" fill="#FFCC00" />
    <ellipse cx="9" cy="10" rx="1.5" ry="2" fill="#333" />
    <ellipse cx="15" cy="10" rx="1.5" ry="2" fill="#333" />
    <path d="M7 15c1 2.5 4 4 5 4s4-1.5 5-4" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const bertIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="9" y1="9" x2="15" y2="9" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>
);

const w2vIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M3 12h18M18 9l3 3-3 3M6 9l-3 3 3 3" />
    <circle cx="12" cy="12" r="2" fill="#38BDF8" />
  </svg>
);

const tfidfIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="8" y1="3" x2="8" y2="21" strokeWidth="0.5" />
    <line x1="16" y1="3" x2="16" y2="21" strokeWidth="0.5" strokeDasharray="2" />
    <circle cx="12" cy="12" r="2" fill="#A78BFA" />
  </svg>
);

const nltkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M12 3v18M12 9l-6 6M12 14l6 6M12 7l7-3" />
    <circle cx="12" cy="3" r="1.5" fill="#818CF8" />
    <circle cx="6" cy="15" r="1.5" fill="#818CF8" />
    <circle cx="18" cy="20" r="1.5" fill="#818CF8" />
  </svg>
);

const textBlobIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const shapIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FB7185" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3.5" fill="#FB7185" />
  </svg>
);

const optunaIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 12L16 8" />
    <circle cx="12" cy="12" r="1.5" fill="#FBBF24" />
  </svg>
);

const gridIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <circle cx="15" cy="9" r="2" fill="#38BDF8" />
  </svg>
);

const smoteIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <circle cx="6" cy="18" r="2" fill="#34D399" />
    <circle cx="18" cy="6" r="2" fill="#34D399" />
    <line x1="8" y1="16" x2="16" y2="8" strokeDasharray="3" />
    <circle cx="12" cy="12" r="2" fill="#FFF" />
  </svg>
);

const tomekIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <circle cx="5" cy="17" r="1.5" fill="#2DD4BF" />
    <circle cx="19" cy="7" r="1.5" fill="#2DD4BF" />
    <circle cx="12" cy="12" r="2" fill="#F43F5E" />
    <path d="M7 15l10-6" strokeWidth="0.8" />
  </svg>
);

const powerBiIcon = (
  <svg viewBox="0 0 24 24" style={{ display: 'block' }}>
    <rect x="3" y="12" width="4" height="10" fill="#E6A100" rx="1" />
    <rect x="10" y="7" width="4" height="15" fill="#F2C811" rx="1" />
    <rect x="17" y="2" width="4" height="20" fill="#FFE200" rx="1" />
  </svg>
);

const daxIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M4 6h16M4 12h10M4 18h16" />
    <path d="M17 12l2 2 4-4" />
  </svg>
);

const pqIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
  </svg>
);

const starSchemaIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FB7185" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <circle cx="12" cy="12" r="3" fill="#FB7185" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </svg>
);

const streamlitIcon = (
  <svg viewBox="0 0 24 24" style={{ display: 'block' }}>
    <polygon points="12,2 23,20 1,20" fill="#FF4B4B" />
    <circle cx="12" cy="11" r="3.5" fill="#FFF" />
  </svg>
);

const pandasIcon = (
  <svg viewBox="0 0 24 24" style={{ display: 'block' }}>
    <circle cx="12" cy="12" r="9" fill="#FFF" stroke="#130754" strokeWidth="2" />
    <circle cx="5" cy="6" r="3.5" fill="#130754" />
    <circle cx="19" cy="6" r="3.5" fill="#130754" />
    <circle cx="8.5" cy="10.5" r="1.5" fill="#130754" />
    <circle cx="15.5" cy="10.5" r="1.5" fill="#130754" />
    <circle cx="8.5" cy="10.5" r="0.5" fill="#FFF" />
    <circle cx="15.5" cy="10.5" r="0.5" fill="#FFF" />
    <polygon points="12,13 10.5,15 13.5,15" fill="#130754" />
  </svg>
);

const numpyIcon = (
  <svg viewBox="0 0 24 24" style={{ display: 'block' }}>
    <rect x="2" y="2" width="9" height="9" fill="#013243" stroke="#4B77BE" strokeWidth="1" />
    <rect x="13" y="2" width="9" height="9" fill="#4B77BE" />
    <rect x="2" y="13" width="9" height="9" fill="#4B77BE" />
    <rect x="13" y="13" width="9" height="9" fill="#013243" stroke="#4B77BE" strokeWidth="1" />
  </svg>
);

const soupIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M12 22a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7z" />
    <path d="M12 2v13M8 6h8" />
  </svg>
);

const joblibIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 6V9M12 15V18M6 12H9M15 12h3" />
  </svg>
);

const categories = [
  {
    title: 'Languages',
    tools: [
      { name: 'Python', icon: pythonIcon },
      { name: 'SQL', icon: sqlIcon }
    ]
  },
  {
    title: 'ML & Deep Learning',
    tools: [
      { name: 'Scikit-learn', icon: scikitIcon },
      { name: 'TensorFlow', icon: tfIcon },
      { name: 'Keras', icon: kerasIcon },
      { name: 'XGBoost', icon: xgboostIcon },
      { name: 'LightGBM', icon: lgbmIcon }
    ]
  },
  {
    title: 'NLP',
    tools: [
      { name: 'Hugging Face', icon: huggingFaceIcon },
      { name: 'DistilBERT', icon: bertIcon },
      { name: 'Word2Vec', icon: w2vIcon },
      { name: 'TF-IDF', icon: tfidfIcon },
      { name: 'NLTK', icon: nltkIcon },
      { name: 'TextBlob', icon: textBlobIcon }
    ]
  },
  {
    title: 'Explainability & Optimization',
    tools: [
      { name: 'SHAP', icon: shapIcon },
      { name: 'Optuna', icon: optunaIcon },
      { name: 'GridSearchCV', icon: gridIcon },
      { name: 'SMOTE', icon: smoteIcon },
      { name: 'SMOTETomek', icon: tomekIcon }
    ]
  },
  {
    title: 'Business Intelligence',
    tools: [
      { name: 'Power BI', icon: powerBiIcon },
      { name: 'DAX', icon: daxIcon },
      { name: 'Power Query', icon: pqIcon },
      { name: 'Star Schema', icon: starSchemaIcon }
    ]
  },
  {
    title: 'Deployment & Data',
    tools: [
      { name: 'Streamlit', icon: streamlitIcon },
      { name: 'Pandas', icon: pandasIcon },
      { name: 'NumPy', icon: numpyIcon },
      { name: 'BeautifulSoup', icon: soupIcon },
      { name: 'Joblib', icon: joblibIcon }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-eyebrow reveal" style={{ textAlign: 'center' }}>Technical toolkit</div>
      <div className="skills-heading reveal" style={{ textAlign: 'center' }}>
        Tools & <span className="contact-accent">Technologies</span>
      </div>
      <div className="skills-categories-grid">
        {categories.map((cat, idx) => (
          <div className="skill-cat-card reveal" key={idx}>
            <div className="skill-cat-title">{cat.title}</div>
            <div className="tools-subgrid">
              {cat.tools.map((tool, tIdx) => (
                <div className="tool-card-mini" key={tIdx}>
                  <div className="tool-icon-mini">{tool.icon}</div>
                  <div className="tool-name-mini">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

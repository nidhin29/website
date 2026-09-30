import ProjectCanvas from './ProjectCanvas';

const projects = [
  {
    type: 'churn',
    image: '/assets/churn_prediction.png',
    codeUrl: 'https://github.com/nithu24/Customer-Churn-Prediction-Model-',
    demoUrl: 'https://github.com/nithu24/Customer-Churn-Prediction-Model-',
    visualClass: 'pv-ml',
    category: 'Machine Learning · Deployment',
    title: 'Telecom Customer Churn Prediction',
    desc: 'End-to-end XGBoost pipeline on 7,043 telecom customers. SMOTETomek for class imbalance, SHAP for explainability. Real-time risk segmentation via Streamlit — 85% recall achieved.',
    tags: ['XGBoost', 'SHAP', 'SMOTETomek', 'Streamlit']
  },
  {
    type: 'bi',
    image: '/assets/global_sales.png',
    codeUrl: 'https://github.com/nithu24/Global-Electronics-Sales-Dashboard-',
    demoUrl: 'https://github.com/nithu24/Global-Electronics-Sales-Dashboard-',
    visualClass: 'pv-bi',
    category: 'Business Intelligence · Power BI',
    title: 'Global Electronics Sales Dashboard',
    desc: '8-page Power BI report across 8 countries with 20+ DAX measures, star schema modeling, cohort analysis, AI-driven forecasting, and executive-level storytelling.',
    tags: ['Power BI', 'DAX', 'Power Query', 'Star Schema']
  },
  {
    type: 'nids',
    image: '/assets/network_security.png',
    codeUrl: 'https://github.com/nithu24/Network-Intrusion-Detection-System-using-Stacked-Sparse-Autoencoders',
    demoUrl: 'https://github.com/nithu24/Network-Intrusion-Detection-System-using-Stacked-Sparse-Autoencoders',
    visualClass: 'pv-sec',
    category: 'Deep Learning · Cybersecurity',
    title: 'Network Intrusion Detection System',
    desc: 'Stacked Sparse Autoencoder (64→32→16→8) with custom KL-divergence + MSE loss on NSL-KDD. 16 experiments spanning binary and multi-class attack classification.',
    tags: ['TensorFlow', 'LightGBM', 'Autoencoders', 'NSL-KDD']
  },
  {
    type: 'nlp',
    image: '/assets/email_classification.png',
    codeUrl: 'https://github.com/nithu24/Abusive-Email-Classification',
    demoUrl: 'https://github.com/nithu24/Abusive-Email-Classification',
    visualClass: 'pv-nlp',
    category: 'NLP · Fine-tuning · Deployment',
    title: 'Abusive Email Detection System',
    desc: 'DistilBERT fine-tuned and Random Forest with TF-IDF on 48K+ emails. End-to-end pipeline for automated abusive content detection, deployed as a production system.',
    tags: ['DistilBERT', 'Hugging Face', 'TF-IDF', 'Random Forest']
  },
  {
    type: 'rec',
    image: '/assets/book_recommendation.png',
    codeUrl: 'https://github.com/nithu24/Book-Recommendation-System-',
    demoUrl: 'https://github.com/nithu24/Book-Recommendation-System-',
    visualClass: 'pv-rec',
    category: 'NLP · Web Scraping · Recommendation',
    title: 'Book Recommendation System',
    desc: 'Scraped 750+ GoodReads books with BeautifulSoup. TF-IDF + cosine similarity content-based engine, deployed as an interactive Streamlit app for real-time recommendations.',
    tags: ['BeautifulSoup', 'TF-IDF', 'Cosine Sim', 'Streamlit']
  },
  {
    type: 'chat',
    image: '/assets/interview_chatbot.png',
    codeUrl: 'https://github.com/nithu24/Chatbot-for-Data-Science-Interview-Questions-',
    demoUrl: 'https://github.com/nithu24/Chatbot-for-Data-Science-Interview-Questions-',
    visualClass: 'pv-chat',
    category: 'NLP · Chatbot · Deployment',
    title: 'DAT-SCI Q&A Chatbot',
    desc: '6 domain-specific Word2Vec models trained on data science corpora. Cosine similarity retrieval engine for contextual Q&A, deployed as an interactive Streamlit application.',
    tags: ['Word2Vec', 'Gensim', 'Cosine Sim', 'Streamlit']
  },
  {
    type: 'bi',
    image: '/assets/restaurant_bi.png',
    codeUrl: 'https://github.com/nithu24',
    demoUrl: 'https://github.com/nithu24',
    visualClass: 'pv-bi',
    category: 'Business Intelligence · Power BI',
    title: 'Restaurant Business Intelligence Dashboard',
    desc: 'Built an 11-page Power BI dashboard analyzing KWD 368K revenue, 11K orders, and 7K customers. Included demand heatmaps, customer segmentation, food waste analysis, menu performance tracking, and executive recommendations.',
    tags: ['Power BI', 'DAX', 'SQL', 'F&B Analytics']
  },
  {
    type: 'bi',
    image: '/assets/ecf_payment.png',
    codeUrl: 'https://github.com/nithu24',
    demoUrl: 'https://github.com/nithu24',
    visualClass: 'pv-bi',
    category: 'Finance Analytics · Power BI',
    title: 'ECF Payment Analytics Dashboard',
    desc: 'Developed a 10-page enterprise dashboard tracking 345 claims worth $724K across 50 employees and 7 countries. Included drill-through reporting, AI insights, decomposition trees, and operational intelligence analytics.',
    tags: ['Power BI', 'DAX', 'Finance', 'Analytics']
  },
  {
    type: 'bi',
    image: '/assets/supply_chain.png',
    codeUrl: 'https://github.com/nithu24/DataCo-SupplyChain-PowerBI',
    demoUrl: 'https://github.com/nithu24/DataCo-SupplyChain-PowerBI',
    visualClass: 'pv-bi',
    category: 'Business Intelligence · Supply Chain Analytics',
    title: 'Supply Chain Performance Dashboard',
    desc: 'Built an 8-page Power BI dashboard analyzing 180K+ transactions, 21K customers, and 118 products across 5 global markets. Included logistics performance, ABC classification, discount impact analysis, shipping efficiency simulations, and executive recommendations.',
    tags: ['Power BI', 'DAX', 'Supply Chain', 'What-If Analysis']
  }
];

const demoIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px' }}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const codeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px' }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-eyebrow reveal" style={{ textAlign: 'center' }}>Work</div>
      <div className="projects-heading reveal" style={{ textAlign: 'center' }}>
        My <span className="contact-accent">Projects</span>
      </div>
      <p className="projects-sub reveal" style={{ textAlign: 'center' }}>Click any link to view details.</p>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card reveal" key={idx}>
            <div className={`proj-visual ${proj.visualClass}`}>
              <img src={proj.image} alt={proj.title} className="proj-image" />
            </div>
            <div className="proj-body">
              <div className="proj-type">{proj.category}</div>
              <div className="proj-title">{proj.title}</div>
              <div className="proj-desc">{proj.desc}</div>
              <div className="proj-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '8px' }}>
                {proj.tags.map((tag, tIdx) => (
                  <span className="ptag" key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="proj-links" style={{ display: 'flex', gap: '16px', borderTop: '0.5px solid var(--border)', paddingTop: '12px', marginTop: 'auto' }}>
                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link"
                  style={{ textDecoration: 'none' }}
                >
                  {demoIcon}
                  <span style={{ marginLeft: '4px' }}>Live Demo</span>
                </a>
                <a
                  href={proj.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link"
                  style={{ textDecoration: 'none' }}
                >
                  {codeIcon}
                  <span style={{ marginLeft: '4px' }}>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

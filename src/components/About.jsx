export default function About() {
  return (
    <section id="about">
      <div className="about-grid reveal">
        <div>
          <div className="section-eyebrow">Who I am</div>
          <div className="about-heading">Building ML systems that solve real problems</div>
          <p className="about-body">
            I'm a Data Scientist with experience across the full pipeline — data ingestion, feature engineering, model training, explainability, and production deployment. I've worked in startup and corporate environments across India and Kuwait.
          </p>
          <p className="about-body">
            My work spans NLP (DistilBERT, Word2Vec), deep learning (autoencoders, TensorFlow), classical ML (XGBoost, LightGBM), and business intelligence (Power BI, DAX). I care deeply about model transparency — SHAP-driven explainability is always in the stack.
          </p>
        </div>
        <div className="about-right">
          <div className="fact-grid">
            <div className="fact-card f-blue">
              <span className="fact-icon">🚀</span>
              <div className="fact-value">8+</div>
              <div className="fact-label">Projects Delivered</div>
            </div>
            <div className="fact-card f-green">
              <span className="fact-icon">🗄️</span>
              <div className="fact-value">48K+</div>
              <div className="fact-label">Records Processed</div>
            </div>
            <div className="fact-card f-amber">
              <span className="fact-icon">📈</span>
              <div className="fact-value">$724K</div>
              <div className="fact-label">Claims Value</div>
            </div>
            <div className="fact-card f-pink">
              <span className="fact-icon">🎯</span>
              <div className="fact-value">85%</div>
              <div className="fact-label">Model Recall</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

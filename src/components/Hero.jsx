export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-lines"></div>
      <div className="hero-container">
        <div className="hero-inner">
          <h1>
            I'm <span className="contact-accent">Nithu</span>
          </h1>
          <h2 className="hero-subtitle">
            Data Scientist <span className="contact-accent">& Analyst.</span>
          </h2>
          <p className="hero-desc">
            I build end-to-end machine learning systems — from wrangling messy data to deploying models that make decisions at scale. Python, NLP, deep learning, and Power BI are my tools. Outcomes are my metric.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-glow">View Projects ↓</a>
            <a href="#experience" className="btn-glow">My Experience</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src="src/assets/hero.png" alt="Nithu" className="hero-img" />
            <div className="hero-image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

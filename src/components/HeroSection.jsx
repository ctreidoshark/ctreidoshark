import { useState } from "react";

export default function HeroSection({ store, spotlight, metrics }) {
  const [heroImageVisible, setHeroImageVisible] = useState(Boolean(spotlight.image));

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{store.heroEyebrow}</p>
        <h1>{store.heroTitle}</h1>
        <p className="hero-text">{store.heroText}</p>
        <div className="hero-actions">
          <a className="primary-link" href="#destaques">
            Ver produtos
          </a>
          <a className="secondary-link" href="#contato">
            Falar sobre pedidos
          </a>
        </div>
        <ul className="hero-metrics" aria-label="Destaques da marca">
          {metrics.map((metric) => (
            <li key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-card">
        <div className={`hero-visual ${spotlight.visualClass} ${heroImageVisible ? "has-image" : ""}`}>
          {spotlight.image && heroImageVisible ? (
            <img
              src={spotlight.image}
              alt={spotlight.name}
              className="hero-piece-image"
              onError={() => setHeroImageVisible(false)}
            />
          ) : null}
          <div className="hero-visual-label">Referencia da peca</div>
        </div>
        <div className="product-spotlight">
          <span className="badge">{spotlight.badge}</span>
          <h2>{spotlight.name}</h2>
          <p>{spotlight.description}</p>
          <div className="spotlight-price">
            <strong>{spotlight.price}</strong>
            <span>{spotlight.installment}</span>
          </div>
        </div>
        <div className="hero-gradient"></div>
      </div>
    </section>
  );
}

export default function BenefitsSection({ benefits }) {
  return (
    <section className="benefits-section" id="beneficios">
      <div className="section-heading benefits-heading">
        <div>
          <p className="eyebrow">Por que funciona</p>
          <h2>Estrutura pensada para vender roupa esportiva</h2>
        </div>
        <p className="benefits-intro">
          Cada bloco foi desenhado para organizar a vitrine, valorizar as fotos e reduzir o atrito
          de compra.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <article key={benefit.title}>
            <span className="benefit-index">0{index + 1}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

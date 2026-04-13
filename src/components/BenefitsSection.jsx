export default function BenefitsSection({ benefits }) {
  return (
    <section className="benefits-section" id="beneficios">
      <div className="benefits-heading">
        <h2>Estrutura pensada para vender roupa esportiva</h2>
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

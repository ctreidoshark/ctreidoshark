export default function BenefitsSection({ benefits }) {
  return (
    <section className="benefits-section" id="beneficios">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Por que funciona</p>
          <h2>Estrutura pensada para vender roupa esportiva</h2>
        </div>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <article key={benefit.title}>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

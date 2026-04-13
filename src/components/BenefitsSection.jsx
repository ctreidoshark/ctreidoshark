export default function BenefitsSection({ benefits }) {
  return (
    <section className="benefits-section" id="beneficios">

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

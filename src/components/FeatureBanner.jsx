export default function FeatureBanner() {
  return (
    <section className="feature-banner">
      <div className="feature-copy">
        <p className="eyebrow">Lancamento</p>
        <h2>Monte drops pequenos e crie desejo real pela marca.</h2>
        <p className="feature-lead">
          Uma pagina pensada para destacar colecoes, criar urgencia e empurrar a conversa para o
          WhatsApp.
        </p>
      </div>
      <div className="feature-stats" aria-label="Pontos fortes do layout">
        <article>
          <strong>01</strong>
          <span>Hero forte com produto em destaque</span>
        </article>
        <article>
          <strong>02</strong>
          <span>Filtros simples para acelerar a decisao</span>
        </article>
        <article>
          <strong>03</strong>
          <span>Contato rapido para fechar pedido</span>
        </article>
      </div>
    </section>
  );
}

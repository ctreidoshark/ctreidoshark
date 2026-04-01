export default function Footer({ store, contactItems }) {
  return (
    <footer className="footer" id="contato">
      <div>
        <p className="eyebrow">Contato</p>
        <h2>{store.footerTitle}</h2>
      </div>

      <div className="footer-grid">
        {contactItems.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            {item.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>
        ))}
      </div>
    </footer>
  );
}

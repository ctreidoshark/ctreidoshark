export default function CategoryStrip({ categories }) {
  return (
    <section className="category-strip" id="colecao" aria-label="Categorias">
      {categories.map((category) => (
        <article key={category.label}>
          <span>{category.label}</span>
          <strong>{category.value}</strong>
        </article>
      ))}
    </section>
  );
}

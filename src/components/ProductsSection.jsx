import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/currency";

export default function ProductsSection({
  products,
  totalProducts,
  filters,
  filterOptions,
  onAddToCart,
  onFilterChange,
  onClearFilters,
}) {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [imageVisibility, setImageVisibility] = useState({});

  useEffect(() => {
    setSelectedSizes((current) => {
      const next = {};

      products.forEach((product) => {
        next[product.id] = current[product.id] && product.sizes.includes(current[product.id])
          ? current[product.id]
          : product.sizes[0];
      });

      return next;
    });
  }, [products]);

  useEffect(() => {
    setImageVisibility((current) => {
      const next = {};

      products.forEach((product) => {
        next[product.id] = product.image ? current[product.id] ?? true : false;
      });

      return next;
    });
  }, [products]);

  function handleSizeChange(productId, size) {
    setSelectedSizes((current) => ({
      ...current,
      [productId]: size,
    }));
  }

  return (
    <section className="products-section" id="destaques">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Mais vendidos</p>
          <h2>Pecas que puxam sua vitrine para cima</h2>
        </div>
        <a href="#contato">Montar colecao completa</a>
      </div>

      <div className="filters-panel" aria-label="Filtros da loja">
        <div className="filters-grid">
          <label className="filter-field">
            <span>Categoria</span>
            <select value={filters.category} onChange={(event) => onFilterChange("category", event.target.value)}>
              {filterOptions.categories.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-field">
            <span>Genero</span>
            <select value={filters.gender} onChange={(event) => onFilterChange("gender", event.target.value)}>
              {filterOptions.genders.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-field">
            <span>Tamanho</span>
            <select value={filters.size} onChange={(event) => onFilterChange("size", event.target.value)}>
              {filterOptions.sizes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="filters-summary">
          <p>
            Mostrando <strong>{products.length}</strong> de <strong>{totalProducts}</strong> pecas
          </p>
          <button type="button" className="filter-reset" onClick={onClearFilters}>
            Limpar filtros
          </button>
        </div>
      </div>

      {products.length ? (
        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className={`product-visual ${product.visualClass} ${imageVisibility[product.id] ? "has-image" : ""}`}>
                {product.image && imageVisibility[product.id] ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-piece-image"
                    onError={() =>
                      setImageVisibility((current) => ({
                        ...current,
                        [product.id]: false,
                      }))
                    }
                  />
                ) : null}
                {product.image && imageVisibility[product.id] ? (
                  <span className="product-visual-label">Foto de exemplo da colecao</span>
                ) : product.visualClass === "reference-piece" ? (
                  <span className="product-visual-label">Peca enviada como referencia</span>
                ) : null}
              </div>
              <div className="product-info">
                <span className="product-tag">{product.tag}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <div className="product-attributes">
                  <span>{product.gender}</span>
                  <span>{product.category}</span>
                </div>

                <div className="size-field">
                  <span>Tamanho</span>
                </div>

                <div className="size-chips" aria-label={`Tamanhos disponiveis para ${product.name}`}>
                  {product.sizes.map((size) => (
                    <button
                      type="button"
                      key={size}
                      className={selectedSizes[product.id] === size ? "size-chip active" : "size-chip"}
                      onClick={() => handleSizeChange(product.id, size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <div className="product-meta">
                  <strong>{formatCurrency(product.price)}</strong>
                  <button type="button" onClick={() => onAddToCart(product, selectedSizes[product.id] ?? product.sizes[0])}>
                    Adicionar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-products">
          <h3>Nenhuma peca encontrada</h3>
          <p>Tente trocar genero, categoria ou tamanho para abrir mais opcoes da colecao.</p>
          <button type="button" className="secondary-link" onClick={onClearFilters}>
            Ver todas as pecas
          </button>
        </div>
      )}
    </section>
  );
}

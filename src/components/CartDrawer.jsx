import { formatCurrency } from "../utils/currency";

export default function CartDrawer({
  cartItems,
  cartOpen,
  checkoutLink,
  total,
  onCloseCart,
  onRemoveFromCart,
}) {
  return (
    <aside className={`cart-drawer ${cartOpen ? "open" : ""}`} id="cartDrawer" aria-hidden={!cartOpen}>
      <div className="cart-header">
        <h2>Seu carrinho</h2>
        <button type="button" id="closeCart" aria-label="Fechar carrinho" onClick={onCloseCart}>
          Fechar
        </button>
      </div>

      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => (
            <article className="cart-item" key={item.cartId}>
              <div>
                <strong>{item.name}</strong>
                {item.selectedSize ? <span className="cart-item-size">Tamanho {item.selectedSize}</span> : null}
                <p>{formatCurrency(item.price)}</p>
              </div>
              <button type="button" onClick={() => onRemoveFromCart(item.cartId)}>
                Remover
              </button>
            </article>
          ))
        ) : (
          <p className="empty-state">Nenhum item ainda. Escolha uma peca para comecar.</p>
        )}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span>Total</span>
          <strong>{formatCurrency(total)}</strong>
        </div>
        <a className="primary-link full-width" href={checkoutLink} target="_blank" rel="noreferrer">
          Finalizar no WhatsApp
        </a>
      </div>
    </aside>
  );
}

import { useState } from "react";

export default function Header({
  brand,
  navigationLinks,
  cartCount,
  cartOpen,
  whatsappLink,
  onOpenCart,
}) {
  const [logoVisible, setLogoVisible] = useState(Boolean(brand.logo));

  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label={brand.shortName}>
        <span className="brand-mark">
          {brand.logo && logoVisible ? (
            <img
              src={brand.logo}
              alt={`Logo ${brand.name}`}
              className="brand-logo"
              onError={() => setLogoVisible(false)}
            />
          ) : (
            brand.initials
          )}
        </span>
        <span className="brand-copy">
          <strong>{brand.name}</strong>
          <small>{brand.tagline}</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="Navegacao principal">
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="whatsapp-link" href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <button
          className="cart-button"
          type="button"
          aria-expanded={cartOpen}
          aria-controls="cartDrawer"
          onClick={onOpenCart}
        >
          Carrinho
          <span>{cartCount}</span>
        </button>
      </div>
    </header>
  );
}

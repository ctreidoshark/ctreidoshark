import { useState } from "react";

export default function Header({ brand, navigationLinks }) {
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
    </header>
  );
}

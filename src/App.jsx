import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryStrip from "./components/CategoryStrip";
import ProductsSection from "./components/ProductsSection";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";
import { loadStoreContent, subscribeToStoreContent } from "./utils/storeContentState";

export default function App() {
  const [content, setContent] = useState(() => loadStoreContent());
  const [filters, setFilters] = useState({
    category: "todos",
    gender: "todos",
    size: "todos",
  });

  useEffect(() => {
    const syncContent = () => {
      setContent(loadStoreContent());
    };

    return subscribeToStoreContent(syncContent);
  }, []);

  const { benefits, categories, contactItems, heroMetrics, heroSpotlight, navigationLinks, products, store } =
    content;

  const catalogProducts = useMemo(
    () => products.filter((product) => Boolean(product.image)),
    [products]
  );

  const filterOptions = useMemo(
    () => ({
      categories: [
        { value: "todos", label: "Todas as pecas" },
        ...Array.from(new Set(catalogProducts.map((product) => product.category))).map((value) => ({
          value,
          label: value.charAt(0).toUpperCase() + value.slice(1),
        })),
      ],
      genders: [
        { value: "todos", label: "Todos os generos" },
        { value: "masculino", label: "Masculino" },
        { value: "feminino", label: "Feminino" },
        { value: "unissex", label: "Unissex" },
      ],
      sizes: [
        { value: "todos", label: "Todos os tamanhos" },
        ...Array.from(new Set(catalogProducts.flatMap((product) => product.sizes))).map((value) => ({
          value,
          label: value,
        })),
      ],
    }),
    [catalogProducts]
  );

  const filteredProducts = useMemo(
    () =>
      catalogProducts.filter((product) => {
        const matchesCategory =
          filters.category === "todos" || product.category === filters.category;
        const matchesGender = filters.gender === "todos" || product.gender === filters.gender;
        const matchesSize = filters.size === "todos" || product.sizes.includes(filters.size);

        return matchesCategory && matchesGender && matchesSize;
      }),
    [catalogProducts, filters]
  );

  function updateFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function clearFilters() {
    setFilters({
      category: "todos",
      gender: "todos",
      size: "todos",
    });
  }

  return (
    <>
      <div className="site-shell">
        <Header brand={store} navigationLinks={navigationLinks} />

        <main id="inicio">
          <HeroSection store={store} spotlight={heroSpotlight} metrics={heroMetrics} />
          <CategoryStrip categories={categories} />
          <ProductsSection
            products={filteredProducts}
            totalProducts={catalogProducts.length}
            filters={filters}
            filterOptions={filterOptions}
            whatsappNumber={store.whatsappNumber}
            onFilterChange={updateFilter}
            onClearFilters={clearFilters}
          />
          <BenefitsSection benefits={benefits} />
        </main>

        <Footer store={store} contactItems={contactItems} />
      </div>
    </>
  );
}

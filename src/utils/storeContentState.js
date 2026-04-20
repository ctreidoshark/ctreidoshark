import { defaultStoreContent } from "../data/storeContent";
import { stripBasePath, withBasePath } from "./assets";

const STORAGE_KEY = "reidoshark-store-content";
const ADMIN_SESSION_KEY = "reidoshark-admin-auth";
const STORE_CONTENT_EVENT = "store-content-updated";
const LEGACY_HERO_IMAGE = "/products/camisa-manga-feminino.png";
const HERO_IMAGE = "/products/camisa-shark-gold.png";
const PRODUCT_IMAGE_MIGRATIONS = {
  "shark-gold-uv": {
    oldImage: "/products/camisa-manga-feminino.png",
    newImage: "/products/camisa-shark-gold.png",
  },
  "brisa-match": {
    oldImage: "/products/regata-feminina.png",
    newImage: "/products/feminino-padraoazulerosa.jpeg",
  },
  "top-areia-elite": {
    oldImage: "/products/regata-feminina.png",
    newImage: "/products/feminino-padraorosa.png",
  },
  "court-black": {
    oldImage: "/products/short-masculino.png",
    newImage: "/products/masculino-padraopreto.jpeg",
  },
  ventania: {
    oldImage: "/products/camisa-regata-masculino.png",
    newImage: "/products/masculino-padraodourado.jpeg",
  },
  "camisa-sand-rush": {
    oldImage: "/products/camisa-manga-masculina.png",
    newImage: "/products/masculino-padraodourado.jpeg",
  },
  "regata-storm-net": {
    oldImage: "/products/camisa-regata-masculino.png",
    newImage: "/products/masculino-padraopreto.jpeg",
  },
  "manga-uv-raid": {
    oldImage: "/products/camisa-manga-masculina.png",
    newImage: "/products/masculino-padraodourado.jpeg",
  },
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function applyDefaultImageMigrations(content) {
  const nextContent = clone(content ?? {});

  if (stripBasePath(nextContent.heroSpotlight?.image) === LEGACY_HERO_IMAGE) {
    nextContent.heroSpotlight.image = withBasePath(HERO_IMAGE);
  }

  if (!Array.isArray(nextContent.products)) {
    return nextContent;
  }

  nextContent.products = nextContent.products.map((product) => {
    const migration = PRODUCT_IMAGE_MIGRATIONS[product?.id];

    if (!migration || stripBasePath(product?.image) !== migration.oldImage) {
      return product;
    }

    return {
      ...product,
      image: withBasePath(migration.newImage),
    };
  });

  return nextContent;
}

function ensureString(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function ensureNumber(value, fallback = 0) {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function ensureStringArray(values, fallback = []) {
  if (!Array.isArray(values)) {
    return fallback;
  }

  return values
    .map((value) => ensureString(value).trim())
    .filter(Boolean);
}

function normalizeProductSizes(sizes, category) {
  const nextSizes = ensureStringArray(sizes);

  if (category === "acessorio") {
    return nextSizes;
  }

  const filteredSizes = nextSizes.filter((size) => size.toUpperCase() !== "PP");
  return filteredSizes.length ? filteredSizes : nextSizes;
}

function normalizePair(item, fallback = { label: "", value: "" }) {
  return {
    label: ensureString(item?.label, fallback.label),
    value: ensureString(item?.value, fallback.value),
  };
}

function normalizeTextBlock(item, fallback = { title: "", text: "" }) {
  return {
    title: ensureString(item?.title, fallback.title),
    text: ensureString(item?.text, fallback.text),
  };
}

function normalizeContactItem(item, fallback = { title: "", lines: [] }) {
  return {
    title: ensureString(item?.title, fallback.title),
    lines: ensureStringArray(item?.lines, fallback.lines),
  };
}

function normalizeProduct(product, fallbackProduct) {
  const category = ensureString(product?.category, fallbackProduct.category);

  return {
    id: ensureString(product?.id, fallbackProduct.id),
    tag: ensureString(product?.tag, fallbackProduct.tag),
    name: ensureString(product?.name, fallbackProduct.name),
    description: ensureString(product?.description, fallbackProduct.description),
    price: ensureNumber(product?.price, fallbackProduct.price),
    visualClass: ensureString(product?.visualClass, fallbackProduct.visualClass),
    image: withBasePath(ensureString(product?.image, fallbackProduct.image)),
    category,
    gender: ensureString(product?.gender, fallbackProduct.gender),
    sizes: normalizeProductSizes(product?.sizes ?? fallbackProduct.sizes, category),
  };
}

function normalizeProducts(products, defaultProducts) {
  if (!Array.isArray(products) || !products.length) {
    return defaultProducts;
  }

  const normalizedProducts = products.map((product, index) => {
    const fallbackProduct =
      defaultProducts.find((defaultProduct) => defaultProduct.id === product?.id) ??
      defaultProducts[index] ??
      defaultProducts[0];

    return normalizeProduct(product, fallbackProduct);
  });

  const normalizedIds = new Set(normalizedProducts.map((product) => product.id));
  const missingDefaultProducts = defaultProducts.filter((product) => !normalizedIds.has(product.id));

  return [...normalizedProducts, ...missingDefaultProducts];
}

export function getDefaultStoreContent() {
  return clone(defaultStoreContent);
}

export function createEmptyProduct() {
  return {
    id: `produto-${Date.now()}`,
    tag: "Novo",
    name: "Novo produto",
    description: "",
    price: 0,
    visualClass: "reference-piece",
    image: "",
    category: "camisa",
    gender: "unissex",
    sizes: ["P", "M", "G"],
  };
}

export function normalizeStoreContent(content) {
  const migratedContent = applyDefaultImageMigrations(content);
  const defaults = getDefaultStoreContent();

  return {
    admin: {
      password: ensureString(migratedContent?.admin?.password, defaults.admin.password),
    },
    store: {
      name: ensureString(migratedContent?.store?.name, defaults.store.name),
      shortName: ensureString(migratedContent?.store?.shortName, defaults.store.shortName),
      initials: ensureString(migratedContent?.store?.initials, defaults.store.initials),
      logo: withBasePath(ensureString(migratedContent?.store?.logo, defaults.store.logo)),
      tagline: ensureString(migratedContent?.store?.tagline, defaults.store.tagline),
      heroEyebrow: ensureString(migratedContent?.store?.heroEyebrow, defaults.store.heroEyebrow),
      heroTitle: ensureString(migratedContent?.store?.heroTitle, defaults.store.heroTitle),
      heroText: ensureString(migratedContent?.store?.heroText, defaults.store.heroText),
      footerTitle: ensureString(migratedContent?.store?.footerTitle, defaults.store.footerTitle),
      whatsappNumber: ensureString(migratedContent?.store?.whatsappNumber, defaults.store.whatsappNumber),
      whatsappLabel: ensureString(migratedContent?.store?.whatsappLabel, defaults.store.whatsappLabel),
      email: ensureString(migratedContent?.store?.email, defaults.store.email),
    },
    navigationLinks: Array.isArray(migratedContent?.navigationLinks) && migratedContent.navigationLinks.length
      ? migratedContent.navigationLinks.map((item, index) =>
          normalizePair(item, defaults.navigationLinks[index] ?? defaults.navigationLinks[0])
        )
      : defaults.navigationLinks,
    heroMetrics: Array.isArray(migratedContent?.heroMetrics) && migratedContent.heroMetrics.length
      ? migratedContent.heroMetrics.map((item, index) =>
          normalizePair(item, defaults.heroMetrics[index] ?? defaults.heroMetrics[0])
        )
      : defaults.heroMetrics,
    heroSpotlight: {
      badge: ensureString(migratedContent?.heroSpotlight?.badge, defaults.heroSpotlight.badge),
      name: ensureString(migratedContent?.heroSpotlight?.name, defaults.heroSpotlight.name),
      description: ensureString(
        migratedContent?.heroSpotlight?.description,
        defaults.heroSpotlight.description
      ),
      price: ensureString(migratedContent?.heroSpotlight?.price, defaults.heroSpotlight.price),
      installment: ensureString(
        migratedContent?.heroSpotlight?.installment,
        defaults.heroSpotlight.installment
      ),
      visualClass: ensureString(
        migratedContent?.heroSpotlight?.visualClass,
        defaults.heroSpotlight.visualClass
      ),
      image: withBasePath(ensureString(migratedContent?.heroSpotlight?.image, defaults.heroSpotlight.image)),
    },
    categories: Array.isArray(migratedContent?.categories) && migratedContent.categories.length
      ? migratedContent.categories.map((item, index) =>
          normalizePair(item, defaults.categories[index] ?? defaults.categories[0])
        )
      : defaults.categories,
    products: normalizeProducts(migratedContent?.products, defaults.products),
    benefits: Array.isArray(migratedContent?.benefits) && migratedContent.benefits.length
      ? migratedContent.benefits.map((item, index) =>
          normalizeTextBlock(item, defaults.benefits[index] ?? defaults.benefits[0])
        )
      : defaults.benefits,
    contactItems: Array.isArray(migratedContent?.contactItems) && migratedContent.contactItems.length
      ? migratedContent.contactItems.map((item, index) =>
          normalizeContactItem(item, defaults.contactItems[index] ?? defaults.contactItems[0])
        )
      : defaults.contactItems,
  };
}

export function loadStoreContent() {
  if (typeof window === "undefined") {
    return getDefaultStoreContent();
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return getDefaultStoreContent();
  }

  try {
    return normalizeStoreContent(JSON.parse(raw));
  } catch {
    return getDefaultStoreContent();
  }
}

export function saveStoreContent(content) {
  if (typeof window === "undefined") {
    return;
  }

  const normalized = normalizeStoreContent(content);

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  window.dispatchEvent(new Event(STORE_CONTENT_EVENT));
}

export function resetStoreContent() {
  if (typeof window === "undefined") {
    return getDefaultStoreContent();
  }

  const defaults = getDefaultStoreContent();
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(STORE_CONTENT_EVENT));
  return defaults;
}

export function subscribeToStoreContent(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event) => {
    if (!event.key || event.key === STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(STORE_CONTENT_EVENT, callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(STORE_CONTENT_EVENT, callback);
  };
}

export function isAdminAuthenticated() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

export function setAdminAuthenticated(isAuthenticated) {
  if (typeof window === "undefined") {
    return;
  }

  if (isAuthenticated) {
    window.sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    return;
  }

  window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
}

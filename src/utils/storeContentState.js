import { defaultStoreContent } from "../data/storeContent";

const STORAGE_KEY = "reidoshark-store-content";
const ADMIN_SESSION_KEY = "reidoshark-admin-auth";
const STORE_CONTENT_EVENT = "store-content-updated";

function clone(value) {
  return JSON.parse(JSON.stringify(value));
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
  return {
    id: ensureString(product?.id, fallbackProduct.id),
    tag: ensureString(product?.tag, fallbackProduct.tag),
    name: ensureString(product?.name, fallbackProduct.name),
    description: ensureString(product?.description, fallbackProduct.description),
    price: ensureNumber(product?.price, fallbackProduct.price),
    visualClass: ensureString(product?.visualClass, fallbackProduct.visualClass),
    image: ensureString(product?.image, fallbackProduct.image),
    category: ensureString(product?.category, fallbackProduct.category),
    gender: ensureString(product?.gender, fallbackProduct.gender),
    sizes: ensureStringArray(product?.sizes, fallbackProduct.sizes),
  };
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
  const defaults = getDefaultStoreContent();

  return {
    admin: {
      password: ensureString(content?.admin?.password, defaults.admin.password),
    },
    store: {
      name: ensureString(content?.store?.name, defaults.store.name),
      shortName: ensureString(content?.store?.shortName, defaults.store.shortName),
      initials: ensureString(content?.store?.initials, defaults.store.initials),
      logo: ensureString(content?.store?.logo, defaults.store.logo),
      tagline: ensureString(content?.store?.tagline, defaults.store.tagline),
      heroEyebrow: ensureString(content?.store?.heroEyebrow, defaults.store.heroEyebrow),
      heroTitle: ensureString(content?.store?.heroTitle, defaults.store.heroTitle),
      heroText: ensureString(content?.store?.heroText, defaults.store.heroText),
      footerTitle: ensureString(content?.store?.footerTitle, defaults.store.footerTitle),
      whatsappNumber: ensureString(content?.store?.whatsappNumber, defaults.store.whatsappNumber),
      whatsappLabel: ensureString(content?.store?.whatsappLabel, defaults.store.whatsappLabel),
      email: ensureString(content?.store?.email, defaults.store.email),
    },
    navigationLinks: Array.isArray(content?.navigationLinks) && content.navigationLinks.length
      ? content.navigationLinks.map((item, index) =>
          normalizePair(item, defaults.navigationLinks[index] ?? defaults.navigationLinks[0])
        )
      : defaults.navigationLinks,
    heroMetrics: Array.isArray(content?.heroMetrics) && content.heroMetrics.length
      ? content.heroMetrics.map((item, index) =>
          normalizePair(item, defaults.heroMetrics[index] ?? defaults.heroMetrics[0])
        )
      : defaults.heroMetrics,
    heroSpotlight: {
      badge: ensureString(content?.heroSpotlight?.badge, defaults.heroSpotlight.badge),
      name: ensureString(content?.heroSpotlight?.name, defaults.heroSpotlight.name),
      description: ensureString(
        content?.heroSpotlight?.description,
        defaults.heroSpotlight.description
      ),
      price: ensureString(content?.heroSpotlight?.price, defaults.heroSpotlight.price),
      installment: ensureString(
        content?.heroSpotlight?.installment,
        defaults.heroSpotlight.installment
      ),
      visualClass: ensureString(
        content?.heroSpotlight?.visualClass,
        defaults.heroSpotlight.visualClass
      ),
      image: ensureString(content?.heroSpotlight?.image, defaults.heroSpotlight.image),
    },
    categories: Array.isArray(content?.categories) && content.categories.length
      ? content.categories.map((item, index) =>
          normalizePair(item, defaults.categories[index] ?? defaults.categories[0])
        )
      : defaults.categories,
    products: Array.isArray(content?.products) && content.products.length
      ? content.products.map((product, index) =>
          normalizeProduct(product, defaults.products[index] ?? defaults.products[0])
        )
      : defaults.products,
    benefits: Array.isArray(content?.benefits) && content.benefits.length
      ? content.benefits.map((item, index) =>
          normalizeTextBlock(item, defaults.benefits[index] ?? defaults.benefits[0])
        )
      : defaults.benefits,
    contactItems: Array.isArray(content?.contactItems) && content.contactItems.length
      ? content.contactItems.map((item, index) =>
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

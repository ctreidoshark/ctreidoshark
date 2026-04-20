const rawBaseUrl = import.meta.env.BASE_URL ?? "/";
const normalizedBaseUrl =
  rawBaseUrl === "/" ? "/" : `/${rawBaseUrl.replace(/^\/+|\/+$/g, "")}/`;

export function withBasePath(path = "") {
  if (!path) {
    return "";
  }

  if (/^(?:https?:)?\/\//.test(path) || path.startsWith("data:")) {
    return path;
  }

  if (normalizedBaseUrl !== "/" && path.startsWith(normalizedBaseUrl)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBaseUrl}${normalizedPath}`;
}

export function stripBasePath(path = "") {
  if (!path || normalizedBaseUrl === "/") {
    return path;
  }

  if (!path.startsWith(normalizedBaseUrl)) {
    return path;
  }

  return `/${path.slice(normalizedBaseUrl.length)}`;
}

import { formatCurrency } from "./currency";

function normalizeWhatsAppNumber(number) {
  const digits = String(number ?? "").replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  if (digits.startsWith("55")) {
    return digits;
  }

  return `55${digits}`;
}

export function buildWhatsAppLink(number) {
  const normalizedNumber = normalizeWhatsAppNumber(number);

  return normalizedNumber ? `https://wa.me/${normalizedNumber}` : "#";
}

export function buildWhatsAppProductLink(number, product, selectedSize) {
  const normalizedSize = String(selectedSize ?? "").trim();
  const hasSize = normalizedSize && normalizedSize.toLowerCase() !== "unico";
  const sizeLabel = hasSize ? ` no tamanho ${normalizedSize}` : "";
  const message = encodeURIComponent(
    `Oi! Tenho interesse em ${product.name}${sizeLabel}. Pode me passar mais detalhes?`
  );

  return `${buildWhatsAppLink(number)}?text=${message}`;
}

export function buildWhatsAppCheckoutLink(number, cartItems, total) {
  if (!cartItems.length) {
    return buildWhatsAppLink(number);
  }

  const message = encodeURIComponent(
    `Oi! Quero finalizar meu pedido:\n${cartItems
      .map((item) => {
        const sizeLabel = item.selectedSize ? ` | Tamanho: ${item.selectedSize}` : "";
        return `- ${item.name}${sizeLabel} (${formatCurrency(item.price)})`;
      })
      .join("\n")}\n\nTotal: ${formatCurrency(total)}`
  );

  return `${buildWhatsAppLink(number)}?text=${message}`;
}

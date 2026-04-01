import { formatCurrency } from "./currency";

export function buildWhatsAppLink(number) {
  return `https://wa.me/${number}`;
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

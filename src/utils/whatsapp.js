import { formatCurrency } from "./currency";

export function buildWhatsAppLink(number) {
  return `https://wa.me/${number}`;
}

export function buildWhatsAppProductLink(number, product, selectedSize) {
  const sizeLabel = selectedSize ? ` no tamanho ${selectedSize}` : "";
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

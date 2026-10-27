export function whatsappUrl(message: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

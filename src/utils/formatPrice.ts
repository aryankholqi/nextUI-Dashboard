export default function formatPrice(price: string) {
  return Number(price).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

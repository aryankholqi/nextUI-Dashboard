export default function maskCardNumber(cardNumber: string) {
  cardNumber = cardNumber.toString();

  const lastFourDigits = cardNumber.slice(-4);

  const maskedNumber = cardNumber.slice(0, -4).replace(/\d/g, "*");

  const combined = maskedNumber + lastFourDigits;

  const formattedNumber = combined.replace(/(.{4})/g, "$1 ");

  return formattedNumber.trim();
}

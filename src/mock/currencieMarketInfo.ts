import usaFlag from "../assets/pictures/flag/usaFlag.jpg";
import flag from "../assets/pictures/flag/flag.png";

export default function currencieMarketInfo() {
  return [
    {
      country: usaFlag,
      currency: "USD",
      value: 0.73,
      price: 105.27,
      profit: 14.4,
    },
    {
      country: flag,
      currency: "EUR",
      value: -0.0086,
      price: 1.0656,
      profit: -0.67,
    },
  ];
}

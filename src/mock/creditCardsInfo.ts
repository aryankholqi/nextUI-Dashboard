import visaIcon from "../assets/icons/fill/VisaCard";
import mastercard from "../assets/icons/fill/Mastercard";

export default function creditCardsInfo() {
  return [
    {
      Icon: visaIcon,
      balance: 2981,
      cardNum: 11111771,
      cvv2: "20 / 26",
      color: "bg-black dark:bg-white",
    },
    {
      Icon: mastercard,
      balance: 520,
      cardNum: 11112451,
      cvv2: "13 / 86",
      color: "bg-zinc-600 dark:bg-zinc-400",
    },
  ];
}

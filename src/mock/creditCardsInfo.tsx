import visaIcon from "../assets/icons/fill/VisaCard";
import mastercard from "../assets/icons/fill/Mastercard";

export default function creditCardsInfo() {
  return [
    {
      Icon: visaIcon,
      balance: 2.753,
      cardNum: 1771,
      cvv2: "20 / 26",
      color: "bg-black dark:bg-white",
    },
    {
      Icon: mastercard,
      balance: 4.5,
      cardNum: 2451,
      cvv2: "13 / 86",
      color: "bg-zinc-600 dark:bg-zinc-400",
    },
  ];
}

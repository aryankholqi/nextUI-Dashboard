import usaFlag from "../assets/pictures/flag/usaFlag.jpg";
import europeFlag from "../assets/pictures/flag/europeFlag.png";
import AppleTvIcon from "../assets/icons/logo/AppleTv";
import DribbleIcon from "../assets/icons/logo/Dribble";
import EstyIcon from "../assets/icons/logo/Esty";
import UpworkIcon from "../assets/icons/logo/Upwork";

export function currencieMarketInfo() {
  return [
    {
      country: usaFlag,
      currency: "USD",
      value: 0.73,
      price: 105.27,
      profit: 14.4,
    },
    {
      country: europeFlag,
      currency: "EUR",
      value: -0.0086,
      price: 1.0656,
      profit: -0.67,
    },
  ];
}

export function currenciesMarketTableInfo() {
  return [
    {
      id: "1",
      name: "Apple TV+",
      amount: "110",
      date: "1713098498000",
      status: "paid",
      icon: AppleTvIcon,
    },
    {
      id: "2",
      name: "Dribble",
      amount: "18",
      date: "1713271298000",
      status: "overdue",
      icon: DribbleIcon,
    },
    {
      id: "3",
      name: "Upwork",
      amount: "114",
      date: "1713444098000",
      status: "paid",
      icon: UpworkIcon,
    },
    {
      id: "4",
      name: "Esty",
      amount: "28",
      date: "1713616898000",
      status: "pending",
      icon: EstyIcon,
    },
    {
      id: "5",
      name: "Apple TV+",
      amount: "110",
      date: "1713098498000",
      status: "paid",
      icon: AppleTvIcon,
    },
    {
      id: "6",
      name: "Dribble",
      amount: "18",
      date: "1713271298000",
      status: "overdue",
      icon: DribbleIcon,
    },
    {
      id: "7",
      name: "Upwork",
      amount: "114",
      date: "1713444098000",
      status: "paid",
      icon: UpworkIcon,
    },
    {
      id: "8",
      name: "Esty",
      amount: "28",
      date: "1713616898000",
      status: "pending",
      icon: EstyIcon,
    },
  ];
}

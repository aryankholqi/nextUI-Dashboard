import AppleTvIcon from "../../../assets/icons/logo/AppleTv";
import DribbleIcon from "../../../assets/icons/logo/Dribble";
import EstyIcon from "../../../assets/icons/logo/Esty";
import UpworkIcon from "../../../assets/icons/logo/Upwork";

const columns = [
  { name: "ID", uid: "id" },
  { name: "Name", uid: "name" },
  { name: "Amount", uid: "amount" },
  { name: "Date", uid: "date" },
  { name: "Status", uid: "status" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const currenciesMarket = [
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
];

export { columns, currenciesMarket, statusOptions };

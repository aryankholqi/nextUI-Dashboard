import DashboardIcon from "../assets/icons/fill/Dashboard";
import WalletIcon from "../assets/icons/fill/Wallet";
import CommentIcon from "../assets/icons/fill/Comment";
import MessageIcon from "../assets/icons/fill/Message";
import ChartIcon from "../assets/icons/fill/Chart";
import CreditIcon from "../assets/icons/fill/Credit";

export default function sideBarItem() {
  return [
    { content: "Dashboard", Icon: DashboardIcon },
    { content: "Wallet", Icon: WalletIcon },
    { content: "Comments", Icon: CommentIcon },
    { content: "Messages", Icon: MessageIcon },
    { content: "Statistics", Icon: ChartIcon },
    { content: "Payments", Icon: CreditIcon },
  ];
}

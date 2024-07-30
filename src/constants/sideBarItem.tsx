import DashboardIcon from "../assets/icons/fill/Dashboard";
import WalletIcon from "../assets/icons/fill/Wallet";
import CommentIcon from "../assets/icons/fill/Comment";
import MessageIcon from "../assets/icons/fill/Message";
import ChartIcon from "../assets/icons/fill/Chart";
import CreditIcon from "../assets/icons/fill/Credit";

export default function sideBarItem(pathname: string) {
  return [
    { title: "dashboard", Icon: <DashboardIcon isActive={pathname === "/"} />, href: "/" },
    { title: "wallet", Icon: <WalletIcon isActive={pathname === "/wallet"} />, href: "/wallet" },
    { title: "comments", Icon: <CommentIcon isActive={pathname === "/comments"} />, href: "/comments" },
    { title: "messages", Icon: <MessageIcon isActive={pathname === "/messages"} />, href: "/messages" },
    { title: "statistics", Icon: <ChartIcon isActive={pathname === "/statistics"} />, href: "/statistics" },
    { title: "payments", Icon: <CreditIcon isActive={pathname === "/payments"} />, href: "/payments" },
  ];
}

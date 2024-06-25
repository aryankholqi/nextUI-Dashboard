import { Card, Image } from "@nextui-org/react";
import logo from "../../../assets/icons/logo/logo.svg"
import DashboardIcon from "../../../assets/icons/fill/Dashboard";
import WalletIcon from "../../../assets/icons/fill/Wallet";
import CommentIcon from "../../../assets/icons/fill/Comment";
import MessageIcon from "../../../assets/icons/fill/Message";
import ChartIcon from "../../../assets/icons/fill/Chart";
import CreditIcon from "../../../assets/icons/fill/Credit";
import SigninIcon from "../../../assets/icons/fill/Signin";
import MainTooltip from "../Tooltip/MainTooltip";

export default function Sidebar() {
    return (
        <Card className=" bg-black shadow-none px-5 py-4 h-full w-max rounded-full justify-between">
            <Image alt="" src={logo} />
            <div className="flex flex-col gap-4 mt-16">
                <MainTooltip content="Dashboard">
                    <span className="cursor-pointer">
                        <DashboardIcon />
                    </span>
                </MainTooltip>
                <MainTooltip content="Wallet">
                    <span className="cursor-pointer">
                        <WalletIcon />
                    </span>
                </MainTooltip>
                <MainTooltip content="Comments">
                    <span className="cursor-pointer">
                        <CommentIcon />
                    </span>
                </MainTooltip>
                <MainTooltip content="Messages">
                    <span className="cursor-pointer">
                        <MessageIcon />
                    </span>
                </MainTooltip>
                <MainTooltip content="Statistics">
                    <span className="cursor-pointer">
                        <ChartIcon />
                    </span>
                </MainTooltip>
                <MainTooltip content="Payments">
                    <span className="cursor-pointer">
                        <CreditIcon />
                    </span>
                </MainTooltip>
            </div>
            <div className="mt-auto">
                <MainTooltip content="Signout">
                    <span className="cursor-pointer">
                        <SigninIcon />
                    </span>
                </MainTooltip>
            </div>
        </Card>
    )
}

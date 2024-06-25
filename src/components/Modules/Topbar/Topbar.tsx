import { Card, Divider, Input } from "@nextui-org/react";
import SearchIcon from "../../../assets/icons/fill/Search";
import SettingsIcon from "../../../assets/icons/fill/Settings";
import MainTooltip from "../Tooltip/MainTooltip";
import NotificationPin from "../../../assets/icons/fill/NotificationPin";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import MainUserCard from "../UserCard/MainUserCard";

export default function Topbar() {
    return (
        <Card className="dark:bg-black shadow-none rounded-full py-3 px-5 flex-row justify-between items-center">
            <h1 className="font-poppinsRegular">Overview</h1>
            <div className="flex items-center gap-5">
                <Input
                    classNames={{
                        inputWrapper: ["rounded-full"],
                    }}
                    className="font-poppinsRegular"
                    startContent={<SearchIcon />}
                    placeholder="Search"
                    isClearable
                />
                <MainTooltip content="Settings">
                    <span className="cursor-pointer">
                        <SettingsIcon />
                    </span>
                </MainTooltip>
                <MainTooltip content="Notification">
                    <span className="cursor-pointer">
                        <NotificationPin />
                    </span>
                </MainTooltip>
                <ThemeSwitch />
                <Divider className="rotate-90 w-5 h-[2px] bg-primaryGray" />
                <MainUserCard />
            </div>
        </Card>
    )
}

import { Avatar, Card, Divider, Input, Kbd } from "@nextui-org/react";
import SearchIcon from "../../../assets/icons/fill/Search";
import SettingsIcon from "../../../assets/icons/fill/Settings";
import MainTooltip from "../Tooltip/MainTooltip";
import NotificationPin from "../../../assets/icons/fill/NotificationPin";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import MainUserCard from "../UserCard/MainUserCard";
import userImage from "../../../assets/pictures/users/Avatar3.svg"
import PopOver from "../Popover/Popover";
import SearchPopoverContent from "../Popover/PopoverContents/SearchPopoverContent";
import UserPopoverContent from "../Popover/PopoverContents/UserPopoverContent";

export default function Topbar() {
    return (
        <Card className="dark:bg-black shadow-none rounded-full py-3 px-5 flex-row justify-between items-center">
            <h1 className="font-poppinsRegular">Overview</h1>
            <div className="flex items-center gap-5">
                <Input
                    classNames={{
                        inputWrapper: ["rounded-full"],
                    }}
                    className="font-poppinsRegular hidden lg:block"
                    startContent={<SearchIcon />}
                    endContent={<Kbd className="" keys={["command"]}>K</Kbd>}
                    placeholder="Search"
                />
                <PopOver content={<SearchPopoverContent />}>
                    <span className="cursor-pointer block lg:hidden">
                        <SearchIcon/>
                    </span>
                </PopOver>
                <MainTooltip content="Settings">
                    <span className="cursor-pointer hidden sm:block">
                        <SettingsIcon />
                    </span>
                </MainTooltip>
                <MainTooltip content="Notification">
                    <span className="cursor-pointer hidden sm:block">
                        <NotificationPin />
                    </span>
                </MainTooltip>
                <ThemeSwitch />
                <Divider className="rotate-90 w-5 h-[2px] bg-primaryGray" />
                <div className="hidden md:block">
                    <MainUserCard />
                </div>
                <PopOver content={<UserPopoverContent />}>
                    <Avatar src={userImage} className="block md:hidden cursor-pointer" />
                </PopOver>
            </div>
        </Card>
    )
}

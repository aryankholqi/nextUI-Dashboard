import { Avatar, Card, Divider, Input, Kbd } from "@nextui-org/react";
import SearchIcon from "../../../assets/icons/fill/Search";
import SettingsIcon from "../../../assets/icons/fill/Settings";
import MainTooltip from "../Tooltip/MainTooltip";
import NotificationPin from "../../../assets/icons/fill/NotificationPin";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import MainUserCard from "../UserCard/MainUserCard";
import userImage from "../../../assets/pictures/users/Avatar3.svg";
import PopOver from "../Popover/Popover";
import SearchPopoverContent from "../Popover/PopoverContents/SearchPopoverContent";
import UserPopoverContent from "../Popover/PopoverContents/UserPopoverContent";
import MenuIcon from "../../../assets/icons/fill/Menu";
import { useSidebarStore } from "../../../stores/useSidebar";
import MainDropdown from "../Dropdown/Dropdown";
import ChangeLanguage from "../Dropdown/DropdownContents/ChangeLanguage";
import { useTranslation } from "react-i18next";
import { languages } from "../../../constants/languages";

export default function Topbar() {
  const { t, i18n } = useTranslation();
  const { isSidebarOpen, toggleSidebar, isSidebarExpanded } = useSidebarStore();

  return (
    <Card className="dark:bg-black dark:shadow-md dark:shadow-white rounded-full py-3 px-5 flex-row justify-between items-center sticky top-5 z-20">
      <div className="flex items-center gap-2">
        <span
          onClick={() => toggleSidebar(true)}
          className="cursor-pointer md:hidden"
        >
          <MenuIcon />
        </span>
        {/* //TODO should fix this when we Login the title is Login */}
        {!isSidebarOpen && (
          <h1 className="ltr:font-poppinsRegular text-lg 2xs:text-2xl sm:text-3xl">
            {t("dashboard")}
          </h1>
        )}
      </div>
      <div className="flex items-center gap-.5 2xs:gap-1 sm:gap-5">
        <Input
          classNames={{
            inputWrapper: ["rounded-full"],
          }}
          className={`font-poppinsRegular hidden ${
            isSidebarExpanded ? "lg:hidden lgb:block" : "lg:block"
          }`}
          startContent={<SearchIcon />}
          endContent={
            <Kbd className="" keys={["command"]}>
              K
            </Kbd>
          }
          placeholder={t("search")}
        />
        <PopOver content={<SearchPopoverContent />}>
          <span
            className={`cursor-pointer block ${
              isSidebarExpanded ? "lg:block lgb:hidden" : "lg:hidden"
            }`}
          >
            <SearchIcon />
          </span>
        </PopOver>
        <MainTooltip content={t("settings")}>
          <span className="cursor-pointer hidden sm:block">
            <SettingsIcon />
          </span>
        </MainTooltip>
        <MainTooltip content={t("notification")}>
          <span className="cursor-pointer hidden sm:block">
            <NotificationPin />
          </span>
        </MainTooltip>
        <div className="hidden sm:block">
          <ThemeSwitch />
        </div>
        <MainDropdown content={<ChangeLanguage />}>
          <Avatar
            src={languages.find((lng) => lng.key === i18n.language)?.icon}
            className="w-[30px] h-[30px] cursor-pointer lg:w-[90px] lg:h-[35px]"
          />
        </MainDropdown>
        <Divider className="rotate-90 w-5 h-[2px] bg-primaryGray" />
        <div
          className={`hidden ${
            isSidebarExpanded ? "md:hidden" : "md:block"
          } mdb:block`}
        >
          <PopOver content={<UserPopoverContent />}>
            <div className="cursor-pointer">
              <MainUserCard />
            </div>
          </PopOver>
        </div>
        <PopOver content={<UserPopoverContent />}>
          <div>
            <Avatar
              src={userImage}
              className={`block ${
                isSidebarExpanded ? "md:block" : "md:hidden"
              } mdb:hidden cursor-pointer`}
            />
          </div>
        </PopOver>
      </div>
    </Card>
  );
}

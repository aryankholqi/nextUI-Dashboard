import { Divider } from "@nextui-org/react";
import MainUserCard from "../../UserCard/MainUserCard";
import { Link } from "@tanstack/react-router";
import SignoutIcon from "../../../../assets/icons/fill/Signout";
import { useTheme } from "next-themes";
import { useRevokeUser } from "../../../../hooks/useRevokeUser";
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch";
import { useTranslation } from "react-i18next";
import getDirectionByLanguage from "../../../../utils/getDirectionByLanguage";

export default function UserPopoverContent() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme();
  const isLightMode = theme === "light";

  const { revokeUser } = useRevokeUser();

  const changeThemeHandler = () => {
    switch (isLightMode) {
      case true:
        return setTheme("dark");
      case false:
        return setTheme("light");
    }
  };
  return (
    <div className="w-56" dir={getDirectionByLanguage(i18n.language)}>
      <MainUserCard />
      <Divider className="my-2" />
      <ul className="w-full child:transition-all child:duration-200 child-hover:bg-primaryGray dark:child-hover:bg-black child:p-2 child:rounded-lg child:cursor-pointer">
        <li>
          <Link to="">{t("profile")}</Link>
        </li>
        <li className="sm:hidden">
          <Link to="">{t("notification")}</Link>
        </li>
        <li className="sm:hidden">
          <Link to="">{t("settings")}</Link>
        </li>
        <li>
          <Link to="">{t("changePassword")}</Link>
        </li>
        <li onClick={changeThemeHandler} className="sm:hidden">
          <ThemeSwitch />
        </li>
      </ul>
      <Divider className="my-2" />
      <div
        className="flex items-center justify-between gap-2 hover:text-white hover:bg-red-700 translate-x-0 duration-200 w-full p-2 cursor-pointer rounded-lg"
        onClick={revokeUser}
      >
        <span>{t("signout")}</span>
        <SignoutIcon />
      </div>
    </div>
  );
}

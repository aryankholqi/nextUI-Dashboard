import { Avatar, DropdownItem, DropdownMenu } from "@nextui-org/react";
import { languages } from "../../../../constants/languages";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function ChangeLanguage() {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (language: string) => {
    i18n.changeLanguage(language);
    Cookies.set("lang", language);
  };
  return (
    <DropdownMenu
      dir={`${i18n.language === "fa" && "rtl"}`}
      aria-label="Dropdown Menu"
    >
      {languages.map((language) => (
        <DropdownItem
          key={language.key}
          startContent={<Avatar src={language.icon} />}
          onClick={() => changeLanguageHandler(language.key)}
        >
          <span className="ltr:font-poppinsRegular">{language.title}</span>
        </DropdownItem>
      ))}
    </DropdownMenu>
  );
}

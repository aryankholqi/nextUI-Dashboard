import { Avatar, DropdownItem, DropdownMenu } from "@nextui-org/react";
import { languages } from "../../../../constants/languages";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage() {
    const { i18n } = useTranslation()

    const changeLanguageHandler = (language: string) => {
        i18n.changeLanguage(language)
    }
    return (
        <DropdownMenu aria-label="Dropdown Menu">
            {languages.map((language) => (
                <DropdownItem key={language.key} startContent={<Avatar src={language.icon} />} onClick={() => changeLanguageHandler(language.key)}>
                    <span className="font-poppinsRegular">{language.title}</span>
                </DropdownItem>
            ))}
        </DropdownMenu>
    )
}

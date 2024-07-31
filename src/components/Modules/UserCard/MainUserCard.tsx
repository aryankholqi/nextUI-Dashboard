import { Avatar, Chip } from "@nextui-org/react";
import userImage from "../../../assets/pictures/users/Avatar3.svg";
import { useTranslation } from "react-i18next";

export default function MainUserCard() {
  const { t } = useTranslation()

  return (
    <div className="flex items-center gap-2">
      <Avatar src={userImage} alt="" />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-primaryGray text-xs font-poppinsLight">
            @williamB1111
          </p>
          <Chip className="bg-primaryGreen text-black font-poppinsRegular text-xs">
            {t("pro")}
          </Chip>
        </div>
        <h4 className="font-poppinsRegular">William Blake</h4>
      </div>
    </div>
  );
}

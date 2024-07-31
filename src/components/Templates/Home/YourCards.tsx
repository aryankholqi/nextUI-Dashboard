import { Card, Chip } from "@nextui-org/react";
import Plus from "../../../assets/icons/fill/Plus";
import CreditCardBox from "./CreditCardBox";
import creditCardsInfo from "../../../mock/creditCardsInfo";
import MainTooltip from "../../Modules/Tooltip/MainTooltip";
import { useTranslation } from "react-i18next";

export default function YourCards() {
  const { t } = useTranslation();
  return (
    <Card className="p-8 bg-white dark:bg-black dark:text-white rounded-4xl shadow-none space-y-10 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="space-y-2 ltr:font-poppinsRegular">
          <h3 className="text-3xl 2xl:text-2xl">{t("yourCards")}</h3>
          <Chip className="bg-[#DAE1FE] dark:bg-blue-950 text-base dark:text-white">
            {t("premium")}
          </Chip>
        </div>
        <MainTooltip content="Add Credit Card">
          <span className="p-3 rounded-full cursor-pointer border border-dashed border-black dark:border-white">
            <Plus />
          </span>
        </MainTooltip>
      </div>
      {/* //TODO should fix gap between cards  */}
      <div className="flex items-center overflow-x-auto gap-4">
        {creditCardsInfo().map((card, index) => (
          <CreditCardBox key={index} {...card} />
        ))}
      </div>
    </Card>
  );
}

import { Card, Chip } from "@nextui-org/react";
import StackedAreaChart from "../../Modules/Charts/StackedAreaChart";
import ArrowUp from "../../../assets/icons/fill/ArrowUp";
import { useTranslation } from "react-i18next";

export default function AreaChartBox() {
  const { t } = useTranslation()
  return (
    <Card className="p-8 bg-white h-[320px] dark:bg-black dark:text-white rounded-4xl shadow-none space-y-5 flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="space-y-3 ltr:font-poppinsRegular">
          <h3 className="text-3xl 2xl:text-2xl">{t("income")}</h3>
          <Chip
            className="bg-[#CCFFCD] dark:text-black text-xs"
            startContent={
              <span className="bg-primaryGreen p-0.5 rounded-full">
                <ArrowUp />
              </span>
            }
          >
            +14,4%
          </Chip>
        </div>
        <Chip className="bg-[#CCFFCD] dark:text-black">{t("month")}</Chip>
      </div>
      <StackedAreaChart />
    </Card>
  );
}

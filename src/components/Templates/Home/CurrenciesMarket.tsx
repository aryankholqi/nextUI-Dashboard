import { Card } from "@nextui-org/react";
import { currencieMarketInfo } from "../../../mock/currencieMarketInfo";
import CurrenciesMarketDetailBox from "./CurrenciesMarketDetailBox";
import { useTranslation } from "react-i18next";

export default function CurrenciesMarket() {
  const { t } = useTranslation()
  return (
    <Card className="p-8 bg-white h-full dark:bg-black dark:text-white rounded-4xl shadow-none md:space-y-2 flex flex-col items-start gap-8 justify-between">
      <h3 className="text-3xl 2xl:text-2xl">{t("currenciesMarket")}</h3>
      <div className="flex flex-col items-start gap-5 w-full">
        {currencieMarketInfo().map((item, index) => (
          <CurrenciesMarketDetailBox key={index} {...item} />
        ))}
      </div>
    </Card>
  );
}

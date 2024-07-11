import { Card } from "@nextui-org/react";
import currencieMarketInfo from "../../../mock/currencieMarketInfo";
import CurrenciesMarketDetailBox from "./CurrenciesMarketDetailBox";

export default function CurrenciesMarket() {
  return (
    <Card className="p-8 bg-white dark:bg-black dark:text-white rounded-4xl shadow-none space-y-5 flex flex-col items-start justify-between">
      <h3>Currencies Market</h3>
      <div className="flex flex-col items-start gap-2 w-full">
        {currencieMarketInfo().map((item, index) => (
          <CurrenciesMarketDetailBox key={index} {...item} />
        ))}
      </div>
    </Card>
  );
}

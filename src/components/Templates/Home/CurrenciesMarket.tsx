import { Card, User } from "@nextui-org/react";
import ArrowDropUp from "../../../assets/icons/fill/ArrowDropUp";
import currencieMarketInfo from "../../../mock/currencieMarketInfo";
import ArrowDropDown from "../../../assets/icons/fill/ArrowDropDown";

export default function CurrenciesMarket() {
  return (
    <Card className="p-8 bg-white dark:bg-black dark:text-white rounded-4xl shadow-none space-y-5 flex flex-col items-start justify-between">
      <h3>Currencies Market</h3>
      <div className="flex flex-col items-start gap-2 w-full">
        {currencieMarketInfo().map((item, index) => (
          <div key={index} className="flex items-center justify-between w-full">
            <User
              name={item.currency}
              description={item.value}
              avatarProps={{
                src: item.country,
                size: "lg",
              }}
              classNames={{
                name: ["text-3xl"],
                description: ["text-xl text-[#B6B6B6]"],
              }}
            />
            <div className="flex flex-col items-center">
              <span className="text-3xl">{item.price}</span>
              <div
                className={`flex items-center ${
                  item.profit > 0 ? "text-[#007A64]" : "text-red-700"
                }`}
              >
                {item.profit > 0 ? (
                  <>
                    <ArrowDropUp />
                    <span className="text-xl">+{item.profit}%</span>
                  </>
                ) : (
                  <>
                    <ArrowDropDown />
                    <span className="text-xl">{item.profit}%</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

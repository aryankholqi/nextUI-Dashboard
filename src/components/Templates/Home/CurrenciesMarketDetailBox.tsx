import { User } from "@nextui-org/react";
import ArrowDropUp from "../../../assets/icons/fill/ArrowDropUp";
import ArrowDropDown from "../../../assets/icons/fill/ArrowDropDown";
import { currncyMarketProps } from "../../../interfaces/currencyMarket.interface";

export default function CurrenciesMarketDetailBox({
  currency,
  value,
  country,
  price,
  profit,
}: currncyMarketProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <User
        name={currency}
        description={value}
        avatarProps={{
          src: country,
          size: "lg",
        }}
        classNames={{
          name: ["text-xl"],
          description: ["text-md text-[#B6B6B6]"],
        }}
      />
      <div className="flex flex-col items-center">
        <span className="text-2xl">{price}</span>
        <div
          className={`flex items-center ${profit > 0 ? "text-[#007A64]" : "text-red-700"
            }`}
        >
          {profit > 0 ? (
            <>
              <ArrowDropUp />
              <span className="text-lg">+{profit}%</span>
            </>
          ) : (
            <>
              <ArrowDropDown />
              <span className="text-lg">{profit}%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

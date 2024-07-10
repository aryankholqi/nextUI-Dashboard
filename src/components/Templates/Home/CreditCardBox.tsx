import { Card } from "@nextui-org/react";
import { creditCardsProp } from "../../../interfaces/creditCards.interface";

export default function CreditCardBox({
  Icon,
  balance,
  cardNum,
  cvv2,
  color,
}: creditCardsProp) {
  return (
    <Card
      className={`pb-4 px-7 text-white dark:text-black space-y-5 ${color} rounded-[32px] shadow-none min-w-[250px]`}
    >
      <div className="flex items-center justify-between gap-10">
        <h2>${balance}</h2>
        <span>
          <Icon />
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span>**** {cardNum}</span>
        <span>{cvv2}</span>
      </div>
    </Card>
  );
}
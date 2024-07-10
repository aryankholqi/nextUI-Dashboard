import { Card, Chip } from "@nextui-org/react";
import Plus from "../../../assets/icons/fill/Plus";
import CreditCardBox from "./CreditCardBox";
import creditCardsInfo from "../../../mock/creditCardsInfo";

export default function YourCards() {
  return (
    <Card className="p-8 bg-white dark:bg-black dark:text-white rounded-4xl shadow-none space-y-10 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h3 className="text-3xl">Your Cards</h3>
          <Chip className="bg-info-10 dark:bg-blue-950 text-base dark:text-white">
            Premium
          </Chip>
        </div>
        <span className="p-3 rounded-full cursor-pointer border border-dashed border-black dark:border-white">
          <Plus />
        </span>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {creditCardsInfo().map((card, index) => (
          <CreditCardBox key={index} {...card} />
        ))}
      </div>
    </Card>
  );
}

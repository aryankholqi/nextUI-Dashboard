import { Button, Card } from "@nextui-org/react";
import Plus from "../../../assets/icons/fill/Plus";
import ArrowVirgule from "../../../assets/icons/fill/ArrowVirgule";
import ArrowDown from "../../../assets/icons/fill/ArrowDown";
import MainTooltip from "../../Modules/Tooltip/MainTooltip";
import formatPrice from "../../../utils/formatPrice";

export default function TotalBalance() {
  return (
    <Card className="bg-primaryGreen p-8 rounded-4xl flex flex-col justify-between text-black shadow-none">
      <div className="flex items-center justify-between">
        <div className="space-y-2 font-poppinsRegular">
          <h2 className="text-3xl">Total Balance</h2>
          <div className="flex items-center gap-2">
            <span className="text-5xl">{formatPrice("20760")}</span>
            <span className="self-start">USD</span>
          </div>
        </div>
        <MainTooltip content="Add Balance">
          <span className="bg-white dark:bg-black p-3 rounded-full cursor-pointer">
            <Plus />
          </span>
        </MainTooltip>
      </div>
      <div className="grid grid-cols-2 gap-4 child:rounded-full child:text-lg child:py-5 child:xl:py-7">
        <Button endContent={<ArrowDown />} className="bg-white dark:bg-black">
          Deposit
        </Button>
        <Button
          endContent={<ArrowVirgule />}
          className="bg-black dark:bg-white dark:text-black text-white"
        >
          Send
        </Button>
      </div>
    </Card>
  );
}

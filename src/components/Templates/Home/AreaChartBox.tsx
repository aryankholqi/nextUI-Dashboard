import { Card, Chip } from "@nextui-org/react";
import StackedAreaChart from "../../Modules/Charts/StackedAreaChart";
import ArrowUp from "../../../assets/icons/fill/ArrowUp";

export default function AreaChartBox() {
  return (
    <Card className="p-8 bg-white dark:bg-black dark:text-white rounded-4xl shadow-none space-y-5 flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="space-y-3">
          <h3 className="text-3xl">Income</h3>
          <Chip
            className="bg-success-10 dark:text-black text-xs"
            startContent={
              <span className="bg-primaryGreen p-0.5 rounded-full">
                <ArrowUp />
              </span>
            }
          >
            +14,4%
          </Chip>
        </div>
        <Chip className="bg-success-10 dark:text-black">Month</Chip>
      </div>
      <StackedAreaChart />
    </Card>
  );
}

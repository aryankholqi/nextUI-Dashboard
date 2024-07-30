import AreaChartBox from "../../components/Templates/Home/AreaChartBox";
import BarChartBox from "../../components/Templates/Home/BarChartBox";
import CurrenciesMarket from "../../components/Templates/Home/CurrenciesMarket";
import CurrenciesMarketTable from "../../components/Templates/Home/CurrenciesMarketTable";
import IncomeBox from "../../components/Templates/Home/IncomeBox";
import QuickTransfer from "../../components/Templates/Home/QuickTransfer";
import TotalBalance from "../../components/Templates/Home/TotalBalance";
import YourCards from "../../components/Templates/Home/YourCards";
import { incomeInfo } from "../../mock/incomeInfo";
import { useSidebarStore } from "../../stores/useSidebar";

export default function Home() {
  const { isSidebarExpanded } = useSidebarStore();
  return (
    <div className="mt-5 grid grid-cols-1 gap-8">
      <div
        className={`grid ${isSidebarExpanded ? "md:grid-cols-1" : "md:grid-cols-2"
          } mdb:grid-cols-2 xl:grid-cols-3 gap-8`}
      >
        <TotalBalance />
        <AreaChartBox />
        <YourCards />
        <div className="hidden md:inline-block xl:hidden h-[100%]">
          <CurrenciesMarket />
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-12 child:gap-8 space-y-8 xl:space-x-8">
        <div
          className={`col-span-12 2xl:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 row-span-12`}
        >
          {incomeInfo().map((chart, index) => (
            <IncomeBox key={index} {...chart} />
          ))}
          <div className="md:hidden xl:inline-block">
            <CurrenciesMarket />
          </div>
          <div className="md:col-span-2 xl:col-span-3">
            <CurrenciesMarketTable />
          </div>
        </div>
        {/* //TODO should fix margin start */}
        <div className="col-span-12 grid md:grid-cols-2 2xl:grid-cols-1 2xl:col-span-3 row-span-12 space-y-8 !ms-0 2xl:!ms-8 2xl:!mt-0">
          <QuickTransfer />
          <BarChartBox />
        </div>
      </div>
    </div>
  );
}

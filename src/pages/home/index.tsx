import AreaChartBox from "../../components/Templates/Home/AreaChartBox";
import BarChartBox from "../../components/Templates/Home/BarChartBox";
import TotalBalance from "../../components/Templates/Home/TotalBalance";
import YourCards from "../../components/Templates/Home/YourCards";

export default function Home() {
  return (
    <div className="flex gap-5 mt-5">
      {/* <div className="grid grid-cols-2 gap-5 w-[72%]">
        <TotalBalance />
        <AreaChartBox />
      </div>
      <div className="w-[28%]">
        <YourCards />
      </div> */}
      <BarChartBox />
    </div>
  );
}

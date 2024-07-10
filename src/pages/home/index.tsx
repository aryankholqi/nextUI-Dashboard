import TotalBalance from "../../components/Templates/Home/TotalBalance";
import YourCards from "../../components/Templates/Home/YourCards";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-5">
      <TotalBalance />
      <YourCards />
    </div>
  );
}

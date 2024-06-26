import { ReactNode } from "@tanstack/react-router";
import Sidebar from "../components/Modules/Sidebar/Sidebar";
import Topbar from "../components/Modules/Topbar/Topbar";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const changeMenuStatusHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-primaryBg dark:bg-darkPrimaryBg h-[100dvh] flex gap-4 items-start p-5 relative">
      <Sidebar isMenuOpen={isMenuOpen} menuHandler={changeMenuStatusHandler}/>
      <div className="w-full">
        <Topbar isMenuOpen={isMenuOpen} menuHandler={changeMenuStatusHandler} />
        {children}
      </div>
    </div>
  );
}

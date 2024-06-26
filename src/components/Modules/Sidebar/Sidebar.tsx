import SigninIcon from "../../../assets/icons/fill/Signin";
import MainTooltip from "../Tooltip/MainTooltip";
import LogoIcon from "../../../assets/icons/logo/Logo";
import sideBarItem from "../../../constants/sideBarItem";
import { useEffect, useState } from "react";
import CloseIcon from "../../../assets/icons/fill/Close";
import { Link } from "@tanstack/react-router";
import { useSidebarStore } from "../../../stores/useSidebar";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore()

  const [isInLaptopView, setIsInLaptopView] = useState<boolean>(window.innerWidth > 768)

  useEffect(() => {
    const handleWidthChange = () => {
      setIsInLaptopView(window.innerWidth > 768)
    }
    window.addEventListener("resize", handleWidthChange)

    return () => {
      window.removeEventListener("resize", handleWidthChange)
    }
  }, [])

  return (
    <div
      className={`bg-black shadow-none px-5 py-4 h-full flex flex-col justify-between transition-all duration-[350ms] ${!isInLaptopView ? "absolute h-[94dvh] z-50" : "rounded-full"} ${(!isInLaptopView && isSidebarOpen) ? "left-5 w-max sm:w-[40%] rounded-[40px]" : ""} ${!isInLaptopView && !isSidebarOpen ? "-left-96" : ""}`}
    >
      <div className="flex flex-wrap-reverse items-end gap-4 mt-2">
        <LogoIcon />
        <h1 className="font-poppinsRegular text-2xl sm:text-3xl md:hidden text-white">Overview</h1>
        <span className="cursor-pointer md:hidden" onClick={toggleSidebar}>
          <CloseIcon />
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-16">
        {sideBarItem().map((item, index) => (
          <Link to="/" className="flex items-center gap-2" key={index}>
            <MainTooltip key={index} content={item.content}>
              <span className="cursor-pointer">
                <item.Icon />
              </span>
            </MainTooltip>
            {!isInLaptopView && <span className="text-white font-poppinsRegular">{item.content}</span>}
          </Link>
        ))}
      </div>
      <Link to="/" className="mt-auto flex items-center gap-2">
        <MainTooltip content="Signout">
          <span className="cursor-pointer">
            <SigninIcon />
          </span>
        </MainTooltip>
        {!isInLaptopView && <span className="text-white font-poppinsRegular">Signout</span>}
      </Link>
    </div >
  );
}

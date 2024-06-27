import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useSidebarStore } from "../../../stores/useSidebar";
import SigninIcon from "../../../assets/icons/fill/Signin";
import MainTooltip from "../Tooltip/MainTooltip";
import LogoIcon from "../../../assets/icons/logo/Logo";
import sideBarItem from "../../../constants/sideBarItem";
import CloseIcon from "../../../assets/icons/fill/Close";
import ExpandRightIcon from "../../../assets/icons/fill/ExpandRight";
import "./Sidebar.css";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar, isSidebarExpanded, expandSidebarToggle } = useSidebarStore();

  const [isInLaptopView, setIsInLaptopView] = useState<boolean>(window.innerWidth > 768);

  useEffect(() => {
    const handleWidthChange = () => setIsInLaptopView(window.innerWidth > 768);

    window.addEventListener("resize", handleWidthChange);
    return () => window.removeEventListener("resize", handleWidthChange);
  }, []);

  useEffect(() => {
    if (isInLaptopView) {
      toggleSidebar(false);
    }
  }, [isInLaptopView, toggleSidebar]);

  const sidebarClasses = `
    bg-black shadow-none px-5 py-4 h-[93.5dvh] transition-all duration-[250ms] 
    ${isInLaptopView && !isSidebarExpanded ? "rounded-full" : "rounded-[40px]"} 
    ${isSidebarExpanded ? "toggleSidebar" : "w-max"} 
    ${!isInLaptopView ? "absolute z-50" : ""}
    ${!isInLaptopView && isSidebarOpen ? "left-5 w-max sm:w-[40%]" : ""}
    ${!isInLaptopView && !isSidebarOpen ? "-left-96" : ""}
  `;

  const expandIconClasses = `
    ${isInLaptopView ? "inline-block" : "hidden"} 
    absolute -right-8 top-[50px] cursor-pointer transition-all duration-250 
    ${isSidebarExpanded ? "rotate-180" : "rotate-0"}
  `;

  return (
    <div className={sidebarClasses}>
      <div className="flex flex-col justify-between h-full relative">
        <MainTooltip content="Expand">
          <span className={expandIconClasses} onClick={expandSidebarToggle}>
            <ExpandRightIcon />
          </span>
        </MainTooltip>
        <div className="flex items-center justify-between gap-4 sm:gap-0 flex-wrap-reverse mt-2">
          <LogoIcon />
          <h1 className="font-poppinsRegular text-2xl sm:text-3xl md:hidden text-white">Overview</h1>
          <span className="cursor-pointer md:hidden" onClick={() => toggleSidebar(false)}>
            <CloseIcon />
          </span>
        </div>
        <ul className="flex flex-col gap-4 mt-16">
          {sideBarItem().map((item, index) => (
            <li key={index}>
              <Link to="/" className="flex items-center gap-2">
                <MainTooltip key={index} content={item.content}>
                  <span className="cursor-pointer">
                    <item.Icon />
                  </span>
                </MainTooltip>
                {(!isInLaptopView || isSidebarExpanded) && (
                  <span className="text-white font-poppinsRegular">{item.content}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/" className="mt-auto flex items-center gap-2">
          <MainTooltip content="Signout">
            <span className="cursor-pointer">
              <SigninIcon />
            </span>
          </MainTooltip>
          {(!isInLaptopView || isSidebarExpanded) && (
            <span className="text-white font-poppinsRegular">Signout</span>
          )}
        </Link>
      </div>
    </div>
  );
}

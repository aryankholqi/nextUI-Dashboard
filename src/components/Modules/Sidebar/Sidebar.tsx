import SigninIcon from "../../../assets/icons/fill/Signin";
import MainTooltip from "../Tooltip/MainTooltip";
import LogoIcon from "../../../assets/icons/logo/Logo";
import sideBarItem from "../../../constants/sideBarItem";
import { useEffect } from "react";
import CloseIcon from "../../../assets/icons/fill/Close";
import { Link } from "@tanstack/react-router";
import { useSidebarStore } from "../../../stores/useSidebar";
import ExpandRightIcon from "../../../assets/icons/fill/ExpandRight";
import "./Sidebar.css";

export default function Sidebar() {
  const {
    isSidebarOpen,
    toggleSidebar,
    isSidebarExpanded,
    expandSidebarToggle,
  } = useSidebarStore();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isSidebarOpen) {
        toggleSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <div
      className={`bg-black shadow-none px-5 py-4 h-[93.5dvh] transition-all duration-[250ms] ${
        !isSidebarExpanded ? "rounded-[40px] md:rounded-full" : "rounded-[40px]"
      } ${
        isSidebarExpanded ? "toggleSidebar" : "w-max"
      } absolute md:static z-50 ${
        isSidebarOpen ? "left-5 w-max sm:w-[40%]" : ""
      } ${!isSidebarOpen ? "-left-96" : ""}`}
    >
      <div className="flex flex-col justify-between h-full relative">
        <MainTooltip content="Expand">
          <span
            className={`hidden md:inline-block absolute -right-8 top-[50px] cursor-pointer transition-all duration-250 ${
              isSidebarExpanded ? "rotate-180" : "rotate-0"
            }`}
            onClick={expandSidebarToggle}
          >
            <ExpandRightIcon />
          </span>
        </MainTooltip>
        <div className="flex items-center justify-between gap-4 sm:gap-0 flex-wrap-reverse mt-2">
          <LogoIcon />
          <h1 className="font-poppinsRegular text-2xl sm:text-3xl md:hidden text-white">
            Overview
          </h1>
          <span
            className="cursor-pointer md:hidden"
            onClick={() => toggleSidebar(false)}
          >
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

                <span
                  className={`text-white font-poppinsRegular ${
                    !isSidebarExpanded && "md:hidden"
                  }`}
                >
                  {item.content}
                </span>
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

          <span
            className={`text-white font-poppinsRegular ${
              !isSidebarExpanded && "md:hidden"
            }`}
          >
            Signout
          </span>
        </Link>
      </div>
    </div>
  );
}

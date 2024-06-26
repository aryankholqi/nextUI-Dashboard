import SigninIcon from "../../../assets/icons/fill/Signin";
import MainTooltip from "../Tooltip/MainTooltip";
import LogoIcon from "../../../assets/icons/logo/Logo";
import sideBarItem from "../../../mock/sideBarItem";

export default function Sidebar({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <div
      className={`bg-black shadow-none px-5 py-4 h-full justify-between transition-all duration-300 ${
        isMenuOpen
          ? "absolute left-5 w-[40%] z-50 md:static md:w-max md:rounded-full"
          : "absolute -left-96"
      }`}
    >
      <LogoIcon />
      <div className="flex flex-col gap-4 mt-16">
        {sideBarItem().map((item, index) => (
          <MainTooltip key={index} content={item.content}>
            <span className="cursor-pointer">
              <item.Icon />
            </span>
          </MainTooltip>
        ))}
      </div>
      <div className="mt-auto">
        <MainTooltip content="Signout">
          <span className="cursor-pointer">
            <SigninIcon />
          </span>
        </MainTooltip>
      </div>
    </div>
  );
}

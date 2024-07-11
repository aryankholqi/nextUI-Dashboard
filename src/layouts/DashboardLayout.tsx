import { ReactNode } from "@tanstack/react-router";
import Sidebar from "../components/Modules/Sidebar/Sidebar";
import Topbar from "../components/Modules/Topbar/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primaryBg dark:bg-darkPrimaryBg min-h-[100dvh] flex gap-4 items-start p-5 relative">
      <Sidebar />
      <div className="w-[100%]">
        <Topbar />
        {children}
      </div>
    </div>
  );
}

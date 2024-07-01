import { ReactNode } from "@tanstack/react-router";
import { BackgroundBeam } from "../components/ui/BackgroundBeam";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex dark:bg-black flex-col h-[100vh] items-center justify-center text-slate-950 transition-bg">
      {children}
      <BackgroundBeam />
    </div>
  );
}

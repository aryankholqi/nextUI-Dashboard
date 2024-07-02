import { ReactNode } from "@tanstack/react-router";
import { BackgroundBeam } from "../components/ui/BackgroundBeam";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex dark:bg-black flex-col h-[100dvh] items-center justify-center">
      {children}
      <BackgroundBeam />
    </div>
  );
}

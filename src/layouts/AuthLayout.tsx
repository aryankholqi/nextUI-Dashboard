import { ReactNode } from "@tanstack/react-router";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black  text-slate-950 transition-bg">
      {children}
    </div>
  );
}

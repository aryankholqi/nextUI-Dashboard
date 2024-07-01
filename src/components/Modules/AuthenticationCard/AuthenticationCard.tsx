import { ReactNode } from "@tanstack/react-router";

export default function AuthenticationCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className=" flex items-center justify-center w-full h-full py-14 px-28 z-50">
      {children}
    </div>
  );
}

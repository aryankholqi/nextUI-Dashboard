import { ReactNode } from "@tanstack/react-router";

export default function AuthenticationCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className=" flex items-center justify-center w-full h-full py-20 px-4 3xs:px-14 sm:px-20 lg:px-28 z-50">
      {children}
    </div>
  );
}

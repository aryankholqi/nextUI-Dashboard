import { ReactNode } from "@tanstack/react-router";

export default function AuthenticationCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="loginPageMainImg flex items-center justify-center w-full h-full py-8 px-28">
      <div className="loginPageStyles bg-white p-5">
        <div className="loginPageStyles loginPageImg relative">
          {children}
          <div className="absolute p-5 h-32 bottom-0 left-0 bg-white rounded-tr-[200px]">
            <h1>mohammad</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              enim
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ReactNode } from "@tanstack/react-router";
import AboutUs from "./AboutUs";

export default function AuthenticationCard({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="loginPageMainImg flex items-center justify-center w-full h-full py-8 px-28">
            <div className="flex items-center w-full h-full justify-center rounded-[40px] bg-white p-5">
                <div className="flex items-center w-full h-full justify-end rounded-[25px] loginPageImg relative child:mr-10">
                    <div className="w-[35%] h-[80%] child:w-full child:h-full rounded-[15px] child:p-5 child:rounded-[15px] bg-black">
                        {children}
                    </div>
                    <div className="absolute p-5 h-24 bottom-0 left-0 bg-white rounded-tr-[200px] w-[400px]">
                        <AboutUs />
                    </div>
                </div>
            </div>
        </div>
    );
}

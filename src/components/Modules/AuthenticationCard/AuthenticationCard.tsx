import { ReactNode } from "@tanstack/react-router";
import pic from "../../../assets/pictures/sunrise.jpeg";

export default function AuthenticationCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center justify-center overflow-hidden m-10 rounded-[40px] relative">
      <img className="object-cover" src={pic} alt="" />
      {children}
      <div className="absolute p-5 h-32 bottom-0 left-0 bg-white rounded-tr-[200px]">
        <h1>mohammad</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, enim</p>
      </div>
      <div className="bg-white w-0.5 h-10 rounded-bl-[40px] absolute left-0 bottom-[120px]"></div>
    </div>
  );
}

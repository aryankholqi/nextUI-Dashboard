import { Button, Input } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginProps } from "../../../interfaces/loginForm.interface";
import UserIcon from "../../../assets/icons/fill/User";
import EyeIcon from "../../../assets/icons/fill/Eye";
import { useState } from "react";
import EyeSlashIcon from "../../../assets/icons/fill/EyeSlash";
import loginImg from "../../../assets/pictures/cropped-3840-2160-64111.jpg";
import ArrowLeft from "../../../assets/icons/fill/ArrowLeft";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginProps>();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const submitFormHandler: SubmitHandler<loginProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full flex items-center">
      <div className="relative w-[50%] xl:w-[55%] h-[80%] lg:h-full hidden md:inline-block">
        <img
          className="w-[90%] h-full object-cover rounded-3xl"
          src={loginImg}
          alt=""
        />
        <img
          className="w-[90%] absolute top-6 right-6 -z-10 blur-3xl h-full object-cover rounded-3xl"
          src={loginImg}
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit(submitFormHandler)}
        className="p-4 flex flex-col justify-center items-center gap-10 lg:gap-20 3xl:gap-32 w-full md:w-[50%] xl:w-[45%]"
      >
        <div className="text-center space-y-2">
          <p className="text-primaryGray text-2xl 2xs:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl font-poppinsRegular capitalize">
            Login Your Account To Unleash Your Dream
          </p>
        </div>
        <div className="space-y-4 w-full 3xl:w-[70%]">
          <Input
            {...register("username", {
              required: "Username Is Required",
            })}
            classNames={{
              inputWrapper: [
                "border-2 dark:border-zinc-800 bg-zinc-900 rounded-xl dark:group-data-[focus=true]:border-lime-700",
              ],
              errorMessage: ["text-danger-600"],
            }}
            size="sm"
            className="font-poppinsRegular"
            endContent={<UserIcon />}
            isInvalid={Boolean(errors.username)}
            errorMessage={errors.username?.message}
            label={"Username"}
          />
          <Input
            {...register("password", {
              required: "Password Is Required",
            })}
            classNames={{
              inputWrapper: [
                "border-2 dark:border-zinc-800 bg-zinc-900 rounded-xl dark:group-data-[focus=true]:border-lime-700",
              ],
              errorMessage: ["text-danger-600"],
            }}
            size="sm"
            type={isPasswordVisible ? "text" : "password"}
            className="font-poppinsRegular"
            endContent={
              isPasswordVisible ? (
                <span
                  className="cursor-pointer"
                  onClick={() => setIsPasswordVisible(false)}
                >
                  <EyeSlashIcon />
                </span>
              ) : (
                <span
                  className="cursor-pointer"
                  onClick={() => setIsPasswordVisible(true)}
                >
                  <EyeIcon />
                </span>
              )
            }
            label={"Password"}
            isInvalid={Boolean(errors.password)}
            errorMessage={errors.password?.message}
          />
        </div>
        <Button
          className="bg-zinc-600 font-poppinsRegular py-6 text-lg w-full 3xl:w-[70%] relative"
          type="submit"
        >
          Login
          <span className="rotate-180 bg-zinc-800 p-2 rounded-full absolute right-2">
            <ArrowLeft />
          </span>
        </Button>
      </form>
    </div>
  );
}

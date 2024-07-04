import { Button, Input } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginProps } from "../../../interfaces/loginForm.interface";
import UserIcon from "../../../assets/icons/fill/User";
import EyeIcon from "../../../assets/icons/fill/Eye";
import { useState } from "react";
import EyeSlashIcon from "../../../assets/icons/fill/EyeSlash";
import loginImg from "../../../assets/pictures/login/wallpapersden.com_trees-mountains-fog_6000x4000.jpg";
import { HoverBorderGradient } from "../../ui/HoverBorderGrdaient";
import { useLoginMutation } from "../../../hooks/api/useAuthApi";
import { FlipWords } from "../../ui/FlipWords";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<loginProps>({
    defaultValues: {
      username: "mor_2314",
      password: "83r5^_"
    }
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const { mutate, isPending } = useLoginMutation(reset);

  const submitFormHandler: SubmitHandler<loginProps> = (data) => {
    mutate(data);
  };

  const words = ["To Your Account", "To Unleash Your Dream"];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-[50%] xl:w-[40%] h-[90%] xl:h-full 2xl:h-[85%] hidden md:inline-block">
        <img
          className="w-[90%] h-full object-cover rounded-3xl"
          src={loginImg}
          alt=""
        />
        <img
          className="w-[90%] absolute top-6 right-8 -z-10 blur-2xl h-full object-cover rounded-3xl"
          src={loginImg}
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit(submitFormHandler)}
        className="p-4 flex flex-col justify-center items-center gap-10 lg:gap-20 3xl:gap-32 w-full md:w-[50%] xl:w-[40%]"
      >
        <div className="self-start space-y-2">
          <span className="text-3xl text-white font-poppinsRegular block">
            Login
          </span>
          <FlipWords
            className="text-white/50 text-xl px-0 dark:text-neutral-400 font-poppinsLight"
            words={words}
          />
        </div>
        <div className="space-y-6 w-full">
          <Input
            {...register("username", {
              required: "Username Is Required",
            })}
            classNames={{
              label: ["text-xs xl:text-base 3xl:text-lg"],
              inputWrapper: [
                "border text-xs lg:py-3 3xl:py-4 h-full justify-center dark:border-zinc-800 dark:bg-black/20 rounded-xl dark:group-data-[focus=true]:border-lime-900 dark:group-data-[focus=true]:bg-black/20",
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
              label: ["text-xs xl:text-base 3xl:text-lg"],
              inputWrapper: [
                "border lg:py-3 3xl:py-4 h-full dark:border-zinc-800 dark:bg-black/20 rounded-xl dark:group-data-[focus=true]:border-lime-900 dark:group-data-[focus=true]:bg-black/20",
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
        <HoverBorderGradient
          containerClassName="w-full dark:border-black border-zinc-500 dark:hover:border-lime-700"
          className="dark:bg-zinc-950 bg-lime-950 w-full h-10 lg:h-12 xl:h-16 3xl:h-20 text-black dark:text-zinc-300 flex items-center justify-center space-x-2"
        >
          <Button
            type="submit"
            className="w-full bg-transparent h-full text-white text-xl xl:text-lg 3xl:text-3xl"
            isLoading={isPending}
          >
            Login
          </Button>
        </HoverBorderGradient>
      </form>
    </div>
  );
}

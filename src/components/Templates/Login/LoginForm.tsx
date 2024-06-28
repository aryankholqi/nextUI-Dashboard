import { Button, Checkbox, Input } from "@nextui-org/react";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { loginProps } from "../../../interfaces/loginForm.interface";
import UserIcon from "../../../assets/icons/fill/User";
import EyeIcon from "../../../assets/icons/fill/Eye";
import { useState } from "react";
import EyeSlashIcon from "../../../assets/icons/fill/EyeSlash";

export default function LoginForm() {
  const { register, control, handleSubmit, formState: { errors } } = useForm<loginProps>()
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const submitFormHandler: SubmitHandler<loginProps> = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitFormHandler)} className="">
      <h1 className="text-primaryGreen font-poppinsMedium">Login</h1>
      <p className="text-primaryGray font-poppinsRegular capitalize">welcome back</p>
      <div className="space-y-4 mt-10">
        <Input {...register("username", {
          required: "Username Is Required"
        })}
          classNames={{
            mainWrapper: ["outline-none rounded-2xl"],
            inputWrapper: ["border-1 dark:border-black-15 rounded-2xl"],
            errorMessage: ["text-danger-600"]
          }}
          size="sm"
          className="font-poppinsRegular"
          endContent={<UserIcon />}
          isInvalid={Boolean(errors.username)}
          errorMessage={errors.username?.message}

          label={"Username"}
        />
        <Input {...register("password", {
          required: "Password Is Required"
        })}
          classNames={{
            mainWrapper: ["outline-none rounded-2xl"],
            inputWrapper: ["border-1 dark:border-black-15 rounded-2xl"],
            errorMessage: ["text-danger-600"]
          }}
          size="sm"
          type={isPasswordVisible ? "text" : "password"}
          className="font-poppinsRegular"
          endContent={isPasswordVisible ? <span className="cursor-pointer" onClick={() => setIsPasswordVisible(false)}><EyeSlashIcon /></span> : <span className="cursor-pointer" onClick={() => setIsPasswordVisible(true)}><EyeIcon /></span>}
          label={"Username"}
          isInvalid={Boolean(errors.password)}
          errorMessage={errors.password?.message}
        />
      </div>
      <Controller defaultValue={false} name="rememberMe" control={control} render={({ field: { onChange, value } }) => (
        <Checkbox className="mt-2" isSelected={value} onChange={(newValue) => onChange(newValue)} classNames={{ label: "text-white" }}>Remember Me</Checkbox>
      )} />
      <Button className="bg-primaryGreen font-poppinsRegular w-full mt-6" type="submit">Login</Button>
    </form>
  );
}

import { useMutation } from "@tanstack/react-query";
import { postLoginApi } from "../../services/api/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";
import { loginProps } from "../../interfaces/loginForm.interface";
import toast from "react-hot-toast";
import { t } from "i18next";

export const useLoginMutation = (reset: () => void) => {
  const navigate = useNavigate({ from: "/login" });

  return useMutation({
    mutationFn: (payload: loginProps) =>
      postLoginApi(payload).then((data) => data.data),
    onSuccess: (res: { token: string }) => {
      reset();
      Cookies.set("token", res.token);
      navigate({
        to: "/",
      });
      toast.success(t("loggedIn"));
    },
  });
};

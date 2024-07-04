import { useMutation } from "@tanstack/react-query";
import { postLoginApi } from "../../services/api/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";
import { loginProps } from "../../interfaces/loginForm.interface";

export const useLoginMutation = (reset: () => void) => {
  const navigate = useNavigate({ from: "/login" });

  return useMutation({
    mutationFn: (payload: loginProps) => postLoginApi(payload),
    onSuccess: (res) => {
      reset();
      Cookies.set("token", res.data.token);
      navigate({
        to: "/",
      });
    },
  });
};

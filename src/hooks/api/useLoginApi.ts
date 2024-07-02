import { useMutation } from "@tanstack/react-query";
import { postLoginApi } from "../../services/api/loginApi";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";

export const useLoginMutation = (reset: () => void) => {
  const navigate = useNavigate({ from: "/login" });

  return useMutation({
    mutationFn: () => postLoginApi(),
    onSuccess: (res) => {
      reset();
      Cookies.set("token", res.data.token);
      navigate({
        to: "/",
      });
    },
  });
};

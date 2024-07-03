import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";

export const useRevokeUser = () => {
  const navigate = useNavigate();

  const revokeUser = () => {
    try {
      Cookies.remove("token");
      navigate({ to: "/login" });
    } catch (error) {
      console.log(error);
    }
  };

  return { revokeUser };
};

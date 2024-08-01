import { redirect } from "@tanstack/react-router";
import isAuthenticated from "../utils/isAuthenticated";

export const unAuthorizedBeforeLoad = {
  beforeLoad: async () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/login",
      });
    }
  },
};

export const authorizedBeforeLoad = {
  beforeLoad: async () => {
    if (isAuthenticated()) {
      throw redirect({
        to: "/",
      });
    }
  },
};

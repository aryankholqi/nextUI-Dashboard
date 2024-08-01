import { redirect } from "@tanstack/react-router";
import isAuthenticated from "../utils/isAuthenticated";

export const authorizedBeforeLoad = {
  beforeLoad: async () => {
    console.log("trigger");

    if (!isAuthenticated()) {
      throw redirect({
        to: "/login",
      });
    }
  },
};

export const unAuthorizedBeforeLoad = {
  beforeLoad: async () => {
    if (isAuthenticated()) {
      throw redirect({
        to: "/",
      });
    }
  },
};

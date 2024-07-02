import httpService from "../httpService";

export const postLoginApi = () => {
  return httpService.post("https://fakestoreapi.com/auth/login", {
    username: "mor_2314",
    password: "83r5^_",
  });
};

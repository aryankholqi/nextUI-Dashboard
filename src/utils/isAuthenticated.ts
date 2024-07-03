import Cookies from "js-cookie";

export default function isAuthenticated() {
  const token = Cookies.get("token");

  return Boolean(token);
}

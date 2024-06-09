import Cookies from "js-cookie";

export function handleLogout() {
  Cookies.remove("token");
  window.location.href = "/authentication/sign-in";
}

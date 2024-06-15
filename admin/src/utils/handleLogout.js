import Cookies from "js-cookie";

export function handleLogout() {
  Cookies.remove("token");
  Cookies.remove("email");
  window.location.href = "/authentication/sign-in";
}

import Cookies from "js-cookie";

export function handleLogout() {
    console.log("확인")
  Cookies.remove("token");
}

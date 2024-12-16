import Cookies from "js-cookie";

const handleLogout = () => {
  const cookieRefreshToken = Cookies.get("refreshToken") || null;
  const sessionRefreshToken = sessionStorage.getItem("refreshToken") || null;

  if (cookieRefreshToken) {
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken");
    Cookies.remove("isOauth");
  }

  if (sessionRefreshToken) {
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("isOauth");

  }
};

export { handleLogout };

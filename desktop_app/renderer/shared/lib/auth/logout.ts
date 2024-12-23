import Cookies from "js-cookie";

const handleLogout = () => {
  const cookieRefreshToken = localStorage.getItem("refreshToken") || null;
  const sessionRefreshToken = sessionStorage.getItem("refreshToken") || null;

  if (cookieRefreshToken) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("isOauth");
  }

  if (sessionRefreshToken) {
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("isOauth");

  }
};

export { handleLogout };

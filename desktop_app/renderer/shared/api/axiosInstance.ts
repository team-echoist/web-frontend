import axios from "axios";
import Cookies from "js-cookie";

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});



AxiosInstance.interceptors.request.use((config) => {
  let token: string | null = sessionStorage.getItem("token");
  if (!token) {
    token = Cookies.get("token") || null;
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

AxiosInstance.interceptors.response.use(
  (response) => {
    const newToken = response.headers["authorization"];
    if (newToken) {
      const tokenValue = newToken.split(" ")[1];
      if (sessionStorage.getItem("token")) {
        sessionStorage.setItem("token", tokenValue);
      } else {
        const tenYearsFromNow = new Date(
          new Date().setFullYear(new Date().getFullYear() + 10)
        );
        Cookies.set("token", tokenValue, {
          expires: tenYearsFromNow,
          secure: true,
          sameSite: "Strict",
        });
      }
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove("token");
      sessionStorage.removeItem("token");
      window.location.href = "/web/login";
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;

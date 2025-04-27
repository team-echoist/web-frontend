import axios from "axios";
import { AxiosInstance } from "@/shared/api";

interface bodyType {
  email: string;
  password: string;
}

export const checkFirstLogin = async () => {
  const response = await AxiosInstance.get("users/check-first");
  const isFisrstLogin = response.data.data;
  return isFisrstLogin;
};

export const localLogin = async (body: bodyType, autoLoginCheck: boolean) => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "auth/login", body);
    const statusCode = response.data.statusCode;
    const data =response.data.data

    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;

    if (accessToken && refreshToken) {
      if (autoLoginCheck) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("isOauth", "yes");
      } else {
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("isOauth", "no");
      }
    } else {
      console.error("Access token or refresh token is missing from headers");
    }

    return statusCode;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
export const socialLogin = async (link: string) => {
  return (window.location.href = link);
};

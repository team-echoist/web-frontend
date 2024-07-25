import axios from "axios";
import Cookies from "js-cookie";

interface bodyType {
  email: string;
  password: string;
}

export const checkFirstLogin = async (token: string) => {
  const response = await axios.get("auth/register", {
    params: {
      token: token,
    },
  });
  const statusCode = response.data.statusCode;
  return statusCode;
};

export const localLogin = async (body: bodyType, autoLoginCheck: boolean) => {
  const response = await axios.post("/signin", body);
  const statusCode = response.data.statusCode;

  const authorization = response.headers.authorization;
  const token =
    authorization && authorization.startsWith("Bearer ")
      ? authorization.slice(7)
      : "";

  const tenYearsFromNow = new Date(
    new Date().setFullYear(new Date().getFullYear() + 10)
  );
  autoLoginCheck
    ? Cookies.set("token", token, {
        expires: tenYearsFromNow,
        secure: true,
        sameSite: "Strict",
      })
    : sessionStorage.setItem("token", token);

  return statusCode;
};

export const socialLogin = async (link: string) => {
  return window.location.href = link;
};

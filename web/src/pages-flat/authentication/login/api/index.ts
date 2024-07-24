import axios from "axios";
import Cookies from "js-cookie";

interface bodyType {
  email: string;
  password: string;
}

export const checkFirstLogin = async (token: string) => {
  const response = await axios.get("/checkfirstlogin", {
    params: {
      token: token,
    },
  });
  const statusCode = response.data.statusCode;
  return statusCode;
};

export const localLogin = async (body: bodyType) => {
  const response = await axios.post("/signin", body);
  const statusCode = response.data.statusCode;

  const authorization = response.headers.authorization;
  const token =
    authorization && authorization.startsWith("Bearer ")
      ? authorization.slice(7)
      : "";
  Cookies.set("token", token, { secure: true, sameSite: "Strict" });

  return statusCode;
};

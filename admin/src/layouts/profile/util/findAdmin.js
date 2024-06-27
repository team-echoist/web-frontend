import Cookies from "js-cookie";

export const findAdmin = (data) => {
  const email = Cookies.get("email");

  const adminInfoObj = data.find((item) => {
    return item["email"] === email;
  });

  return adminInfoObj;
};

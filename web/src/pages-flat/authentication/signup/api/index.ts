import axios from "axios";

interface bodyType {
  email: string;
  password: string;
}

export const submitSignupForm = async (body: bodyType) => {
  const response = await axios.post("/emailcheck", body);
  const statusCode = response.data.statusCode;
  return statusCode;
};

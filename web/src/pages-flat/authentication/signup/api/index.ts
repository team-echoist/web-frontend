import axios from "axios";

interface bodyType {
  email: string;
  password: string;
}

export const submitSignupForm = async (body: bodyType) => {
    try {
        const response = await axios.post("/emailcheck", body);
        const statusCode = response.data.statusCode;
        return statusCode;
      } catch (error) {
        console.error("Error response:", error);
        throw error;
      }
};

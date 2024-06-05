import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://www.linkedoutapp.com/api",
});

// 토큰 인터셉터
AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

AxiosInstance.interceptors.response.use((response) => {
  const newToken = response.headers["Authorization"];
  if (newToken) {
    const tokenValue = newToken.split(" ");
    const oldToken = localStorage.getItem("token");

    if (oldToken != tokenValue) {
      console.log(
        `토큰 갱신 완룡, 이전 토큰, ${oldToken} 뉴 토큰~ ${tokenValue}`
      );

      localStorage.setItem("token", tokenValue);
    }
    return response;
  }
});

export default AxiosInstance;

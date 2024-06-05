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

export default AxiosInstance;

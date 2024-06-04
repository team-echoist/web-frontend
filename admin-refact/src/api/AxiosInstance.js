import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "/api1",
});

// 토큰 인터셉터
AxiosInstance.interceptors.request.use((config) => {
  // localStorage에서 token 가져오깅
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default AxiosInstance;

import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "/api1"
});

AxiosInstance.interceptors.request.use((config) => {
  const tempToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbGlua2Vkb3V0YXBwLmNvbSIsImlhdCI6MTcxNzM3NTg3MywiZXhwIjoxNzE3NDYyMjczfQ.Y46kS91Ac-ZNs8NpEIz4zuppZ_HQgPZLnFlpYt9eErg";
  // 로그인 구현되면 하드코딩 걷어낼예정
  config.headers.Authorization = `Bearer ${tempToken}`;
  return config
});

export default AxiosInstance;
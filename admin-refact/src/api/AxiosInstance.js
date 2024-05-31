import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "/api1"
});

AxiosInstance.interceptors.request.use((config) => {
  const tempToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbGlua2Vkb3V0YXBwLmNvbSIsImlhdCI6MTcxNzEyOTQ0OCwiZXhwIjoxNzE3MjE1ODQ4fQ.xdIhxxj4pN676kZthycAnmtrrF9LdVzOzmW8AquC4yg ";
  // 로그인 구현되면 하드코딩 걷어낼예정
  config.headers.Authorization = `Bearer ${tempToken}`;
  return config
});

export default AxiosInstance;
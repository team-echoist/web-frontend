import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/",
});

AxiosInstance.interceptors.request.use((config) => {
  const tempToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbGlua2Vkb3V0YXBwLmNvbSIsImlhdCI6MTcxNTg2OTkzNywiZXhwIjoxNzE1OTU2MzM3fQ._5goGeo_bccmtF20aTu20770ZX86pwWmvVbz5QBXiOo";
  // token 오는거 보고 재세팅
  config.headers.Authorization = `Bearer ${tempToken}`;
});

export default AxiosInstance;

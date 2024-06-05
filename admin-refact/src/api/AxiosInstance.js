import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://www.linkedoutapp.com/api",
});

AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 서버로부터의 모든 응답 후에 실행
AxiosInstance.interceptors.response.use(
  (response) => {
    const newToken = response.headers["Authorization"];
    if (newToken) {
      const tokenValue = newToken.split(" ")[1];
      localStorage.setItem("token", tokenValue);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 토큰을 인위적으로 만료시키는 함수(테스트용)
const expireToken = () => {
  localStorage.removeItem("token");
};

setTimeout(expireToken, 10000);

export default AxiosInstance;

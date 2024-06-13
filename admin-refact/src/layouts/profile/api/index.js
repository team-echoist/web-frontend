import AxiosInstance from "../../../api/AxiosInstance";

export const fetchData = async (url, method, body, options = {}) => {
  if (!url || !method) {
    throw new Error("URL과 메서드가 필요합니다.");
  }

  const response = body
    ? await AxiosInstance[method](url, body, options)
    : await AxiosInstance[method](url, options);

  const data = response.data.data;
  const status = response.data.statusCode;

  return { data: data, status: status };
};
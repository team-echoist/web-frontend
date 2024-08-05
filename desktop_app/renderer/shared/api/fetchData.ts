import AxiosInstance from "./axiosInstance";
import { AxiosRequestConfig, Method } from "axios";

interface FetchDataResponse<T> {
  data: T;
  status: number;
}

export const fetchData = async <T>(
  url: string,
  method: Method,
  body?: any,
  options: AxiosRequestConfig = {}
): Promise<FetchDataResponse<T>> => {
  if (!url || !method) {
    throw new Error("URL과 메서드가 필요합니다.");
  }

  const config: AxiosRequestConfig = {
    ...options,
    params: options.params || {},
  };

  const response = await AxiosInstance({
    method: method,
    url: url,
    data: body,
    ...config,
  });

  const data = response.data.data as T;
  const status = response.data.statusCode;

  return { data, status };
};
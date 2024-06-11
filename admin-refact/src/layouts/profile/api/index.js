import AxiosInstance from "../../../api/AxiosInstance";

export const fetchData = async (url) => {
  const response = await AxiosInstance.get(url);
  const data = response.data.data;
  return data
};

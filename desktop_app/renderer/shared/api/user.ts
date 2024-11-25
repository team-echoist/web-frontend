import { fetchData } from "./fetchData";


export const getUserProfile = async (id: number) => {
  try {
    const { data, status } = await fetchData<any>(`users/profile/${id}`, "get");
    return { data: data.essayStats, status: status };
  } catch (err) {
    return { data: [], status: 500 };
  }
};

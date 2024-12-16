import { fetchData } from "@/shared/api/fetchData";

export const getGeuloquis = async () => {
  try {
    const { data, status } = await fetchData<any>("home/geulroquis", "get");
    return { url: data.url, status: status };
  } catch (err) {
    return { status: 500, url: null };
  }
};

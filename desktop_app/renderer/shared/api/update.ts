import { fetchData } from "@/shared/api/fetchData";

export const getLatestReleases = async () => {
  try {
    const { data, status } = await fetchData<any>(
      `support/releases/latest`,
      "get"
    );
    return { data: data.newRelease, status: status };
  } catch (err) {
    return { status: 500, data: [] };
  }
};

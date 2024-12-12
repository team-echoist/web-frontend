import { fetchData } from "@/shared/api/fetchData";
import { ReleasesResponse } from "../types";

export const getReleases = async (page: number, limit: number) => {
  try {
    const params = {
      page: page,
      limit: limit,
    };
    const { data, status } = await fetchData<ReleasesResponse>(
      `support/releases`,
      "get",
      null,
      { params }
    );
    return { data: data?.releases, status: status };
  } catch (err) {
    return { status: 500, data: [] };
  }
};

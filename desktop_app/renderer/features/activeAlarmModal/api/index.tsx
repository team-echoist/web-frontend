import { fetchData } from "@/shared/api/fetchData";
import { pageType, Alert, AlarmListResponse } from "@/shared/types";

export const getAlramList = async ({
  page,
  limit,
}: pageType): Promise<Alert[]> => {
  try {
    const { data } = await fetchData<AlarmListResponse>("alerts", "get");
    return data?.alerts || [];
  } catch (err) {
    console.log("Err", err);
    return [];
  }
};

export const getUnreadList = async () => {};

export const changeReadList = async () => {};

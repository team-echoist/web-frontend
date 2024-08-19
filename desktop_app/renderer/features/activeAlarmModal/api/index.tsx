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

export const updateReadStatus = async (id: number, getList: () => void) => {
  try {
    const { status } = await fetchData(`alerts/read/${id}`, "patch");
    if(status ===204){
      getList();
    }
    console.log("status", status);
  } catch (err) {
    console.log("Err", err);
  }
};

import { fetchData } from "@/shared/api/fetchData";
import { pageType, Alert, AlarmListResponse } from "@/shared/types";

interface AlarmListResult {
  alerts: Alert[];
  totalPage: number;
}

export const getAlramList = async ({
  page,
  limit,
}: pageType): Promise<AlarmListResult> => {
  try {
    const params = {
      page: page,
      limit: limit,
    };
    const { data } = await fetchData<AlarmListResponse>(`alerts`, "get", null, {
      params,
    });

 
    return { alerts: data?.alerts || [], totalPage: data?.totalPage || 0 };
  } catch (err) {
    console.log("Err", err);
    return { alerts: [], totalPage: 0 }; 
};
}
export const updateReadStatus = async (id: number, getList: () => void) => {
  try {
    const { status } = await fetchData(`alerts/read/${id}`, "patch");
    if (status === 204) {
      getList();
    }
    console.log("status", status);
  } catch (err) {
    console.log("Err", err);
  }
};

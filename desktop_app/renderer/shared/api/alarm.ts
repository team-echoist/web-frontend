import { fetchData } from "@/shared/api/fetchData";

export const getAlarmSettings = async () => {
  try {
    const { data, status } = await fetchData<any>("support/settings", "get");
    return { data: data, status: status };
  } catch (err) {
    return { data: {}, status: 500 };
  }
};
export const postAlarmSettings = async (body: {
  viewed: boolean;
  report: boolean;
  marketing: boolean;
}) => {
  try {
    const { status } = await fetchData<any>(
      "support/settings",
      "post",
      body
    );
    return { status: status };
  } catch (err) {
    return { data: {}, status: 500 };
  }
};

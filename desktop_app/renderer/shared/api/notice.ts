import { fetchData } from "@/shared/api/fetchData";

export const getNotices = async () => {
  try {
    const { data, status } = await fetchData<any>(
      `support/notices/latest`,
      "get"
    );
    return { data: data?.newNotice, status: status };
  } catch (err) {
    return { status: 500, data: [] };
  }
};

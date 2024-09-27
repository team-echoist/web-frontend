import { fetchData } from "@/shared/api/fetchData";

export const getEssayDetail = async (
  pageType: string,
  essayId: number,
  storyId: number | null
) => {
  try {
    const params = {
      pageType: pageType,
      ...(storyId && { storyId: storyId }),
    };
    const { data: detailData, status: detailStatus } = await fetchData<any>(
      `essays/${essayId}`,
      "get",
      null,
      { params }
    );
    return { data: detailData, status: detailStatus };
  } catch (err) {
    return { data: [], status: 500 };
  }
};

export const getEssays = async (
  page: number,
  limit: number,
  pageType: string,
  storyId?: number
) => {
  try {
    const params = {
      page: page,
      limit: limit,
      pageType: pageType,
      ...(storyId && { storyId: storyId }),
    };
    const { data } = await fetchData("essays", "get", null, { params });
    return { data: data };
  } catch (err) {
    return { data: [] };
  }
};

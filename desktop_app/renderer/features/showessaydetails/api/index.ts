import { fetchData } from "@/shared/api/fetchData";
import { Essay } from "@/shared/types";

interface dataType {
  essays: Essay[];
  page: number;
  total: number;
  totalPage: number;
}

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
    const { data } = await fetchData<dataType>("essays", "get", null, {
      params,
    });
    return { data: data.essays, totalPage: data.totalPage };
  } catch (err) {
    return { data: [], totalPage: 1 };
  }
};

export const getRandomEssays = async () => {
  try {
    const params = {
      limit: 4,
    };
    const { data } = await fetchData<dataType>(
      "essays/recommend",
      "get",
      null,
      {
        params,
      }
    );
    return { data: data.essays };

  } catch (err) {
    return { data: [] };
  }
};

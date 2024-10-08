import { Essay } from "@/shared/types";
import { fetchData } from "@/shared/api/fetchData";

interface dataType {
  essay: Essay;
  anotherEssays: { essays: Essay[] };
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
    const { data: detailData, status: detailStatus } =
      await fetchData<dataType | null>(`essays/${essayId}`, "get", null, {
        params,
      });
    return { data: detailData, status: detailStatus };
  } catch (err) {
    return { data: null, status: 500 };
  }
};

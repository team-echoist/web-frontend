import { Essay } from "@/shared/types";
import { fetchData } from "@/shared/api/fetchData";

interface dataType {
  essay: Essay;
  anotherEssays: { essays: Essay[] };
}
interface bodyType {
  title?: string;
  content?: string;
  status?: string;
  tags?: string[];
  location?: string;
  thumbnail?: string;
}
type ImageResponse = {
  imageUrl: string;
};
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

export const updateEssayDetail = async (
  formData: FormData | null,
  body: bodyType,
  essayId: number
) => {
  try {
    if (formData) {
      const formDataEmpty = Array.from(formData.entries()).reduce(
        (acc, [key, value]) => {
          return false;
        },
        true
      );

      if (!formDataEmpty) {
        const { data: imageData, status: imageStatus } =
          await fetchData<ImageResponse>("essays/images", "post", formData);
        if (imageStatus === 201) {
          body.thumbnail = imageData.imageUrl;
        }
      }
    }
    const { data, status } = await fetchData(`essays/${essayId}`, "put", body);
    return { data, status };
  } catch (err) {
    console.log("err", err);
    return { data: null, status: 500 };
  }
};

export const addEssayBookMark = async (id: number) => {
  try {
    const { status } = await fetchData(`bookmarks/${id}`, "post");
    return { status: status };
  } catch (err) {
    return { status: 500 };
  }
};

export const deleteEssayBookMark = async (id: number) => {
  try {
    const body = {
      essayIds: [id],
    };
    const { status } = await fetchData(`bookmarks`, "put", body);
    return { status: status };
  } catch (err) {
    return { status: 500 };
  }
};

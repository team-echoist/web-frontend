import { fetchData } from "./fetchData";
import { storyType } from "../types";
import { Essay } from "../types";

interface dataType {
  stories: storyType[];
}

export const getStories = async () => {
  try {
    const { data } = await fetchData<dataType>("stories", "get");
    return { data: data.stories };
  } catch (err) {
    console.log(err);
    return { data: [] };
  }
};

export const getNotIncludedEssay = async (storyId?: number) => {
  try {
    const params = {
      ...(storyId && { storyId: storyId }),
    };
    const { data } = await fetchData<{ essays: Essay[] }>(
      "stories/related",
      "get",
      null,
      {
        params,
      }
    );
    return { data: data.essays };
  } catch (err) {
    console.log(err);
    return { data: [] };
  }
};

export const postStory = async (title: string, essay: Essay[]) => {
  try {
    const essayIds = essay
    .filter((item) => item.isChecked)
    .map((item) => item.id);
    const body = {
      name: title,
      essayIds: essayIds,
    };
    const { status, data } = await fetchData("stories", "post", body);
    return { status: status, data: data };
  } catch (err) {
    return { status: 500 };
  }
};

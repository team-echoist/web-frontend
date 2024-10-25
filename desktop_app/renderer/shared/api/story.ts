import { fetchData } from "./fetchData";
import { storyType } from "../types";

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

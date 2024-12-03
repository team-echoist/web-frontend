import { fetchData } from "@/shared/api/fetchData";
import { Badge } from "../types";

interface BadgeResponse {
  badges: Badge[];
}

export const getBadges = async () => {
  try {
    const { data, status } = await fetchData<BadgeResponse>("badges", "get");

    return { data: data.badges, status: status };
  } catch (err) {
    return { data: [], status: 500 };
  }
};
export const getBadgeDetails = async () => {
  try {
    const { data, status } = await fetchData<BadgeResponse>(
      "badges/detail",
      "get"
    );

    return { data: data.badges, status: status };
  } catch (err) {
    return { data: [], status: 500 };
  }
};
export const postBadgeLevelup = async (badgeId: number) => {
  try {
    const { status } = await fetchData<BadgeResponse>(
      `badges/level/${badgeId}`,
      "post"
    );

    return {  status: status };
  } catch (err) {
    return { data: [], status: 500 };
  }
};

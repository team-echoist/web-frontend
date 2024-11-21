import { fetchData } from "@/shared/api/fetchData";
import { Users } from "../types";

interface UserType {
  followings: Users;
}

export const getFollows = async () => {
  try {
    const { data, status } = await fetchData<UserType>(`follows`, "get");
    return { data: data?.followings, status: status };
  } catch (err) {
    return { data: null, status: 500 };
  }
};

export const postFollows = async (userId: number) => {
  try {
    const { status } = await fetchData(`follows/${userId}`, "post");
    return { status: status };
  } catch (err) {
    return { status: 500 };
  }
};

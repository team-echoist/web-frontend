import { fetchData } from "./fetchData";

interface User {
  email?: string;
  nickname?: string;
  password?: string;
  gender?: string;
  profileImage?: string;
  birthDate?: string;
  isFirst?: boolean;
  locationConsent?: boolean;
}

export const getUserProfile = async (id: number) => {
  try {
    const { data, status } = await fetchData<any>(`users/profile/${id}`, "get");
    return { data: data.essayStats, status: status };
  } catch (err) {
    return { data: [], status: 500 };
  }
};

export const putUserInfo = async (body: User) => {
  try {
    const { status, data } = await fetchData<any>(`users`, "put", body);
    return { status: status, data: data };
  } catch (err) {
    return { status: 500 };
  }
};

export const postImages = async (image: FormData) => {
  try {
    const { status, data } = await fetchData<any>(
      `users/images`,
      "post",
      image
    );
    return { status: status, data: data };
  } catch (err) {
    return { status: 500 };
  }
};

export const postWithdraw = async (reason: string) => {
  try {
    const { status } = await fetchData<any>(
      `auth/deactivate`,
      "post",
      reason
    );
    return { status: status};
  } catch (err) {
    return { status: 500 };
  }
};

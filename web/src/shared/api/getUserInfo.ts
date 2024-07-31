import AxiosInstance from "./axiosInstance";

interface UserData {
    id: number;
    email: string;
    nickname: string;
    profileImage: string;
    createdDate: string;
  }

export const getUserInfo = async (id: number) => {
  try {
    const response = await AxiosInstance.get(`users/${id}`);
    const data = response.data.data.user;
    const userData: UserData = {
        id: data.id,
        email: data.email,
        nickname: data.nickname,
        profileImage: data.profileImage,
        createdDate: data.createdDate,
      };
  
      return userData;
    
  } catch (err) {
    console.log("err", err);
  }
};


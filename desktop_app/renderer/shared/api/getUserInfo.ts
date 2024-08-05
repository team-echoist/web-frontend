import AxiosInstance from "./axiosInstance";

interface UserData {
    id: number;
    email: string;
    nickname: string;
    profileImage: string;
    createdDate: string;
    isFirst: boolean;
    locationConsent: boolean;
  }

export const getUserInfo = async () => {
  try {
    const response = await AxiosInstance.get(`users/info`);
    const data = response.data.data;
    const userData: UserData = {
        id: data.id,
        email: data.email,
        nickname: data.nickname,
        profileImage: data.profileImage,
        createdDate: data.createdDate,
        isFirst:data.isFirst,
        locationConsent:data.locationConsent
      };
  
      return userData;
    
  } catch (err) {
    console.log("err", err);
  }
};


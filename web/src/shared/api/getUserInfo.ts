import AxiosInstance from "./axiosInstance";

export const getUserInfo = async (id: number) => {
  try {
    const response = await AxiosInstance.get(`users/${id}`, {
      params: {
        userId: id,
      },
    });
    console.log("response: " + response);
  } catch (err) {
    console.log("err", err);
  }
};


// useEffect(()=>{
//     const token = sessionStorage.getItem('token') || Cookies.get('token');
//     if (token) {
//       const userInfo = parseJwt(token);
//       const userId = getUserInfo(userInfo?.id);
//       console.log("token", token);
//       console.log("userId", userId);
//     } else {
//       console.error("No token found");
//     }
//   },[])
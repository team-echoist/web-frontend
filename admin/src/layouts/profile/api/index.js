<<<<<<< HEAD
import AxiosInstance from "../../../api/AxiosInstance"

export const fetchProfileData = (id) =>{
    const response = AxiosInstance.get("/api/v1/users/profile");
}

export const fetchAdminList = async() =>{
    const response =await AxiosInstance.get("/admin",{
        params:{
            active:true
        }
    })

    
}
=======
import AxiosInstance from "../../../api/AxiosInstance";

export const fetchData = async (url, method, body, options = {}) => {
  if (!url || !method) {
    throw new Error("URL과 메서드가 필요합니다.");
  }

  const config = {
    ...options, 
    params: options.params || {}, 
  };

  const response = await AxiosInstance[method](url, body, config)


  const data = response.data.data;
  const status = response.data.statusCode;

  return { data: data, status: status };
};
>>>>>>> 9fe0442ce9f60ebae90524e6eba4de5d1e166c4b

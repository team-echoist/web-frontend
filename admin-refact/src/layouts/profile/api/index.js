import AxiosInstance from "../../../api/AxiosInstance"

export const fetchProfileData = (id) =>{
    const response = AxiosInstance.get("/api/v1/users/profile");
}


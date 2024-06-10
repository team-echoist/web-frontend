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

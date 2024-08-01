// 프로필 및 링크드아웃 지수 api

import AxiosInstance from "@/shared/api/axiosInstance"

export const fetchUserStatistics = async () => {
    try {
        const response = await AxiosInstance.get("/users/statistics")
        return response.data
    } catch (err) {
        console.error("Error fetching user statistics", err)
        throw err
    }
}

// 상점 api 요청
// export const fetchShopContent = async () => {
//     try {
//         const response = await AxiosInstance.get("/shop/content")
//         return response.data
//     } catch (err) {
//         console.error("Error fetching shop content", err)
//         throw err
//     }
// }

export { AxiosInstance }

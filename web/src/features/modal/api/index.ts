import AxiosInstance from "@/shared/api/axiosInstance"

// 모달 관련 api 모아두기
// TODO : 다크모드, 라이트모드, 각종 알림 조회 api, 알림 허용 시간, 문의 내역 목록 및 답변 확인

export const fetchHelpCenterInquiries = async () => {
    try {
        const response = await AxiosInstance.get("/support/inquiries")
        return response.data.data
    } catch (err) {
        console.error("Error fetching help center inquiries", err)
        throw err
    }
}

export const fetchNotices = async () => {
    try {
        const response = await AxiosInstance.get("/support/notices")
        return response.data.data
    } catch (error) {
        console.error("Error fetching notices:", error)
        throw error
    }
}

export { AxiosInstance }

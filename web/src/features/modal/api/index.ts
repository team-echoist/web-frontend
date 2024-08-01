import AxiosInstance from "@/shared/api/axiosInstance"

// 모달 관련 api 모아두기
// TODO : 다크모드, 라이트모드, 각종 알림 조회 api, 알림 허용 시간, 문의 내역 목록 및 답변 확인

export const fetchCustomerSupportContent = async () => {
    try {
        const response = await AxiosInstance.get("/support/customer-support")
        return response.data
    } catch (err) {
        console.error("Error fetching customer support content", err)
        throw err
    }
}

export const fetchHelpCenterInquiries = async () => {
    try {
        const response = await AxiosInstance.get("/support/inquiries")
        return response.data
    } catch (err) {
        console.error("Error fetching help center inquiries", err)
        throw err
    }
}

export { AxiosInstance }

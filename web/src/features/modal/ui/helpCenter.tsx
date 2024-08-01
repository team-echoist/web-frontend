// src/features/modal/ui/helpCenter.tsx
"use client"
import { useEffect, useState } from "react"
import styled from "styled-components"
import HelpCenterHeader from "@/features/modal/ui/helpCenterHeader"
import { fetchHelpCenterInquiries } from "../api"

interface Inquiry {
    id: number
    title: string
    createdDate: string
    processed: boolean
    user: {
        id: number
        email: string
        nickname: string
        profileImage: string
        createdDate: string
    }
}

interface HelpCenterProps {
    title: string
    onClose: () => void
}

const HelpCenterContainer = styled.section`
    color: white;
`

const NoInquiriesMessage = styled.div`
    color: #888;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    margin-top: 20px;
`

const InquiryList = styled.ul`
    padding: 20px;
    list-style: none;
`

const InquiryItem = styled.li`
    margin-bottom: 20px;
    border-bottom: 1px solid #191919;
    padding-bottom: 20px;

    h3 {
        color: #fff;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    p {
        color: #888;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
    }
`

const HelpCenter = ({ title, onClose }: HelpCenterProps) => {
    const [inquiries, setInquiries] = useState<Inquiry[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const data = await fetchHelpCenterInquiries()
                setInquiries(data)
            } catch (err: unknown) {
                if (err) {
                    setError("문의 목록을 불러오는 데 실패했습니다.")
                }
            } finally {
                setLoading(false)
            }
        }

        fetchInquiries()
    }, [])

    return (
        <HelpCenterContainer>
            <HelpCenterHeader title={title} onClose={onClose} />
            <h2>1:1 문의 내역</h2>
            {inquiries.length === 0 ? (
                <NoInquiriesMessage>문의 내역이 없습니다</NoInquiriesMessage>
            ) : (
                <InquiryList>
                    {inquiries.map((inquiry) => (
                        <InquiryItem key={inquiry.id}>
                            <h3>{inquiry.title}</h3>
                            <p>작성일: {new Date(inquiry.createdDate).toLocaleDateString()}</p>
                            <p>처리 상태: {inquiry.processed ? "처리 완료" : "처리 중"}</p>
                            <p>
                                작성자: {inquiry.user.nickname} ({inquiry.user.email})
                            </p>
                        </InquiryItem>
                    ))}
                </InquiryList>
            )}
        </HelpCenterContainer>
    )
}

export default HelpCenter

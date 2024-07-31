"use client"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { HelpCenterHeader } from "./shared/ui/HelpCenterHeader"

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

const NoInquiriesMessage = styled.div`
    color: #888;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
`

const HelpCenter = ({ title, onClose }: HelpCenterProps) => {
    const [inquiries, setInquiries] = useState<Inquiry[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const response = await fetch("https://linkedoutapp.com/api/support/inquiries")
                if (!response.ok) {
                    throw new Error("문의 목록을 불러오는 데 실패했습니다.")
                }
                const data = await response.json()
                setInquiries(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchInquiries()
    }, [])

    if (loading) {
        return <h2>로딩 중...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <header>
            <HelpCenterHeader title={title} onClose={onClose} />
            <h2>1:1 문의 내역</h2>
            {inquiries.length === 0 ? (
                <div>
                    <HelpCenterHeader title={title} onClose={onClose} />
                    <NoInquiriesMessage>문의 내역이 없습니다</NoInquiriesMessage>
                </div>
            ) : (
                <ul>
                    {inquiries.map((inquiry) => (
                        <li key={inquiry.id}>
                            <h3>{inquiry.title}</h3>
                            <p>작성일: {new Date(inquiry.createdDate).toLocaleDateString()}</p>
                            <p>처리 상태: {inquiry.processed ? "처리 완료" : "처리 중"}</p>
                            <p>
                                작성자: {inquiry.user.nickname} ({inquiry.user.email})
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}

export default HelpCenter

"use client"
import styled from "styled-components"
import { ModalHeader } from "../shared/ModalHeader"
import ToDetailButton from "@/shared/assets/img/to_detail_button.png"
import Image from "next/image"
import { useState } from "react"
import HelpCenter from "./HelpCenter"

// 링크드아웃 고객센터 > 1:1 문의 내역 페이지

const CustomerSupportSection = styled.section`
    height: 100vh;
`

const CustomerSupportDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

const CustomerSupportP = styled.p`
    flex-grow: 1;
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`

const CustomerSupportButton = styled(Image)`
    width: 30px;
    height: 30px;
    cursor: pointer;
`

interface CustomerSupportContentProps {
    onClose: () => void
}

const supportItems = [{ label: "링크드아웃 고객센터" }, { label: "공지사항" }, { label: "법적 고지" }]

export const CustomerSupportContent = ({ onClose }: CustomerSupportContentProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState<{ label: string } | null>(null)

    const handleItemClick = (item: { label: string }) => {
        setSelectedItem(item)
        setIsModalOpen(true)
    }

    return (
        <CustomerSupportSection>
            <ModalHeader title="고객지원" onClose={onClose} />
            {supportItems.map((item, index) => (
                <CustomerSupportDiv key={index}>
                    <CustomerSupportP>{item.label}</CustomerSupportP>
                    <CustomerSupportButton
                        src={ToDetailButton}
                        alt="상세보기 버튼"
                        onClick={() => handleItemClick(item)}
                    />
                </CustomerSupportDiv>
            ))}

            {isModalOpen && selectedItem && (
                <HelpCenter title={selectedItem.label} onClose={() => setIsModalOpen(false)} />
            )}
        </CustomerSupportSection>
    )
}

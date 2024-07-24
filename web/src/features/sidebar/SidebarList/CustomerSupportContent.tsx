"use client"
import styled from "styled-components"
import { ModalHeader } from "./shared/ModalHeader"
import ToDetailButton from "@/shared/assets/img/to_detail_button.png"
import Image from "next/image"

interface CustomerSupportContentProps {
    onClose: () => void
}

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

export const CustomerSupportContent = ({ onClose }: CustomerSupportContentProps) => {
    return (
        <CustomerSupportSection>
            <ModalHeader title="고객지원" onClose={onClose} />
            <CustomerSupportDiv>
                <CustomerSupportP>링크드아웃 고객센터</CustomerSupportP>
                <CustomerSupportButton src={ToDetailButton} alt="프로필 상세보기 버튼" />
            </CustomerSupportDiv>
            <CustomerSupportDiv>
                <CustomerSupportP>공지사항</CustomerSupportP>
                <CustomerSupportButton src={ToDetailButton} alt="프로필 상세보기 버튼" />
            </CustomerSupportDiv>
            <CustomerSupportDiv>
                <CustomerSupportP>법적 고지</CustomerSupportP>
                <CustomerSupportButton src={ToDetailButton} alt="프로필 상세보기 버튼" />
            </CustomerSupportDiv>
        </CustomerSupportSection>
    )
}

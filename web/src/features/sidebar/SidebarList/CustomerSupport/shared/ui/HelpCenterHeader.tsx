"use client"
import React from "react"
import styled from "styled-components"
import BackArrowButton from "@/shared/assets/img/back_arrow.svg"

// 고객센터 상세 페이지들 공통 헤더
// 링크드아웃 고객센터, 공지사항, 법적 고지

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

const Title = styled.h2`
    color: #fff;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin: 0 auto;
    text-align: center;
`

const BackArrow = styled(BackArrowButton)`
    width: 24px;
    height: 20.5px;
    stroke-width: 2px;
    stroke: #fff;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`

interface HelpHeaderProps {
    title: string
    onClose: () => void
}

export const HelpCenterHeader = ({ title, onClose }: HelpHeaderProps) => {
    return (
        <HeaderContainer>
            <BackArrow onClick={onClose} />
            <Title>{title}</Title>
        </HeaderContainer>
    )
}

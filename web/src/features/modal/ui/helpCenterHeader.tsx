"use client"
import React from "react"
import styled from "styled-components"
import BackIcon from "@/shared/assets/img/back_arrow.svg"

interface HelpCenterHeaderProps {
    title: string
    onClose: () => void
}

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #121212;
    border-bottom: 1px solid #191919;
`

const BackButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 20px;

    img {
        width: 24px;
        height: 24px;
    }
`

const Title = styled.h2`
    color: #fff;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    margin: 0;
`

const HelpCenterHeader = ({ title, onClose }: HelpCenterHeaderProps) => {
    return (
        <HeaderContainer>
            <BackButton onClick={onClose}>
                <img src={BackIcon} alt="뒤로 가기" />
            </BackButton>
            <Title>{title}</Title>
        </HeaderContainer>
    )
}

export default HelpCenterHeader

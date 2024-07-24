"use client"
import React from "react"
import styled from "styled-components"

interface ModalHeaderProps {
    title: string
    onClose: () => void
}

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

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #ffffff;
    margin-right: 38px;
`

export const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
            <CloseButton onClick={onClose}>X</CloseButton>
        </HeaderContainer>
    )
}

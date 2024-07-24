"use client"
import styled from "styled-components"

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: calc(100% - 376px);
    margin-left: 376px;
    // background: ${({ theme }) => (theme.isDarkMode ? "#121212" : "#fff")};
    display: flex;
    justify-content: center;
    z-index: 1200;
`

export const ModalContent = styled.div`
    padding-top: 34px;
    position: relative;
    width: 90%;
    background: #121212;
`

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    // color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#000")};
    color: #ffffff
    width: 24px;
    height: 24px;
`

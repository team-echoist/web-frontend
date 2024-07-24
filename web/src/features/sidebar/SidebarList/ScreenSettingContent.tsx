"use client"
import React from "react"
import styled from "styled-components"
import { useThemeStore } from "@/shared/store/store"
import DarkModeIcon from "@/shared/assets/img/darkModeIcon.svg"
import LightModeIcon from "@/shared/assets/img/lightModeIcon.svg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: ${({ theme }) => (theme.isDarkMode ? "#000" : "#fff")};
    background-color: #000;
`

const ModeTitle = styled.h2`
    color: #fff;

    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
`

const ModeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

const ModeItem = styled.label<{ selected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    opacity: ${({ selected }) => (selected ? 1 : 0.5)};

    img {
        width: 100px;
        height: 150px;
    }

    p {
        margin-top: 10px;
    }

    input {
        display: none;
    }
`

export const ScreenSettingContent = () => {
    const { isDarkMode, toggleTheme } = useThemeStore()

    return (
        <Container>
            <ModeTitle>화면</ModeTitle>
            <ModeContainer>
                <ModeItem selected={!isDarkMode}>
                    <input type="radio" name="theme" checked={!isDarkMode} onChange={toggleTheme} />
                    <LightModeIcon />
                    <p>라이트모드</p>
                </ModeItem>
                <ModeItem selected={isDarkMode}>
                    <input type="radio" name="theme" checked={isDarkMode} onChange={toggleTheme} />
                    <DarkModeIcon />
                    <p>다크모드</p>
                </ModeItem>
            </ModeContainer>
        </Container>
    )
}

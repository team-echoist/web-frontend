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
    color: ${({ theme }) => (theme.isDarkMode ? "#000" : "#fff")};
`

const Title = styled.h2`
    margin-bottom: 20px;
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
            <Title>화면 설정</Title>
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

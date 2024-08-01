"use client"
import React, { useState } from "react"
import styled from "styled-components"
import { useTheme } from "@/shared/lib/theme/useTheme"
import DarkModeIcon from "@/shared/assets/img/darkModeIcon.svg"
import LightModeIcon from "@/shared/assets/img/lightModeIcon.svg"
import YesCheck from "@/shared/assets/img/screen_setting_yescheck.svg"
import NoCheck from "@/shared/assets/img/screen_setting_nocheck.svg"
import ModalHeader from "../../modal/ui/modalHeader"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    color: #ffffff;
    margin: 34px 249px 0 249px;
`

const ModeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 70px;
`

const ModeItem = styled.label<{ selected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin: 0 40px;
    transition: opacity 0.3s ease;

    input[type="radio"] {
        display: none;
    }

    p {
        margin: 10px 0;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        color: #fff;
        line-height: 150%;
    }
`

interface ScreenSettingContentProps {
    onClose: () => void
}

export const ScreenSettingContent = ({ onClose }: ScreenSettingContentProps) => {
    const { theme, onChangeTheme } = useTheme()
    const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">(theme)

    const handleThemeChange = (theme: "light" | "dark") => {
        setSelectedTheme(theme)
        onChangeTheme()
    }

    return (
        <>
            <ModalHeader title="화면" onClose={onClose} />
            <Container>
                <ModeContainer>
                    <ModeItem selected={selectedTheme === "light"}>
                        <LightModeIcon />
                        <p>라이트모드</p>
                        <input
                            type="radio"
                            name="theme"
                            checked={selectedTheme === "light"}
                            onChange={() => handleThemeChange("light")}
                        />
                        {selectedTheme === "light" ? <YesCheck /> : <NoCheck />}
                    </ModeItem>
                    <ModeItem selected={selectedTheme === "dark"}>
                        <DarkModeIcon />
                        <p>다크모드</p>
                        <input
                            type="radio"
                            name="theme"
                            checked={selectedTheme === "dark"}
                            onChange={() => handleThemeChange("dark")}
                        />
                        {selectedTheme === "dark" ? <YesCheck /> : <NoCheck />}
                    </ModeItem>
                </ModeContainer>
            </Container>
        </>
    )
}

"use client"

import React, { FC } from "react"
import * as Styled from "./sidebar.styled"

interface ISidebar {
    readonly onClick?: () => void
}

export const Sidebar: FC<ISidebar> = (props) => {
    const { onClick } = props
    return (
        <Styled.SidebarStyled onClick={onClick}>
            <Styled.SidebarImage src="../public/assets/img/hamburger_button.svg" alt="Hamburger Button" />
            <h1>사이드바입니당</h1>
        </Styled.SidebarStyled>
    )
}

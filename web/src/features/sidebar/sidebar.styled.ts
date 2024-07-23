"use client"
import styled from "styled-components"
import { Button } from "@/shared/ui/button"

// TODO : 설정 추가 font-family: Pretendard;

export const SidebarContainer = styled.div<{ open: boolean }>`
    width: 376px;
    height: 100vh;
    background-color: #000;
    position: fixed;
    top: 0;
    left: ${({ open }) => (open ? "0" : "-376px")};
    transition: left 0.3s ease;
    z-index: 1000;
    color: white;
    display: flex;
    flex-direction: column;

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
`

export const SidebarItem = styled.div`
    margin: 20px 30px;
    cursor: pointer;
`

export const SidebarButton = styled(Button)`
    margin-top: auto;
`

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1100;
    background: none;
    border: none;
    cursor: pointer;
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};

    img {
        width: 24px;
        height: 24px;
    }
`

export const LayoutContainer = styled.div`
    display: flex;
`

export const MainContent = styled.div`
    margin-left: 376px; /* Sidebar width */
    padding: 20px;
    flex-grow: 1;
    background-color: ${({ theme }) => (theme.isDarkMode ? "#121212" : "#f0f0f0")};
    color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#000")};
`

export const Divider = styled.div`
    width: 100%;
    height: 6px;
    background-color: #1a1a1a;
`

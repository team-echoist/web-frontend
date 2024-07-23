"use client"
import styled from "styled-components"
import { Button } from "@/shared/ui/button"

export const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;
`

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
    padding: ${({ open }) => (open ? "20px" : "0")};
`

export const SidebarItem = styled.div`
    margin: 20px 30px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
`

export const SidebarButton = styled(Button)`
    margin-top: auto;
`

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1100;
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 40px;
        height: 40px;
    }
`

export const MainContent = styled.div`
    flex-grow: 1;
    margin-left: 376px; /* Sidebar의 너비만큼 왼쪽 마진 */
    transition: margin-left 0.3s ease;
    background-color: ${({ theme }) => (theme.isDarkMode ? "#121212" : "#f0f0f0")};
    color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#000")};
`

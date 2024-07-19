// src/shared/ui/sidebar/sidebar.styled.ts
import styled from "styled-components"
// import { Button } from "@/shared/ui/button" // 올바른 경로로 임포트

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
    padding: 20px;
`

export const SidebarItem = styled.div`
    margin: 10px 0;
`

export const SidebarButton = styled.button`
    margin-top: auto;
    background-color: white;
`

export const HamburgerButton = styled.button`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1100;
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 24px; /* 필요에 따라 크기 조정 */
        height: 24px; /* 필요에 따라 크기 조정 */
    }
`

"use client"
import styled from "styled-components"

const ShopContentSection = styled.div`
    display: flex;
    align-items: center;
    margin: 28px 30px;
`

const ShopContentP = styled.p`
    width: 60px;
    height: 24px;
    background-color: #191919;
    border-radius: 42px;
    margin-left: auto;

    color: #616fed;
    font-size: 12px;
    font-style: normal;
    line-height: 150%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ShopContent = () => {
    return (
        <ShopContentSection>
            <h2>상점</h2>
            <ShopContentP>준비중</ShopContentP>
        </ShopContentSection>
    )
}

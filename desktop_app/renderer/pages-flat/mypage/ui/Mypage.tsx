import React from "react";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import color from "@/shared/styles/color";
import Header from "./header/Header";
import { ActiveBadge } from "@/features/activeBadge";
import WhiteArrow from "@/shared/assets/img/white_arrow.svg";
import RecentEssay from "./contents/RecentEssay";

const Layout = styled.main`
  width: 100vw;
  min-height: 110vh;
  overflow-y: auto;
`;
const ContentsContainer = styled.article`
  position: absolute;
  top: 32px;
  left: 265px;
  width: calc(100vw - 270px);
  // height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom:50px;
`;
const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: absolute;
  top: 34px;
  left: 30px;
`;
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const TitleDiv = styled.div`
  width: 758px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;
const Chip = styled.div`
  width: 63px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 42px;
  background: #191919;
  display: flex;
  justify-content:center;
  align-items: center;
  
  color:${color.pointcolor}
`;
export const Mypage = () => {
  return (
    <Layout>
      <ActiveSideBar />
      <ContentsContainer>
        <H1>프로필</H1>
        <Header />
        <TitleDiv>
          <Span>링크드아웃 뱃지</Span>
          <WhiteArrow />
        </TitleDiv>
        <ActiveBadge></ActiveBadge>
        <TitleDiv>
          <Span>최근 본 글</Span>
          <WhiteArrow />
        </TitleDiv>
        <RecentEssay></RecentEssay>
        <TitleDiv>
          <Span>멤버십 관리</Span>
          <Chip>준비중</Chip>
        </TitleDiv>
        <TitleDiv>
          <Span>계정 관리</Span>
          <WhiteArrow />
        </TitleDiv>
      </ContentsContainer>
    </Layout>
  );
};

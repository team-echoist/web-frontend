import React from "react";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import color from "@/shared/styles/color";
import Header from "./header/Header";

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
  height: 90vh;
`;
const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position:absolute;
  top:34px;
  left:30px;
`;

export const Mypage = () => {
  return (
    <Layout>
      <ActiveSideBar />
      <ContentsContainer>
        <H1>MY</H1>
        <Header/>
      </ContentsContainer>
    </Layout>
  );
};

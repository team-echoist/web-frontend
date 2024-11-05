import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { Article } from "@/shared/ui/article";
import { getEssays } from "@/shared/api";

const Layout = styled.article`
  width: calc(100vw - 270px);
  position: absolute;
  top: 678px;
  left: 265px;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 861px;
  margin-top: 26px;
  height: 60vh;
`;
const H1 = styled.h1`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 30.6px */
  letter-spacing: 0.18px;
`;

const P = styled.p`
  color: #696969;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
const TitleDiv = styled.div``;

function EssayList() {

  const getEssayList = async() =>{
    try{

    }catch(Err){
      console.log(Err);
    }
  }
  return (
    <Layout>
      <Wrapper>
        <TitleDiv>
          <H1>오늘의 글</H1>
          <P>오늘 쓰여진 다양하고 솔직한 글들을 읽어보세요.</P>
        </TitleDiv>
      </Wrapper>
    </Layout>
  );
}

export default EssayList;

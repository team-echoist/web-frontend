import React, { useState } from "react";
import { BottomSheet } from "@/shared/ui/modal";
import styled from "styled-components";
import Check from "@/shared/ui/check/check";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;
const TitleDiv = styled.div`
  width: 100%;
  height: 128px;
  padding-top: 51px;
`;
const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const Desc = styled.p`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 23.8px */
  letter-spacing: 0.14px;
`;

function ReportModal() {
    const [reportData,setReportData] =useState([{}])
  return (
    <BackgroundContainer>
      <BottomSheet isOpen={true} size="max" isCloseModified={true}>
        <TitleDiv>
          <Title>신고</Title>
          <Desc>이 글을 신고하는 이유를 선택해주세요.</Desc>
        </TitleDiv>
      </BottomSheet>
    </BackgroundContainer>
  );
}

export default ReportModal;

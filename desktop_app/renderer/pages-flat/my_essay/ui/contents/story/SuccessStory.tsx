import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

const StoryInfo = styled.div`
  width: 640px;
  height: 200px;
  flex-shrink: 0;
  background: ${color.pointcolor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 40px;
  gap: 4px;
`;
const BlackText = styled.p`
  color: ${color.black};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: 4px;
`;

const H1 = styled.h1`
  color: ${color.black};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const StoryItemBox = styled.div`
  border-bottom: 1px solid #252525;
  width: 640px;
  height:60px;
  padding: 20px 30px;
`;
const Number =styled.div``
function SuccessStory() {
  return (
    <>
      <StoryInfo>
        <BlackText>8편의 글</BlackText>
        <H1>돌연한 출발</H1>
        <BlackText>구르브 아무개</BlackText>
      </StoryInfo>
      <StoryItemBox></StoryItemBox>
    </>
  );
}

export default SuccessStory;

import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import LinkedoutIcon from "@/shared/assets/img/linkedout.svg";

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
  width: 680px;
  height: 60px;
  padding: 20px 5px;
  display: flex;
  align-items: center;
  svg{
   height:100%;
   padding-top:10px;
  }
`;
const Number = styled.div`
  display: flex;
  margin-right: 25px;
  margin-left: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${color.pointcolor};
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
  margin-right: 50px;
`;
const Strong = styled.strong`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const Time = styled.time`
  color: #3e415b;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
function SuccessStory({selectedStoryId}:{selectedStoryId:number|null}) {
  return (
    <>
      <StoryInfo>
        <BlackText>8편의 글</BlackText>
        <H1>돌연한 출발</H1>
        <BlackText>구르브 아무개</BlackText>
      </StoryInfo>
      <StoryItemBox>
        <Number>1</Number>
        <TitleDiv>
          <Strong>스토리글</Strong>
          <Time>2024.01.05</Time>
        </TitleDiv>
        <LinkedoutIcon />
      </StoryItemBox>
    </>
  );
}

export default SuccessStory;

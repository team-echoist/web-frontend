import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { Button } from "@/shared/ui/button";

const TitleText = styled.h1`
  color: ${color.pointcolor};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: absolute;
  top: 180px;
  left: 75px;
  width: 300px;
`;
const P = styled.p`
  color: #c5c5c5;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const TitleDiv = styled.div`
  position: absolute;
  top: 260px;
  left: 130px;
`;

const ButtonDiv = styled.div`
  position: absolute;
  top: 360px;
  left: 80px;
`;

function LinkedoutTextField() {
  return (
    <>
      <TitleText>
        " 사실 문은 이미 꽤 열려
        있었는데었는데었는데었는데었는데었는데었는데었는데었는데었는데었는데었는데었는데.
        (···) "
      </TitleText>
      <TitleDiv>
        <P>로 시작하는 글, 기억하시나요? </P>
        <br />
        <P>2024년 6월 10일에 </P>
        <P>링크드아웃한 글이 발견됐어요.</P>
      </TitleDiv>
      <ButtonDiv>
        <Button text="확인" style="square" scale="small" type="point"></Button>
      </ButtonDiv>
    </>
  );
}

export default LinkedoutTextField;

import React from "react";
import SpotMenuIcon from "@/shared/assets/img/spotmenuicon.svg";
import styled from "styled-components";
import color from "@/shared/styles/color";

const Layout = styled.article`
  width: 657px;
  height: 181px;
  padding: 20.54px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10.27px;
  flex-shrink: 0;
  align-self: stretch;
  border-bottom: 1.027px solid rgba(104, 104, 104, 0.1);
  background: url(<path-to-image>) lightgray 50% / cover no-repeat,
    rgba(0, 0, 0, 0.6);
`;
const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
const SpotIconDiv = styled.div``;
const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DescDiv = styled.div`
  width: 100%;
  height: 102px;
  color: ${color.white};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 23.8px */
  letter-spacing: 0.14px;
  margin-top: 15.72px;
`;
const TimeDiv = styled.div`
  width: 100%;
  height: 17px;
  color: #686868;
  text-align: right;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
function Card() {
  return (
    <Layout>
      <TitleDiv>
        <H1>나만의 글1</H1>
        <SpotIconDiv>
          <SpotMenuIcon />
        </SpotIconDiv>
      </TitleDiv>
      <DescDiv>
        예상치 못한 실패, 좌절, 엉뚱한 결과를 의도하는 사람은 거의 없을 것이다.
        적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지
        못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과
        세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는
        것, 바로 그것이다. 그러나...
      </DescDiv>
      <TimeDiv>2024년 04월 28일 16:47</TimeDiv>
    </Layout>
  );
}

export default Card;

import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

const Layout = styled.div`
  height: 42px;
  margin-left:23px;
`;
const Row = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const P = styled.p`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Strong = styled.strong`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const Time = styled.time`
  color: #777;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  white-space: nowrap;
`;
function TextField() {
  return (
    <Layout>
      <Row>
        <P>다른 아무개가 칠이구 아무개님의</P>
      </Row>
      <Row>
        <Strong>'돌연한 출발'</Strong>
        <P>글을 찾았어요! </P>
        <Time>2시간</Time>
      </Row>
    </Layout>
  );
}

export default TextField;

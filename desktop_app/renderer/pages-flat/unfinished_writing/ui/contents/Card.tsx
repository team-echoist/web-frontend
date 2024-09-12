import React, { useState } from "react";
import styled from "styled-components";
import Check from "@/shared/ui/check/check";


const Layout = styled.div`
  border-bottom: 1px solid rgba(104, 104, 104, 0.1);
  width: 100%;
  display: flex;
  padding: 24px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
const Title = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  gap:12px;
  align-items: center;
`;
const Date = styled.time`
  color: #727070;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Chip = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  width: 37px;
  height: 16px;
  border-radius: 27px;
  background: #e43446;
  display: flex;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function Card() {
  const [check, setCheck] = useState(false);
  return (
    <Layout>
      <Title>
        제목 없는 글<Chip>작성중</Chip>
      </Title>
      <Date>2024.05.19</Date>
      {/* <Check check={check} setCheck={setCheck} type="circle"></Check> */}
    </Layout>
  );
}

export default Card;

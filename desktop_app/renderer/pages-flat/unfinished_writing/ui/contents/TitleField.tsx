import React from "react";
import { PrevButton } from "@/shared/ui/button";
import styled from "styled-components";
import color from "@/shared/styles/color";

const Layout = styled.div`
  width: 100vw;
  height: 80px;
  border-bottom: 1px solid rgba(104, 104, 104, 0.3);
  background: #121212;
  position: relative;
`;
const Title = styled.p`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  position: absolute;
  top: 38px;
  left: 45%;
`;
const Button = styled.button`
  all: unset;
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  position: absolute;
  top: 38px;
  right: 18px;
  cursor: pointer;
`;
function TitleField() {
  return (
    <Layout>
      <PrevButton />
      <Title>쓰다 만 글</Title>
      <Button>편집</Button>
    </Layout>
  );
}

export default TitleField;

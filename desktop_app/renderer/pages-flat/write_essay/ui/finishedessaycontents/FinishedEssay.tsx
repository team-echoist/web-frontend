import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import BottomSheet from "./BottomSheet";

const Layout = styled.div`
  padding: 72px 147px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 34px;
`;

const Desc = styled.p`
  color: #b4b4b4;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;

function FinishedEssay({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string[];
}) {
  return (
    <Layout>
      <BottomSheet tag={tag}></BottomSheet>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Layout>
  );
}

export default FinishedEssay;

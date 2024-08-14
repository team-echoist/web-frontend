import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

const Layout = styled.div`
  min-width: 70px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #1a1a1a;
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 67px;
  left: 5px;
`;
const LabelText = styled.label`
  color: ${color.pointcolor};
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

function Label({ text }: { text: string }) {
  return (
    <Layout>
      <LabelText>{text}</LabelText>
    </Layout>
  );
}

export default Label;

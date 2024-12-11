import React from "react";
import styled from "styled-components";

const Layout = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? `${height}px` : "636px")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 270px);
  color: #686868;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function NoneContents({ text, height }: { text: string; height?: number }) {
  return <Layout height={height}>{text}</Layout>;
}

export default NoneContents;

import React from "react";
import styled from "styled-components";

const Layout = styled.div<{ left?: number }>`
  width: 100%;
  height: 97vh;
  z-index: 5000;
  position: fixed;
  top: 32px;
  left: ${({ left }) => (left ? `${left}px` : 0)};
  background: rgba(0, 0, 0, 0.9);
`;

function DarkBackground({
  children,
  left,
}: {
  children: React.ReactNode;
  left?: number;
}) {
  return <Layout left={left}>{children}</Layout>;
}

export default DarkBackground;

import React from "react";
import styled from "styled-components";

const Layout = styled.div<{ left?: number; zIndex?: number }>`
  width: 100%;
  height: 97vh;
  z-index: ${({ zIndex }) => zIndex};
  position: fixed;
  top: 32px;
  left: ${({ left }) => (left ? `${left}px` : 0)};
  background: rgba(0, 0, 0, 0.9);
`;

function DarkBackground({
  children,
  left,
  zIndex = 5000,
}: {
  children: React.ReactNode;
  left?: number;
  zIndex?: number;
}) {
  return (
    <Layout left={left} zIndex={zIndex}>
      {children}
    </Layout>
  );
}

export default DarkBackground;

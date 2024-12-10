import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  height: 97vh;
  z-index: 5000;
  position: fixed;
  top: 32px;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
`;

function DarkBackground({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

export default DarkBackground;

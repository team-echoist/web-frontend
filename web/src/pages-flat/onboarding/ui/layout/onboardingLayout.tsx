import React from "react";
import styled from "styled-components";


interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const Layout = styled.main`
  width: 390px;
  height: 100%;
  margin: auto;
  position: relative;

`;

function DefaultLayout({ children, onClick }: Props) {
  return <Layout onClick={onClick}>{children}</Layout>;
}

export default DefaultLayout;

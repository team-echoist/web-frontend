import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}
const SLayout = styled.main`
  width: 390px;
  height:100%;
  margin:auto;
`;

function DefaultLayout({ children }: Props) {
  return <SLayout>{children}</SLayout>;
}

export default DefaultLayout;

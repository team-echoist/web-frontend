import React, { ReactNode } from "react";
import styled from "styled-components";


interface ButtonFieldLayoutProps {
  children: ReactNode;
}
const Layout =styled.div`
width: 442px;
position:absolute;
top:427px;
`

function ButtonFieldLayout({ children }: ButtonFieldLayoutProps) {
  return <Layout>{children}</Layout>;
}

export default ButtonFieldLayout;

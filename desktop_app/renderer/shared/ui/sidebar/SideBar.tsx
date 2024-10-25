import React from "react";
import styled from "styled-components";
import Logo from "@/shared/assets/img/logo.svg";

const Layout = styled.nav`
  width: 214px;
  height: 100%;
  flex-shrink: 0;
  z-index: 200;
  border-right: 0.75px solid #191919;
  background: #121212;
  position: absolute;
  left: 0;
  top: 32px;
  padding:29.25px 22.5px;
`;


function SideBar() {
  return (
    <Layout>
      <Logo />
    </Layout>
  );
}

export default SideBar;

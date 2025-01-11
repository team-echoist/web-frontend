import React from "react";
import styled from "styled-components";
import LoginLogo from "@/shared/assets/img/login_logo.svg";
import Image from "next/image";

const Layout = styled.main`
  width: 442px;
  height: 100%;
  margin: auto;
  position: relative;
`;

const LoginLogoWrapper = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
  width: 311.763px;
  height: 360.002px;
  svg{
  width: 100%;
  padding-left:30px;
  }
`;

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <LoginLogoWrapper>
        <LoginLogo></LoginLogo>
        {/* <Image
          src={LoginLogo}
          alt="Login Logo"
          width={311.763}
          height={333.002}
        /> */}
      </LoginLogoWrapper>
      {children}
    </Layout>
  );
}

export default DefaultLayout;

import React, { useState } from "react";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import { ScrollTop } from "@/shared/ui/scroll";
import Header from "./header/Header";
import Banner from "./banner/Banner";

const Layout = styled.main`
  width: 100vw;
  min-height: 90vh;
  overflow-y: auto;
`;
const BannerContainer = styled.div`
  width: calc(100vw - 270px);
  height: 646px;
  flex-shrink: 0;
  background: #d9d9d9;
  position: fixed;
  top: 32px;
  left: 265px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;
function community() {
  return (
    <Layout>
      <ScrollTop bottom="131px" />
      <ActiveSideBar></ActiveSideBar>
      <BannerContainer>
        <Header />
        <Banner/>
      </BannerContainer>
    </Layout>
  );
}

export default community;

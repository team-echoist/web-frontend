import React, { useState } from "react";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import { ScrollTop } from "@/shared/ui/scroll";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import EssayList from "./contents/EssayList";
import { Tab } from "@/shared/ui/tab";
import FollowList from "./banner/FollowList";
import color from "@/shared/styles/color";

const Layout = styled.main`
  width: 100vw;
  // max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: 3px solid red;
`;
const BannerContainer = styled.div<{ activeTab: number }>`
  width: calc(100vw - 270px);
  height: 696px;
  flex-shrink: 0;
  background: ${({ activeTab }) => (activeTab === 1 ? "none" : "#d9d9d9")};
  position: absolute;
  top: 32px;
  left: 265px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TabContainer = styled.div`
  position: absolute;
  top: 103px;
`;
function community() {
  const tab = ["랜덤", "구독"];
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const renderBanner = ({ activeTab }: { activeTab: number }) => {
    switch (activeTab) {
      case 0:
        return <Banner />;
      case 1:
        return <FollowList />;
      default:
        return <Banner />;
    }
  };

  return (
    <Layout>
      <ScrollTop bottom="131px" />
      <ActiveSideBar></ActiveSideBar>
      <BannerContainer activeTab={activeTab}>
        <Header  activeTab={activeTab}/>
        <TabContainer>
          <Tab
            tabData={tab}
            activeTab={activeTab}
            handleChangeActiveTab={handleChangeActiveTab}
            isBlack={activeTab === 0 ? true : false}
            width="431px"
          />
        </TabContainer>
        {renderBanner({ activeTab })}
      </BannerContainer>
      <EssayList />
    </Layout>
  );
}

export default community;

import React, { useEffect, useState } from "react";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import { ShowProfile } from "@/features/showProfile";
import { useRouter } from "next/router";
import { Tab } from "@/shared/ui/tab";
import { getUserStories } from "@/shared/api";

const ContentsContainer = styled.article`
  position: absolute;
  top: 32px;
  left: 265px;
  width: calc(100vw - 270px);
  // height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;
const TabContainer = styled.div`
  width: 758px;
  display: flex;
  justify-content: flex-start;
  margin-top: 34px;
`;
function UserProfile() {
  const router = useRouter();
  const { query } = router;
  const [activeTab, setActiveTab] = useState(0);
  const tab = ["글", "스토리"];
  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };
  // useEffect(()=>{
  //   fetchGetUserStories();
  // },[query.id])
  // const fetchGetUserStories = async () => {
  //   try {
  //     if (query.id) {
  //       const { data, status } = await getUserStories(Number(query.id));
  //       console.log(data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <>
      <ActiveSideBar />
      <ContentsContainer>
        <ShowProfile id={Number(query.id)}/>
        <TabContainer>
          <Tab
            tabData={tab}
            activeTab={activeTab}
            handleChangeActiveTab={handleChangeActiveTab}
            isBlack={false}
            width="142px"
          />
        </TabContainer>
      </ContentsContainer>
    </>
  );
}

export default UserProfile;

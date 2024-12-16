import React, { useEffect, useState } from "react";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import { ShowProfile } from "@/features/showProfile";
import { useRouter } from "next/router";
import { Tab } from "@/shared/ui/tab";
import { getUserStories } from "@/shared/api";
import List from "./contents/List";
import StoryList from "./contents/StoryList";
import { getTargetUserEssays } from "@/shared/api";
import { Essay, Story } from "@/shared/types";

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
  border-bottom: 1px solid #242424;
`;
function UserProfile() {
  const router = useRouter();
  const { query } = router;
  const [activeTab, setActiveTab] = useState(0);
  const tab = ["글", "스토리"];
  const [essays, setEssays] = useState<Essay[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [stories, setStories] = useState<Story[]>([]);

  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const fetchGetUserStories = async () => {
    try {
      if (query.id) {
        const { data, status } = await getUserStories(Number(query.id));
        if (status === 200 || status === 201) {
          setStories(data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchGetUserEssays = async () => {
    try {
      if (query.id) {
        if(page === 1){
          setEssays([]);
        }
        const { data, totalPage, status } = await getTargetUserEssays(
          Number(query.id),
          page,
          20,
        );
        if (status === 200) {
          setEssays((prevData) => [...prevData, ...data]);
          setTotalPage(totalPage);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const loadMore = () => {
    if (totalPage && page >= totalPage) {
      return;
    }
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (activeTab === 0) {
      fetchGetUserEssays();
    } else {
      // 스토리
      fetchGetUserStories();
    }
  }, [activeTab]);
  useEffect(() => {
    if (page > 1) {
      fetchGetUserEssays();
    }
  }, [page]);
  return (
    <>
      <ActiveSideBar />
      <ContentsContainer>
        <ShowProfile id={Number(query.id)} />
        <TabContainer>
          <Tab
            tabData={tab}
            activeTab={activeTab}
            handleChangeActiveTab={handleChangeActiveTab}
            isBlack={false}
            width="142px"
          />
        </TabContainer>
        {activeTab === 0 ? (
          <List essays={essays} loadMore={loadMore} />
        ) : (
          <StoryList stories={stories} userId={Number(query.id)}/>
        )}
      </ContentsContainer>
    </>
  );
}

export default UserProfile;

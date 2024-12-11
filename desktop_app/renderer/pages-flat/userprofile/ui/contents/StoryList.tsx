import React, { useState } from "react";
import { Story } from "@/shared/types";
import styled from "styled-components";
import SummaryIcon from "@/shared/assets/img/summaryIcon.svg";
import color from "@/shared/styles/color";
import { ShowStoryList } from "@/features/showStoryList";
import { getTargetUserEssays } from "@/shared/api";
import PrevButtonImg from "@/shared/assets/img/prevbutton.svg";

const Layout = styled.div`
 padding-top:20px;
`;
const ListCard = styled.div`
  width: 758px;
  border-bottom: 1px solid rgba(104, 104, 104, 0.3);
  padding: 20px 0px;
  display: flex;
  cursor: pointer;
`;
const SummaryDiv = styled.div`
  position: relative;
`;
const Title = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: 34.72px;
  width: 510px;
  margin-right: 20px;
`;
const Count = styled.p`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20px, -5px);
`;
const StoryModalLayout = styled.div`
  width: 100%;
  height: 94vh;
  max-height: 94vh;
  z-index: 500;
  background: #121212;
  position: fixed;
  top: 32px;
  left: 265px;
  padding: 10px;
  overflow-y: auto;
`;
const PrevBtn = styled.button`
  all: unset;
  cursor: pointer;
  poaition: fixed;
  left: 0;
`;
const StoryListDiv = styled.div`
 width:80%;
 display:flex;
 flex-direction: column;
 align-items: center;
`;
function StoryList({ stories, userId }: { stories: Story[]; userId: number }) {
  const [isShowStoryDetails, setIsShowStoryDetails] = useState(false);
  const [storyDetails, setStoryDetails] = useState([]);
  const [selectedStoryName, setSelectedStoryName] = useState("");
  const [userName, setUserName] = useState("");

  const handleStoryDetails = () => {
    setIsShowStoryDetails((prev) => !prev);
  };

  const fetchStoryDetails = async (storyId: number, name: string) => {
    try {
      const { data, status } = await getTargetUserEssays(
        userId,
        null,
        null,
        storyId
      );
      if (status === 200 || status === 201) {
        setStoryDetails(data);
        setSelectedStoryName(name);
        if (data.length > 0) {
          setUserName(data?.[0]?.author.nickname);
        } else {
          setUserName("unknown");
        }
        handleStoryDetails();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const storyModal = () => {
    return (
      <StoryModalLayout>
        <PrevBtn onClick={handleStoryDetails}>
          <PrevButtonImg />
        </PrevBtn>
        <StoryListDiv>
          <ShowStoryList
            essay={storyDetails}
            title={selectedStoryName}
            nickname={userName}
          />
        </StoryListDiv>
      </StoryModalLayout>
    );
  };

  return (
    <Layout>
      {isShowStoryDetails && storyModal()}
      {stories.map((story) => (
        <ListCard
          onClick={() => {
            fetchStoryDetails(story.id, story.name);
          }}
        >
          <SummaryDiv>
            <SummaryIcon />
            <Count>{story.essaysCount}</Count>
          </SummaryDiv>
          <Title>{story.name}</Title>
        </ListCard>
      ))}
    </Layout>
  );
}

export default StoryList;

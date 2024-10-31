import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import ActiveAlramList from "@/features/activeAlarmModal/ui/ActiveAlramList";
import { AlarmButton } from "@/shared/ui/button";
import WriteButtonSVG from "@/shared/assets/img/write_icon.svg";
import Header from "./header/Header";
import List from "./contents/List";
import { ScrollTop } from "@/shared/ui/scroll";
import AddStoryModal from "./contents/story/AddStoryModal";

const Layout = styled.div`
  width: 100vw;
  min-height: 90vh;
  overflow-y: auto;
`;

const StyledWriteButton = styled(WriteButtonSVG)`
  position: fixed;
  left: 92.5%;
  top: 85.89%;
  z-index: 10;
  cursor: pointer;
`;

const ContentsContainer = styled.main<{ isModalOpen: boolean }>`
  width: ${({ isModalOpen }) =>
    isModalOpen ? "calc(100vw - 390px)" : "calc(100vw - 270px)"};
  // min-height: 98vh;
  font-family: Arial, sans-serif;
  position: absolute;
  top: 32px;
  left: ${({ isModalOpen }) => (isModalOpen ? "0" : "259px")};
  transition: width 0.3s ease;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

function MyEssay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [selectedStoryId, setStoryId] = useState<number | null>(null);
  const router = useRouter();
  const handleAlarmButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleClick = () => {
    router.push("/web/write_essay");
  };
  const handleStoryModal = (id?: number) => {
    setIsStoryModalOpen(!isStoryModalOpen);
    if (id) {
      setStoryId(id);
    }
  };

  return (
    <Layout>
      {!isStoryModalOpen ? (
        <>
          <ScrollTop bottom="131px" />
          <ActiveSideBar isModalOpen={isModalOpen}></ActiveSideBar>
          {isModalOpen && (
            <ActiveAlramList
              isModalOpen={isModalOpen}
              handleAlarmButtonClick={handleAlarmButtonClick}
            />
          )}
          <ContentsContainer isModalOpen={isModalOpen}>
            <Header />
            {!isModalOpen && (
              <>
                <StyledWriteButton onClick={handleClick} />
                <AlarmButton onClick={handleAlarmButtonClick} />
              </>
            )}
            <List handleStoryModal={handleStoryModal} />
          </ContentsContainer>
        </>
      ) : (
        <AddStoryModal handleStoryModal={handleStoryModal} selectedStoryId={selectedStoryId}/>
      )}
    </Layout>
  );
}

export default MyEssay;

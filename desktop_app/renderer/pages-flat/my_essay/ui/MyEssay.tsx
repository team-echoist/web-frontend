import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import ActiveAlramList from "@/features/activeAlarmModal/ui/ActiveAlramList";
import { AlarmButton } from "@/shared/ui/button";
import WriteButtonSVG from "@/shared/assets/img/write_icon.svg";
import Header from "./header/Header";
import List from "./contents/List";

const StyledWriteButton = styled(WriteButtonSVG)`
  position: absolute;
  left: 92.5%;
  top: 85.89%;
  z-index: 10;
  cursor: pointer;
`;

const Container = styled.main<{ isModalOpen: boolean }>`
  width: ${({ isModalOpen }) =>
    isModalOpen ? "calc(100vw - 390px)" : "calc(100vw - 270px)"};
  height:98vh;
  font-family: Arial, sans-serif;
  position: fixed;
  top: 32px;
  left: ${({ isModalOpen }) => (isModalOpen ? "0" : "259px")};
  transition: width 0.3s ease;
  overflow-x: hidden;
`;

function MyEssay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const handleAlarmButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleClick = () => {
    router.push("/web/write_essay");
  };

  return (
    <>
      <ActiveSideBar isModalOpen={isModalOpen}></ActiveSideBar>
      {isModalOpen && (
        <ActiveAlramList
          isModalOpen={isModalOpen}
          handleAlarmButtonClick={handleAlarmButtonClick}
        />
      )}
      <Container isModalOpen={isModalOpen}>
        <Header/>
        {!isModalOpen && (
          <>
            <StyledWriteButton onClick={handleClick} />
            <AlarmButton onClick={handleAlarmButtonClick} />
          </>
        )}
        <List/>
        {/* <button
          style={{ width: "300px", height: "300px" }}
          onClick={() => {
            router.push("essay_details?id=2674&pageType=public");
          }}
        >
          테스트용
        </button> */}
      </Container>
    </>
  );
}

export default MyEssay;

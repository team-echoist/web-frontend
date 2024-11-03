import React, { useEffect, useState } from "react";
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
import { ColorToast } from "@/shared/ui/toast";

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
const ToastContainer = styled.div`
  position: fixed;
  bottom: 135px;
  left: 43%;
  z-index: 50;
`;
function MyEssay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [selectedStoryId, setStoryId] = useState<number | null>(null);
  const [storedStoryName, setStoredStoryName] = useState("");
  // 스토리 편집시 진입되는 화면에서 스토리 이름을 응답값을 주고 잇지 않아서 state로 임시 저장
  const [toastText, setToastText] = useState("");
  const [isError, setError] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter();
  const handleAlarmButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleClick = () => {
    router.push("/web/write_essay");
  };
  const handleStoryModal = () => {
    setIsStoryModalOpen(!isStoryModalOpen);
  };
  useEffect(() => {
    if (!isStoryModalOpen) {
      setStoryId(null);
    }
  }, [isStoryModalOpen]);

  const toastHandler = (text: string, isError: boolean) => {
    setIsShowToast(true);
    setToastText(text);
    setError(isError);
    if (isError) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <Layout>
      <ToastContainer>
        <ColorToast
          text={toastText}
          onClose={() => {
            setIsShowToast(false);
          }}
          isShowToast={isShowToast}
          type={isError ? "alert" : "normal"}
        />
      </ToastContainer>

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
            <List
              setStoredStoryName={setStoredStoryName}
              handleStoryModal={handleStoryModal}
              setStoryId={setStoryId}
              toastHandler={toastHandler}
              setIsSuccess={setIsSuccess}
            />
          </ContentsContainer>
        </>
      ) : (
        <AddStoryModal
          handleStoryModal={handleStoryModal}
          selectedStoryId={selectedStoryId}
          setStoryId={setStoryId}
          storedStoryName={storedStoryName}
          setStoredStoryName={setStoredStoryName}
          toastHandler={toastHandler}
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}
        />
      )}
    </Layout>
  );
}

export default MyEssay;

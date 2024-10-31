import React, { useEffect, useState } from "react";
import { Tab } from "@/shared/ui/tab";
import Card from "./Card";
import styled from "styled-components";
import { getEssays } from "@/shared/api";
import { getStories } from "@/shared/api";
import { Essay } from "@/shared/types";
import { deleteEssay } from "@/features/showessaydetails/api";
import { ColorToast } from "@/shared/ui/toast";
import StoryList from "./story/StoryList";

const ContentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  margin-top: 19px;
`;
const NoneData = styled.div`
  height: 80vh;
  color: #686868;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ToastContainer = styled.div`
  position: fixed;
  bottom: 135px;
  left: 43%;
  z-index: 50;
`;

function List({ handleStoryModal }: { handleStoryModal: () => void }) {
  const tabData = ["나만의 글", "발행한 글", "스토리"];
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const [listData, setListData] = useState<Essay[]>([]);
  const [listCount, setListCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    if (activeTab !== 2) {
      getList();
    }
  }, [activeTab]);

  const getList = async () => {
    try {
      const tabInfo: { [key: number]: string } = {
        0: "private",
        1: "public",
      } as const;
      const pageType = tabInfo[activeTab];
      // pageType: private, public
      const { data } = await getEssays(page, 5, pageType);
      setListData(data);
      setListCount(data.length);
    } catch (err) {
      console.log(err);
    }
  };

  const toastHandler = (error: boolean) => {
    if (error) {
      setShowToast(true);
      setIsError(true);
      setToastText("에세이 삭제에 실패했습니다.");
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    } else {
      setShowToast(true);
      setToastText("에세이 삭제에 성공했습니다.");
      getList();
    }
  };
  const handleEssayDelete = async (id: number) => {
    try {
      const { status } = await deleteEssay(id);
      if (status === 200) {
        toastHandler(false);
      } else {
        toastHandler(true);
      }
    } catch (err) {
      toastHandler(true);
    }
  };
  return (
    <>
      <Tab
        tabData={tabData}
        activeTab={activeTab}
        handleChangeActiveTab={handleChangeActiveTab}
        listCount={listCount}
      />
      <ToastContainer>
        <ColorToast
          text={toastText}
          onClose={() => {
            setShowToast(false);
          }}
          isShowToast={showToast}
          type={isError ? "alert" : "normal"}
        />
      </ToastContainer>
      {listData.length === 0 && activeTab !== 2 ? (
        <NoneData>저장된 글이 없습니다.</NoneData>
      ) : null}
      {/* 추후 스토리 로직 세팅후 활성화 */}
      <ContentsContainer>
        {activeTab !== 2 &&
          listData.map((item) => (
            <Card
              key={item.title}
              data={item}
              type={activeTab === 0 ? "private" : "public"}
              handleEssayDelete={handleEssayDelete}
            />
          ))}
        {activeTab === 2 && <StoryList handleStoryModal={handleStoryModal}/>}
      </ContentsContainer>
    </>
  );
}

export default List;

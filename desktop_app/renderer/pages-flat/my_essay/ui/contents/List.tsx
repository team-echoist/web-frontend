import React, { useEffect, useLayoutEffect, useState } from "react";
import { Tab } from "@/shared/ui/tab";
import Card from "./Card";
import styled from "styled-components";
import { getEssays } from "@/shared/api";
import { getStories } from "@/shared/api";
import { Essay } from "@/shared/types";
import { deleteEssay } from "@/features/showessaydetails/api";
import { ColorToast } from "@/shared/ui/toast";
import StoryList from "./story/list/StoryList";
import { storyType } from "@/shared/types";
import { Virtuoso } from "react-virtuoso";

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

function List({
  handleStoryModal,
  setStoryId,
  setStoredStoryName,
  toastHandler,
  setIsSuccess,
}: {
  handleStoryModal: () => void;
  setStoryId: React.Dispatch<React.SetStateAction<number | null>>;
  setStoredStoryName: React.Dispatch<React.SetStateAction<string>>;
  toastHandler: (text: string, isError: boolean) => void;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const tabData = ["나만의 글", "발행한 글", "스토리"];
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const [listData, setListData] = useState<Essay[]>([]);
  const [storyList, setStoryList] = useState<storyType[]>([]);
  const [listCount, setListCount] = useState(0);

  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
    setPage(1);
  };

  useLayoutEffect(() => {
    if (activeTab !== 2) {
      setListData([]);
      setListCount(0);
      getList();
    } else {
      setListData([]);
      setListCount(0);
      getStoryList();
    }
  }, [activeTab,page]);

  const getList = async () => {
    try {
      const tabInfo: { [key: number]: string } = {
        0: "private",
        1: "public",
      } as const;
      const pageType = tabInfo[activeTab];
      // pageType: private, public
      const { data, total } = await getEssays(page, 5, pageType);
      setListData((prevData) => [...prevData, ...data]);
      setListCount(total);
    } catch (err) {
      console.log(err);
    }
  };
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const getStoryList = async () => {
    try {
      const { data } = await getStories();
      setStoryList(data);
      setListCount(data.length);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEssayDelete = async (id: number) => {
    try {
      const { status } = await deleteEssay(id);
      if (status === 200) {
        toastHandler("에세이 삭제에 성공했습니다.", false);
        getList();
      } else {
        toastHandler("에세이 삭제에 실패했습니다.", true);
      }
    } catch (err) {
      toastHandler("에세이 삭제에 실패했습니다.", true);
    }
  };
  console.log("Test",page)
  return (
    <>
      <Tab
        tabData={tabData}
        activeTab={activeTab}
        handleChangeActiveTab={handleChangeActiveTab}
        listCount={listCount}
      />
      {listData.length === 0 && activeTab !== 2 ? (
        <NoneData>저장된 글이 없습니다.</NoneData>
      ) : null}
      {/* 추후 스토리 로직 세팅후 활성화 */}
      <ContentsContainer>
        {activeTab !== 2 ? (
          <Virtuoso
            style={{ height: "705px",width:"100%" }}
            data={listData}
            endReached={loadMore}
            itemContent={(index, item) => (
              <Card
                key={item.title}
                data={item}
                type={activeTab === 0 ? "private" : "public"}
                handleEssayDelete={handleEssayDelete}
              />
            )}
          />
        ) : (
          <StoryList
            handleStoryModal={handleStoryModal}
            storyList={storyList}
            setStoryId={setStoryId}
            getStoryList={getStoryList}
            setStoredStoryName={setStoredStoryName}
            toastHandler={toastHandler}
            setIsSuccess={setIsSuccess}
          />
        )}
        {/* {
          activeTab !== 2 && (
            <Virtuoso
              data={listData}
              endReached={loadMore}
              itemContent={(index, item) => (
                <Card
                  key={item.title}
                  data={item}
                  type={activeTab === 0 ? "private" : "public"}
                  handleEssayDelete={handleEssayDelete}
                />
              )}
            />
          )
          // listData.map((item) => (
          //   <Card
          //     key={item.title}
          //     data={item}
          //     type={activeTab === 0 ? "private" : "public"}
          //     handleEssayDelete={handleEssayDelete}
          //   />
          // ))
        }
        {activeTab === 2 && (
          <StoryList
            handleStoryModal={handleStoryModal}
            storyList={storyList}
            setStoryId={setStoryId}
            getStoryList={getStoryList}
            setStoredStoryName={setStoredStoryName}
            toastHandler={toastHandler}
            setIsSuccess={setIsSuccess}
          />
        )} */}
      </ContentsContainer>
    </>
  );
}

export default List;

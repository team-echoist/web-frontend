import React, { useState } from "react";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import { ScrollTop } from "@/shared/ui/scroll";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import EssayList from "./contents/EssayList";
import { Tab } from "@/shared/ui/tab";
import FollowList from "./banner/FollowList";
import Bookmark from "@/features/activeModal/bookmark/ui/Bookmark";
import { ColorToast } from "@/shared/ui/toast";
import { allEssayDelete } from "@/shared/api/bookmark";
import SearchModal from "@/features/activeModal/search/ui/SearchModal";
import AllFollowList from "./contents/AllFollowList";
import DarkBackground from "@/shared/ui/background/DarkBackground";
import { BottomSheet } from "@/shared/ui/modal";
import color from "@/shared/styles/color";
import { Button } from "@/shared/ui/button";
import { getFollows } from "@/shared/api";
import { Users } from "@/shared/types";
import { deleteFollow } from "@/shared/api";
import { postFollows } from "@/shared/api";
import { getBookmarks } from "@/shared/api/bookmark";


const Layout = styled.main`
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div<{ activeTab: number }>`
  width: calc(100vw - 270px);
  height: ${({ activeTab }) => (activeTab === 1 ? "" : "656px")};
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
  margin-top: 10px;
`;
const ToastContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 45%;
  z-index: 800;
`;
const ModalText = styled.p`
  height: 35px;
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  // margin-top: 49px;
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 29px;
`;
const ModalContainer = styled.div`
  padding-top: 49px;
`;

function community() {
  const tab = ["랜덤", "구독"];
  const [activeTab, setActiveTab] = useState(0);
  const [toastText, setToastText] = useState("");
  const [isShowToast, setIsShowToast] = useState(false);
  const [isError, setError] = useState(false);
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedFollowTapId, setSelectedFollowTapId] = useState<null | number>(
    null
  );
  const [isShowAllFollows, setShowAllFollows] = useState(false);
  const [isShowConfirm, setShowConfirm] = useState(false);
  const [follows, setFollows] = useState<Users>([]);
  const [selectedFollowId, setSelectedFollowId] = useState<null | number>(null);


  const handleTapFollowId = (id: number) => {
    setSelectedFollowTapId(id);
  };
  const handelFollowId = (id: number) => {
    setSelectedFollowId(id);
  };

  const handleChangeActiveTab = (index: number) => {
    if (!isShowAllFollows) {
      setActiveTab(index);
    }
  };
  const handleShowAllfollower = () => {
    setShowAllFollows(!isShowAllFollows);
  };
  const renderBanner = ({ activeTab }: { activeTab: number }) => {
    switch (activeTab) {
      case 0:
        return <Banner />;
      case 1:
        return (
          <FollowList
            handleFollowId={handleTapFollowId}
            selectedFollowId={selectedFollowTapId}
            handleShowAllfollower={handleShowAllfollower}
            isShowAllFollows={isShowAllFollows}
          />
        );
      default:
        return <Banner />;
    }
  };
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
  const deleteSavedEssays = async (ids: number[]) => {
    try {
      const { status } = await allEssayDelete(ids);
      if (status === 200 || status === 201) {
        toastHandler("선택한 글을 삭제했습니다.", false);
      } else {
        toastHandler("에세이 삭제에 실패했습니다.", true);
      }
    } catch (err) {
      toastHandler("에세이 삭제에 실패했습니다.", true);
      console.log(err);
    }
  };

  const modalHandler = (name: string) => {
    if (name === "bookmark") {
      setSaveModalOpen((prev) => !prev);
    }
    if (name === "search") {
      setSearchModalOpen((prev) => !prev);
    }
    if (name === "subscribe") {
      setShowConfirm((prev) => !prev);
    }
  };
  const confirm = (text: string, text2?: string, name?: string) => {
    return (
      <DarkBackground>
        <BottomSheet isOpen={true} size="middle">
          <ModalContainer>
            <ModalText>{text}</ModalText>
            <ModalText>{text2}</ModalText>
            <BtnDiv>
              <Button
                text="취소"
                scale="small"
                type="disable"
                onClick={() => {
                  if (name) {
                    modalHandler(name);
                  }
                }}
              />
              <Button
                text="확인"
                scale="small"
                onClick={() => {
                  submitFollows();
                }}
              />
            </BtnDiv>
          </ModalContainer>
        </BottomSheet>
      </DarkBackground>
    );
  };
  const submitFollows = async () => {
    try {
      if (selectedFollowId) {
        const { status } = await deleteFollow(selectedFollowId);
        if (status === 201 || status === 200) {
          modalHandler("subscribe");
          const alertText = "구독 취소 되었습니다.";
          fetchFollows();
          setIsShowToast(true);
          setToastText(alertText);
        }
      }
    } catch (err) {
      console.log("err", err);
      setIsShowToast(true);
      setToastText("서버 연결이 불안정합니다. 다시 시도 해주세요.");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  const fetchFollows = async () => {
    try {
      const { data, status } = await getFollows();
      if (status === 200) {
        const filteredData = data?.filter(
          (item) => Object.keys(item).length > 0
        );
        setFollows(filteredData || []);
      }
    } catch (err) {
      console.log(err);
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
      {isShowConfirm && (
        <>
          {confirm(
            "구독을 취소하시겠습니까?",
            "구독 취소 시 업데이트 되는 글이 보이지 않습니다.",
            "subscribe"
          )}
        </>
      )}

      {isSearchModalOpen && (
        <SearchModal modalHandler={modalHandler} pageType="public" />
      )}

      {isSaveModalOpen && (
        <Bookmark
          deleteSavedEssays={deleteSavedEssays}
          modalHandler={modalHandler}
        />
      )}
      <ScrollTop bottom="131px" />
      <ActiveSideBar />
      <Container activeTab={activeTab}>
        <Header
          activeTab={activeTab}
          modalHandler={modalHandler}
          isShowAllFollows={isShowAllFollows}
          handleShowAllfollower={handleShowAllfollower}
        />
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
        {isShowAllFollows ? (
          <AllFollowList
            modalHandler={modalHandler}
            fetchFollows={fetchFollows}
            follows={follows}
            handelFollowId={handelFollowId}
          />
        ) : (
          <EssayList
            isRandomEssay={activeTab === 0}
            selectedFollowId={selectedFollowTapId}
            isShowAllFollows={isShowAllFollows}
          />
        )}
      </Container>
    </Layout>
  );
}

export default community;

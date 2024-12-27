import React, { useState } from "react";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { ActiveBadge } from "@/features/activeBadge";
import WhiteArrow from "@/shared/assets/img/white_arrow.svg";
import RecentEssay from "./contents/RecentEssay";
import { WideModal } from "@/shared/ui/modal";
import ModalContents from "./contents/modal/ModalContents";
import { ColorToast } from "@/shared/ui/toast";
import { putUserInfo } from "@/shared/api/user";
import { useStore } from "@/shared/store";
import { RecentEssayModal } from "@/features/activeModal/recentessay";
import { BadgeModal } from "@/features/activeModal/badge";
import { UserManage } from "@/features/activeModal/user_manage";
import { ShowProfile } from "@/features/showProfile";

const Layout = styled.main`
  width: 100vw;
  min-height: 110vh;
  overflow-y: auto;
`;
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
const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: absolute;
  top: 34px;
  left: 30px;
`;
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const TitleDiv = styled.div`
  width: 758px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;
const Chip = styled.div`
  width: 63px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 42px;
  background: #191919;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.pointcolor};
`;
const ToastContainer = styled.div`
  position: fixed;
  top: 80%;
  left: 45%;
  z-index: 1200;
`;

interface User {
  email?: string;
  nickname?: string;
  password?: string;
  gender?: string;
  profileImage?: string;
  birthDate?: string;
  isFirst?: boolean;
  locationConsent?: boolean;
}
export const Mypage = () => {
  const [isError, setIsError] = useState(false);
  const [toastText, setToastText] = useState("닉네임이 변경 되었습니다.");
  const [isShowToast, setIsShowToast] = useState(false);
  const [isShowProfileModal, setIsShowProfileModal] = useState(false);
  const [isShowRecentModal, setIsShowRecentModal] = useState(false);
  const [isShowBadgeModal, setIsShowBadgeModal] = useState(false);
  const [isShowUserManage, setIsShowUserManage] = useState(false);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const toastHandler = (text: string, isError: boolean) => {
    setIsShowToast(true);
    setToastText(text);
    setIsError(isError);
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  const editUserInfo = async (body: User) => {
    try {
      const { status, data } = await putUserInfo(body);
      if (status === 200) {
        setUser(data);
        toastHandler("닉네임이 변경 되었습니다.", false);
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleProfileModal = () => {
    setIsShowProfileModal(!isShowProfileModal);
  };

  const modalHandler = (name: string) => {
    if (name === "recent") {
      setIsShowRecentModal((prev) => !prev);
    }
    if (name === "badge") {
      setIsShowBadgeModal((prev) => !prev);
    }
    if (name === "manage") {
      setIsShowUserManage((prev) => !prev);
    }
  };

  return (
    <Layout>
      {isShowRecentModal && <RecentEssayModal modalHandler={modalHandler} />}
      {isShowBadgeModal && <BadgeModal modalHandler={modalHandler} />}
      {isShowUserManage && <UserManage modalHandler={modalHandler} />}
      {/* 프로필 편집 모달 */}
      <WideModal isOpen={isShowProfileModal} onClose={handleProfileModal}>
        <ModalContents
          isError={isError}
          editUserInfo={editUserInfo}
          setIsError={setIsError}
          handleProfileModal={handleProfileModal}
        />
      </WideModal>
      
      <ActiveSideBar />
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


      <ContentsContainer>
        <H1>프로필</H1>
        <ShowProfile
          handleProfileModal={handleProfileModal}
          id={user?.id || 0}
          isMyProfile={true}
          nickname={user?.nickname?user.nickname:""}
        />
        <TitleDiv>
          <Span>링크드아웃 뱃지</Span>
          <WhiteArrow
            onClick={() => {
              modalHandler("badge");
            }}
          />
        </TitleDiv>
        <ActiveBadge />
        <TitleDiv>
          <Span>최근 본 글</Span>
          <WhiteArrow
            onClick={() => {
              modalHandler("recent");
            }}
          />
        </TitleDiv>
        <RecentEssay></RecentEssay>
        <TitleDiv>
          <Span>멤버십 관리</Span>
          <Chip>준비중</Chip>
        </TitleDiv>
        <TitleDiv>
          <Span>계정 관리</Span>
          <WhiteArrow
            onClick={() => {
              modalHandler("manage");
            }}
          />
        </TitleDiv>
      </ContentsContainer>
    </Layout>
  );
};

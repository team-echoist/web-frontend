import React, { useState } from "react";
import styled from "styled-components";
import SpotMenuIcon from "@/shared/assets/img/spotmenuicon.svg";
import { BlackMiniModal } from "@/shared/ui/modal";
import EditIcon from "@/shared/assets/img/modal_icon/pen.svg";
import PublishIcon from "@/shared/assets/img/modal_icon/publish.svg";
import LinkedoutIcon from "@/shared/assets/img/modal_icon/linkedout.svg";
import CheckIcon from "@/shared/assets/img/modal_icon/check.svg";
import DeleteIcon from "@/shared/assets/img/modal_icon/delete.svg";
import ReportIcon from "@/shared/assets/img/modal_icon/report.svg";
import color from "@/shared/styles/color";
import { BottomSeet } from "@/shared/ui/modal";
import { ColorToast } from "@/shared/ui/toast";
import { Button } from "@/shared/ui/button";
import { useRouter } from "next/router";

const MenuIconDiv = styled.div`
  position: fixed;
  top: 35px;
  right: 30px;
  cursor: pointer;
`;
const ModalItem = styled.div<{ isStory?: boolean; isRed?: boolean }>`
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  color: ${({ isStory, isRed }) =>
    isStory ? color.pointcolor : isRed ? color.red : color.white};
  align-items: center;
  border-bottom: 1px solid #1a1a1a;
  cursor: pointer;
  span {
    width: 100px;
  }
`;
const IconDiv = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
  svg {
    cursor: pointer;
  }
`;
const ToastDiv = styled.div`
  position: fixed;
  bottom: 135px;
  left: 35%;
  z-index: 50;
`;
const ToastContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;
const BottomSheetTitle = styled.h1`
  width: 100%;
  height: 87px;
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BottomSheetItemDiv = styled.div`
  display: flex;
  padding: 20px 50px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Span = styled.span`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const BottomSheetItemContainer = styled.div`
  max-height: 210px;
  overflow-y: auto;
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding-top: 32px;
`;

function Menu({
  handleZoomIn,
  handleZoomOut,
  scale,
  pageType,
  essayId,
}: {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  scale: number;
  pageType: string;
  essayId: number;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const router = useRouter();

  const toastRenderer = () => {
    // 스토리 없을때
    return (
      <ToastContainer>
        <ToastDiv>
          <ColorToast text="아직 만들어진 스토리가 없습니다." />
        </ToastDiv>
      </ToastContainer>
    );
  };
  const BottomSheetHandler = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };
  const bottomSheetModal = () => {
    // 스토리 있을때
    return (
      <ToastContainer>
        <BottomSeet
          isOpen={isBottomSheetOpen}
          size="large"
          isCloseModified={true}
          onClose={BottomSheetHandler}
        >
          <BottomSheetTitle>
            이 글을 어떤 스토리로 추가/변경 할까요?
          </BottomSheetTitle>
          <BottomSheetItemContainer>
            <BottomSheetItemDiv>
              <Span>돌연한 출발</Span>
              <CheckIcon />
              {/* 체크아이콘은 클릭했을때 생김 */}
            </BottomSheetItemDiv>
            <BottomSheetItemDiv>
              <Span>돌연한 출발</Span>
              <CheckIcon />
            </BottomSheetItemDiv>
            <BottomSheetItemDiv>
              <Span>돌연한 출발</Span>
              <CheckIcon />
            </BottomSheetItemDiv>
          </BottomSheetItemContainer>
          <BtnDiv>
            <Button text="스토리에서 삭제" type="disable" scale="small" />
            {/* 체크를 클릭했을때 스토리에 해당 아티클이있다면 활성화, 아니면 disalbe */}
            <Button text="추가/변경" scale="small" />
            {/* 체크를 클릭했을때 스토리에 해당 아티클이없다면 활성화, 아니면 disalbe */}
          </BtnDiv>
        </BottomSeet>
      </ToastContainer>
    );
  };

  const navigateToEditor = () => {
    router.push(
      `/web/write_essay?pageType=${pageType}&editorType=edit&essayId=${essayId}`
    );
  };
  const privateRenderer = () => {
    return (
      <>
        {isBottomSheetOpen && bottomSheetModal()}
        <ModalItem isStory={false} onClick={navigateToEditor}>
          <span>수정</span>
          <IconDiv >
            <EditIcon />
          </IconDiv>
        </ModalItem>
        <ModalItem isStory={false}>
          <span>발행</span>
          <IconDiv>
            <PublishIcon />
          </IconDiv>
        </ModalItem>
        <ModalItem isStory={false}>
          <span>Linked-out</span>
          <IconDiv>
            <LinkedoutIcon />
          </IconDiv>
        </ModalItem>
        <ModalItem isStory={true}>
          <span>스토리 선택</span>
          <IconDiv>
            <CheckIcon onClick={BottomSheetHandler} />
          </IconDiv>
        </ModalItem>
        <ModalItem isStory={false} isRed={true}>
          <span>삭제</span>
          <IconDiv>
            <DeleteIcon />
          </IconDiv>
        </ModalItem>
      </>
    );
  };
  const publicRenderer = () => {
    return (
      <>
        <ModalItem isStory={false} isRed={true}>
          <span>신고하기</span>
          <IconDiv>
            <ReportIcon />
          </IconDiv>
        </ModalItem>
      </>
    );
  };

  return (
    <>
      {isMenuOpen && (
        <BlackMiniModal
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          scale={scale}
        >
          {pageType === "public" ? publicRenderer() : privateRenderer()}
        </BlackMiniModal>
      )}
      {/* {toastRenderer()} */}
      <MenuIconDiv onClick={handleMenuOpen}>
        <SpotMenuIcon alt="menu_icon" />
      </MenuIconDiv>
    </>
  );
}

export default Menu;

import React, { useState } from "react";
import styled from "styled-components";
import SpotMenuIcon from "@/shared/assets/img/spotmenuicon.svg";
import { BlackMiniModal } from "@/shared/ui/modal";
import EditIcon from "@/shared/assets/img/modal_icon/pen.svg";
import PublishIcon from "@/shared/assets/img/modal_icon/publish.svg";
import LinkedoutIcon from "@/shared/assets/img/modal_icon/linkedout.svg";
import StoryIcon from "@/shared/assets/img/modal_icon/check.svg";
import DeleteIcon from "@/shared/assets/img/modal_icon/delete.svg";
import ReportIcon from "@/shared/assets/img/modal_icon/report.svg";
import color from "@/shared/styles/color";
import { BottomSeet } from "@/shared/ui/modal";
import { ColorToast } from "@/shared/ui/toast";

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
function Menu({
  handleZoomIn,
  handleZoomOut,
  scale,
  pageType,
}: {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  scale: number;
  pageType: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const bottomSheetModal = () => {
    return (
      <BottomSeet isOpen={true} size="large">
        dfasdf
      </BottomSeet>
    );
  };
  const privateRenderer = () => {
    return (
      <>
        {bottomSheetModal()}
        <ModalItem isStory={false}>
          <span>수정</span>
          <IconDiv>
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
            <StoryIcon />
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
  const toastRenderer = () => {
    return (
      <ToastContainer>
        <ToastDiv>
          <ColorToast text="아직 만들어진 스토리가 없습니다." />
        </ToastDiv>
      </ToastContainer>
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

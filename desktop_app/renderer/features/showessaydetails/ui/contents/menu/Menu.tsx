import React, { useEffect, useState } from "react";
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
import { ColorToast } from "@/shared/ui/toast";
import { useRouter } from "next/router";
import { updateEssayDetail } from "@/shared/api/essay";
import { getStories } from "@/shared/api";
import { deleteEssay } from "@/features/showessaydetails/api";
import { Story } from "@/shared/types";
import DeleteModal from "./DeleteModal";
import StoryModal from "./StoryModal";

const MenuIconDiv = styled.div`
  position: fixed;
  top: 35px;
  right: 30px;
  cursor: pointer;
`;
const ModalItem = styled.button<{ isStory?: boolean; isRed?: boolean }>`
  all: unset;
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

function Menu({
  handleZoomIn,
  handleZoomOut,
  scale,
  pageType,
  essayId,
  includedStory,
}: {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  scale: number;
  pageType: string;
  essayId: number;
  includedStory: Story | null;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [stories, setStories] = useState<Story[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [isStoryIncluded, setIsStoryIncluded] = useState(false);
  const [isStoryChecked, setIsStoryChecked] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [toastText, setToastText] = useState("");
  const [isError,setIsError] =useState(false);
  const router = useRouter();

  useEffect(() => {
    getStoryList();
    if (includedStory) {
      setIsStoryIncluded(true);
    }
  }, [includedStory]);

  const deleteInculudedStory = async () => {
    // 스토리에서 삭제하는api 추후 스토리 만들고나서 구현해야됨
  };

  const addUpdateStory = async () => {};

  const getStoryList = async () => {
    try {
      const { data } = await getStories();
      const updatedStories = data.map((story) => ({
        ...story,
        isIncluded: includedStory ? story.id === includedStory.id : false,
      }));

      setStories(updatedStories);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEssayDelete = async () => {
    try{
      const {status} =await deleteEssay(essayId);

      if(status ===200){
        setToastText("스토리 삭제에 성공했습니다.");
        setShowToast(true);
        setTimeout(()=>{
          router.push("/web/main")
        },2000)
      }else{
        setShowToast(true);
        setToastText("스토리 삭제에 실패했습니다.");
      }
    }catch(err){
      setToastText("스토리 삭제에 실패했습니다.");
    }
  };
  const StroryModalHandler = () => {
    setIsStoryModalOpen(!isStoryModalOpen);
    if (stories.length === 0) {
      setShowToast(true);
      setToastText("아직 만들어진 스토리가 없습니다.");
    }
  };
  const handleAddStory = (id: number) => {
    setIsStoryChecked(!isStoryChecked);
    const hasIncludedStory = stories.some((story) => story.isIncluded);

    setStories((prevStories) =>
      prevStories.map((story) =>
        hasIncludedStory
          ? story.id === id && story.isIncluded
            ? { ...story, isIncluded: !story.isIncluded }
            : story
          : story.id === id
          ? { ...story, isIncluded: !story.isIncluded }
          : story
      )
    );
  };

  const navigateToEditor = () => {
    router.push(
      `/web/write_essay?pageType=${pageType}&editorType=edit&essayId=${essayId}`
    );
  };
  const updateEssayDetails = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLButtonElement;
    const id = target.dataset.id;
    try {
      const { status } = await updateEssayDetail(null, { status: id }, essayId);
      if (status === 200) {
        router.push(
          `/web/essay_details?id=${essayId}&type=${id}&pageType=public`
        );
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  const privateRenderer = () => {
    return (
      <>
        {stories.length > 0 && isStoryModalOpen ? (
          <StoryModal
            stories={stories}
            handleAddStory={handleAddStory}
            isStoryChecked={isStoryChecked}
            isStoryIncluded={isStoryIncluded}
            deleteInculudedStory={deleteInculudedStory}
            addUpdateStory={addUpdateStory}
            onClose={StroryModalHandler}
          />
        ) : null}
        <ModalItem isStory={false} onClick={navigateToEditor}>
          <span>수정</span>
          <IconDiv>
            <EditIcon />
          </IconDiv>
        </ModalItem>
        <ModalItem
          isStory={false}
          data-id="published"
          onClick={(e) => updateEssayDetails(e)}
        >
          <span>발행</span>
          <IconDiv>
            <PublishIcon />
          </IconDiv>
        </ModalItem>
        <ModalItem
          isStory={false}
          data-id="linkedout"
          onClick={(e) => updateEssayDetails(e)}
        >
          <span>Linked-out</span>
          <IconDiv>
            <LinkedoutIcon />
          </IconDiv>
        </ModalItem>
        <ModalItem isStory={true} onClick={StroryModalHandler}>
          <span>스토리 선택</span>
          <IconDiv>
            <CheckIcon />
          </IconDiv>
        </ModalItem>
        <ModalItem
          isStory={false}
          isRed={true}
          onClick={() => {
            setIsDeleteModalOpen(!isDeleteModalOpen);
          }}
        >
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
      <ToastDiv>
        <ColorToast
          text={toastText}
          onClose={() => {
            setShowToast(false);
          }}
          isShowToast={showToast}
          type={isError?"alert":"normal"}
        />
      </ToastDiv>
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        handleEssayDelete={handleEssayDelete}
      />
      {isMenuOpen && (
        <BlackMiniModal
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          scale={scale}
          onClose={() => setIsMenuOpen(false)}
        >
          {pageType === "public" ? publicRenderer() : privateRenderer()}
        </BlackMiniModal>
      )}
      <MenuIconDiv onClick={(e) => handleMenuOpen(e)} id="not-include">
        <SpotMenuIcon alt="menu_icon" />
      </MenuIconDiv>
    </>
  );
}

export default Menu;

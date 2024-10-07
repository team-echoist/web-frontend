import React, { useEffect, useState } from "react";
import { PrevButton } from "@/shared/ui/button";
import { Article } from "@/shared/ui/article";
import styled from "styled-components";
import TempThumbnail from "@/shared/assets/img/도시.jpg";
import { ColorLessTag } from "@/shared/ui/tag";
import UserProfile from "./contents/UserProfile";
import UnFoldedContents from "./contents/unfoldedcontens/UnFoldedContents";
import Foldedcontents from "./contents/foldedcontents/Foldedcontents";
import Menu from "./contents/menu/Menu";
import { getEssayDetail } from "../api";
import { Essay, AnotherEssay } from "@/shared/types";

const Container = styled.main<{ scale: number }>`
  width: 99vw;
  min-height: 60vh;
  overflow-y: auto;
  zoom: ${({ scale }) => scale};
  overflow-x: hidden;
`;
const ArticleLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const TagDiv = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 50px;
  padding: 29px 147px;
`;

const Divider = styled.div`
  width: 80%;
  background: #1a1a1a;
  height: 12px;
  margin-left: 147px;
`;

function ShowEssayDetails({
  pageType,
  essayId,
  storyId,
}: {
  pageType: string;
  essayId: number;
  storyId?: number;
}) {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [isFolded, setIsFolded] = useState(false);
  const [essay, setEssay] = useState<Essay | null>(null);
  const [prevId, setPrevId] = useState(0);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    getEssayData();
  }, [pageType, essayId, storyId]);

  const getEssayData = async () => {
    try {
      const { data } = await getEssayDetail(
        pageType,
        essayId,
        storyId ? storyId : null
      );
      setEssay(data.essay);
      setPrevId(data?.anotherEssays?.essays[0]?.id);
      setNextId(data?.anotherEssays?.essays[0]?.id | 0);
      console.log("data", data);
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleEssaySize = () => {
    setIsFolded(!isFolded);
  };

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    if (!isDragging) {
      handleEssaySize();
    }
    setIsDragging(false);
  };
  const FoldedContentsRenderer = () => {
    return (
      <Foldedcontents isBookmark={false} prevId={prevId} nextId={nextId} />
    );
  };
  const unFoldedContentsRenderer = () => {
    return (
      <>
        {pageType === "public" && (
          <UserProfile userName="꾸르륵" profileImage={TempThumbnail.src} />
        )}
        <Divider />
        <UnFoldedContents pageType={pageType} prevId={prevId} storyId={storyId}/>
      </>
    );
  };

  const handleZoomIn = () => setScale(scale + 0.1);
  const handleZoomOut = () => setScale(scale - 0.1);
  return (
    <Container scale={scale}>
      <PrevButton />
      <Menu
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        scale={scale}
        pageType={pageType}
      />
      <ArticleLayout
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Article
          title={essay?.title ?? "제목 없음"}
          desc={essay?.content ?? "내용 없음"}
          date={essay?.updatedDate ?? "2024-09-27T15:18:00.164+09:00"}
          userName={essay?.author?.nickname ?? "링크드아웃아무개"}
          imgUrl={essay?.thumbnail}
          isShowBookmark={true}
        />
        {!isFolded && (
          <TagDiv>
            {essay?.tags.map((item) => {
              return (
                <>
                  <ColorLessTag key={item.id} text={item.name} />
                </>
              );
            })}
          </TagDiv>
        )}
      </ArticleLayout>
      {isFolded ? FoldedContentsRenderer() : unFoldedContentsRenderer()}
    </Container>
  );
}

export default ShowEssayDetails;

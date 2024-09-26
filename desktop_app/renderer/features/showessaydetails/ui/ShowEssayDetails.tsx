import React, { useState } from "react";
import { PrevButton } from "@/shared/ui/button";
import { Article } from "@/shared/ui/article";
import styled from "styled-components";
import TempThumbnail from "@/shared/assets/img/도시.jpg";
import { ColorLessTag } from "@/shared/ui/tag";
import SpotMenuIcon from "@/shared/assets/img/spotmenuicon.svg";
import UserProfile from "./contents/UserProfile";
import UnFoldedContents from "./contents/unfoldedcontens/UnFoldedContents";

const Container = styled.main`
  width: 99vw;
  min-height: 60vh;
  overflow-y: auto;
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
const MenuIconDiv = styled.div`
  position: fixed;
  top: 35px;
  right: 10px;
  cursor: pointer;
`;
const Divider = styled.div`
  width: 80%;
  background: #1a1a1a;
  height: 12px;
  margin-left: 147px;
`;

function ShowEssayDetails({ pageType }: { pageType: string }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isFolded, setIsFolded] = useState(false);
  const tempDesc = `<p>예상치 못한 실패, 좌절, 엉뚱한 결과를 의도하는 사람은 거의 없을 것이다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 예상치 못한 실패, 좌절, 엉뚱한 결과를 의도하는 사람은 거의 없을 것이다. </p><p><br></p><p><br></p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. </p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 </p><p><br></p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고,</p>`;
  const handleEssaySize = () => {
    console.log("클릭");
  };
  console.log("pageType", pageType);
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
  console.log("pageType", pageType);
  return (
    <Container>
      <PrevButton />
      <MenuIconDiv>
        <SpotMenuIcon alt="menu_icon" />
      </MenuIconDiv>

      <ArticleLayout
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Article
          title="커뮤니티 랜덤 글 제목"
          desc={tempDesc}
          date="2024-09-25T04:05:30.597Z"
          userName="아무개"
          imgUrl={TempThumbnail.src}
          isShowBookmark={true}
        />
        <TagDiv>
          <ColorLessTag text="#깨달음" />
          <ColorLessTag text="#놀라움" />
          <ColorLessTag text="#새로움" />
        </TagDiv>
      </ArticleLayout>
      {/* {pageType === "public" && (
        <UserProfile userName="꾸르륵" profileImage={TempThumbnail.src} />
      )} */}

      <UserProfile userName="꾸르륵" profileImage={TempThumbnail.src} />
      <Divider />
      <UnFoldedContents pageType={pageType}></UnFoldedContents>
    </Container>
  );
}

export default ShowEssayDetails;

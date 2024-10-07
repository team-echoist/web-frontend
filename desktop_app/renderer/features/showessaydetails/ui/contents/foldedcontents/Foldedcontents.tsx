import React from "react";
import styled from "styled-components";
import BookMark from "@/shared/assets/img/bookmark/bookmark.svg";
import PointBookMark from "@/shared/assets/img/bookmark/pointedBookMark.svg";
import PrevBtn from "@/shared/assets/img/button/prev_button.svg";
import NextBtn from "@/shared/assets/img/button/next_button.svg";

const Layout = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  gap: 32px;
  svg {
    cursor: pointer;
  }
`;
const BookmarkDiv = styled.div`
  padding-left: 30px;
`;

function Foldedcontents({
  isBookmark,
  prevId,
  nextId,
}: {
  isBookmark: boolean;
  prevId: number;
  nextId: number;
}) {
  // 이전 에세이 버튼 이후 에세이 버튼 로직 세팅
  return (
    <Layout>
      <BookmarkDiv>
        {isBookmark ? <PointBookMark></PointBookMark> : <BookMark></BookMark>}
      </BookmarkDiv>
      <BtnDiv>
        <PrevBtn></PrevBtn>
        <NextBtn></NextBtn>
      </BtnDiv>
    </Layout>
  );
}

export default Foldedcontents;

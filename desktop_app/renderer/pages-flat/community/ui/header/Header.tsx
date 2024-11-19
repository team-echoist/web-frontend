import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Search from "@/shared/assets/img/search_black.svg";
import BlackBookMark from "@/shared/assets/img/black_bookmark.svg";
import WhiteSearch from "@/shared/assets/img/search.svg";
import color from "@/shared/styles/color";
import PointedBookMark from "@/shared/assets/img/bookmark/pointedBookMark.svg"

const Layout = styled.header`
  width: 90%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1<{ isblack: boolean }>`
  color: ${({ isblack }) => (isblack ? color.white : "#252525")};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  // margin-left: 30px;
  margin-top: 34px;
`;
const SearchIcon = styled.button<{ isexpanded: boolean }>`
  all: unset;
  cursor: pointer;
  position: absolute;
  left: 89%;
  transition: left 0.3s ease;
  top: 37.63px;
`;

const BookMarkBtn = styled.button<{ isexpanded: boolean }>`
  all: unset;
  cursor: pointer;
  position: absolute;
  left: 93%;
  top: 40px;
`;
function Header({ activeTab }: { activeTab: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleButtonClick = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <Layout>
      <Title isblack={activeTab === 0 ? false : true}>커뮤니티</Title>
      <SearchIcon isexpanded={isExpanded} onClick={handleButtonClick}>
        {activeTab === 0 ? <Search /> : <WhiteSearch />}
      </SearchIcon>
      <BookMarkBtn isexpanded={isExpanded}>
        {activeTab === 0 ? <BlackBookMark />: <PointedBookMark />}
      </BookMarkBtn>
    </Layout>
  );
}

export default Header;

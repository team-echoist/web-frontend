import React from "react";
import styled from "styled-components";
import { useStore } from "@/shared/store";
import color from "@/shared/styles/color";
import Search from "@/shared/assets/img/search.svg";

const Layout = styled.header`
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserName = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-left: 30px;
`;
const SearchIcon = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  left: 90.78%;
  top: 37.63px;
`;
function Header() {
  const user = useStore((state) => state.user);
  return (
    <Layout>
      <UserName>{user?.nickname} 님</UserName>
      <SearchIcon>
        <Search />
      </SearchIcon>
    </Layout>
  );
}

export default Header;

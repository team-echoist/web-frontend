import React from "react";
import Header from "./header/Header";
import styled from "styled-components";
import Arrow from "@/shared/assets/img/menu/right_arrow.svg";
import color from "@/shared/styles/color";

const Layout = styled.nav`
  width: 93%;
`;
const Ul = styled.ul`
  all: unset;
  width: 100%;
`;
const Li = styled.li`
  all: unset;
  display: flex;
  justify-content: space-between;
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 20px 25px 20px 48px;
  background: #111;
  svg {
    cursor: pointer;
  }
`;
function UserSurpport({
  handleCloseComponent,
}: {
  handleCloseComponent: () => void;
}) {
  return (
    <Layout>
      <Header title="고객지원" handleClose={handleCloseComponent} />
      <Ul>
        <Li>
          링크드아웃 고객센터
          <Arrow />
        </Li>
        <Li>
          공지사항
          <Arrow />
        </Li>
        <Li>
          법적 고지
          <Arrow />
        </Li>
      </Ul>
    </Layout>
  );
}

export default UserSurpport;

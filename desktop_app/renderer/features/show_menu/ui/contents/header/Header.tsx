import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import CloseButtonIcon from "@/shared/assets/img/x.svg";

const Layout = styled.header`
  width: 100%;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  positions: relative;
`;

const Title = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;

const ColseBtn = styled.button`
  all: unset;
  position: absolute;
  top: 35px;
  right:110px;
  cursor: pointer;
`;
function Header({
  title,
  handleClose,
}: {
  title: string;
  handleClose: () => void;
}) {
  return (
    <Layout>
      <Title>{title}</Title>
      <ColseBtn onClick={handleClose}>
        <CloseButtonIcon />
      </ColseBtn>
    </Layout>
  );
}

export default Header;

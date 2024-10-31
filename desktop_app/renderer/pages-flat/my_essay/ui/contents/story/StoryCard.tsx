import React, { useState } from "react";
import styled from "styled-components";
import SummaryIcon from "@/shared/assets/img/summaryIcon.svg";
import SpotMenuIcon from "@/shared/assets/img/spotmenuicon.svg";
import color from "@/shared/styles/color";
import { BlackMiniModal } from "@/shared/ui/modal";

const Layout = styled.div`
  width: 650px;
  border-bottom: 1px solid rgba(104, 104, 104, 0.3);
  padding: 20px 0px;
  display: flex;
  justify-content: center;
`;
const SummaryDiv = styled.div`
  position: relative;
`;
const Title = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: 34.72px;
  width: 510px;
  margin-right: 20px;
`;
const Count = styled.p`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20px, -5px);
`;
const MenuIconDiv = styled.div`
  position: relative;
`;

const ModalItem = styled.button<{ isDelete: boolean; isLast?: boolean }>`
  all: unset;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ isDelete }) => (isDelete ? "red" : color.white)};
  align-items: center;
  border-bottom: ${({ isLast }) => (isLast ? "none" : "1px solid #1a1a1a")};
  cursor: pointer;
  span {
    width: 100px;
    margin-left: 5px;
  }
`;
function StoryCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Layout>
      <SummaryDiv>
        <SummaryIcon />
        <Count>9</Count>
      </SummaryDiv>

      <Title>돌연한 출발</Title>
      <MenuIconDiv>
        <SpotMenuIcon></SpotMenuIcon>
        {isModalOpen && (
          <BlackMiniModal
            isAbsolute={true}
            top="30px"
            right="10px"
            isNoneActiveOutside={true}
          >
            <ModalItem isDelete={false}>스토리 편집</ModalItem>
            <ModalItem isDelete={true} isLast={true}>
              스토리 삭제
            </ModalItem>
          </BlackMiniModal>
        )}
      </MenuIconDiv>
    </Layout>
  );
}

export default StoryCard;

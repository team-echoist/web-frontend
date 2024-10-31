import React from "react";
import styled from "styled-components";
import PlusBtn from "@/shared/assets/img/plus.webp";
import Image from "next/image";
import color from "@/shared/styles/color";
import BigLogo from "@/shared/assets/img/big_logo.webp";

const Layout = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  background-image: url(${BigLogo.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 320.5px 266px;
`;

const AddButton = styled.button`
  all: unset;
  width: 650px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const P = styled.p`
  color: #909090;
  text-align: left;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top:34.09px;
  margin-left:14px;
  width:100%;
`;

function StoryList() {
  return (
    <Layout>
      <AddButton>
        <Image src={PlusBtn.src} width={24} height={24} alt="plus_btn_icon" />
      </AddButton>
      <P>썼던 글을 모아 스토리를 만들어보세요!</P>
    </Layout>
  );
}

export default StoryList;

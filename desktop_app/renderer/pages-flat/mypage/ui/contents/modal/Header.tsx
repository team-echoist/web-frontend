import React from "react";
import styled from "styled-components";
import PrevButtonImg from "@/shared/assets/img/prevbutton.svg";
import color from "@/shared/styles/color";

const Layout = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 30px 26px 30px;
`;
const GreyBtn = styled.button`
  all: unset;
  color: ${color.gray1};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
`;
const Title = styled.h1`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const Btn = styled.button`
  all: unset;
  color: ${color.white};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
`;
const TitleDiv = styled.div`
  position: absolute;
  left:42%;
`;

interface User {
  email?: string;
  nickname?: string;
  password?: string;
  gender?: string;
  profileImage?: string;
  birthDate?: string;
  isFirst?: boolean;
  locationConsent?: boolean;
}
function Header({
  editUserInfo,
  nickname,
  isProfileEdit,
  handleEdit
}: {
  editUserInfo: (body: User) => void;
  nickname: string;
  isProfileEdit: boolean;
  handleEdit:()=>void;
}) {
  const onSubmit = () => {
    const body = {
      nickname: nickname,
    };
    editUserInfo(body);
  };
  const editProfileNameRenderer = () => {
    return (
      <>
        <GreyBtn>취소</GreyBtn>
        <Title>프로필 편집</Title>
        <Btn onClick={onSubmit}>완료</Btn>
      </>
    );
  };
  const selectIconRenderer = () => {
    return (
      <>
        <Btn onClick={handleEdit}>
          <PrevButtonImg />
        </Btn>
        <TitleDiv>
          <Title>아이콘 선택</Title>
        </TitleDiv>
      </>
    );
  };
  return (
    <Layout>
      {isProfileEdit ? selectIconRenderer() : editProfileNameRenderer()}
    </Layout>
  );
}

export default Header;

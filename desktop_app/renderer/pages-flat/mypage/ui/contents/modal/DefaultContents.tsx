import React, { useState } from "react";
import styled from "styled-components";
import { useStore } from "@/shared/store";
import { CircularAvatar } from "@/shared/ui/avatar";
import DefaultProfileImg from "@/shared/assets/img/default_profile.webp";
import EditIcon from "@/shared/assets/img/edit_icon.svg";
import { Input } from "@/shared/ui/input";
import color from "@/shared/styles/color";

const Layout = styled.div`
  width: 100%;
  height: 325px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 46.89px;
`;
const AvatarContainer = styled.div`
  position: relative;
`;
const Btn = styled.button`
  all: unset;
  position: absolute;
  top: 110px;
  left: 70%;
  cursor: pointer;
`;
const Text = styled.span`
  color: #464646;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const InputDiv = styled.div<{ iserror: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  position: relative;
  input {
    color: ${({ iserror }) => (iserror ? color.red : color.pointcolor)};
  }
`;
const FixedText = styled.span<{ offset: number }>`
  color: ${color.white};
  pointer-events: none;
  position: absolute;
  top: 44px;
  left: ${(props) => 40 + props.offset}px;
`;
const Span = styled.span<{ iserror: boolean }>`
  color: ${({ iserror }) => (iserror ? color.red : color.pointcolor)};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  padding-left: 16px;
`;

function DefaultContents({
  isError,
  handleChange,
  nickname,
  handleEdit,
}: {
  isError: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nickname: string;
  handleEdit: () => void;
}) {
  const user = useStore((state) => state.user);

    const profileImage = user?.profileImage?.includes("cdn.linkedoutapp.com")
    ? user?.profileImage .replace(
        "https://cdn.linkedoutapp.com",
        "http://58.236.96.102:8888/public"
      )
    : user?.profileImage  || DefaultProfileImg.src;
  return (
    <Layout>
      <AvatarContainer>
        <CircularAvatar
          img={profileImage}
          width={162}
          height={162}
        />
        <Btn onClick={handleEdit}>
          <EditIcon />
        </Btn>
      </AvatarContainer>
      <InputDiv iserror={isError}>
        <Text>링크드아웃 필명</Text>
        {nickname.length > 0 && (
          <FixedText offset={nickname.length * 12}>아무개</FixedText>
        )}
        <Input
          placeholder="닉네임을 입력해 주세요."
          name="nickname"
          error={isError}
          value={nickname}
          onChange={handleChange}
          maxLength={5}
        />
        <Span iserror={isError}>
          {isError
            ? "*중복되는 필명입니다. 다른 이름을 사용해주세요."
            : "*필명은 최대 6자, 한글로만 입력 가능합니다."}
        </Span>
      </InputDiv>
    </Layout>
  );
}

export default DefaultContents;

import React from "react";
import styled, { css } from "styled-components";
import BaseInput from "@/shared/ui/input/BaseInput";


interface ButtonProps {
  isCancel: boolean;
}

const Layout = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: flex-end;
  padding-right: 18px;
  padding-bottom: 10px;
`;
const Button = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 10px 20px;
  border-radius: 4px;
  white-space: nowrap;
  ${({ isCancel }) =>
    isCancel
      ? css`
          color: #686868;
        `
      : css`
          color: #fff;
        `}
`;

const TitleDiv = styled.div`
  width: 89.98%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 10px 20px;
`;

function TitleField({ title }: { title: string }) {
  return (
    <Layout>
      <Button isCancel={true}>취소</Button>
      <TitleDiv>
      <BaseInput value={title} placeholder="제목을 입력해 주세요"/>
      </TitleDiv>
      <Button isCancel={false}>완료</Button>
    </Layout>
  );
}

export default TitleField;
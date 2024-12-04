import React from "react";
import DefaultLayout from "../../ui/DefaultLayout";
import styled from "styled-components";
import color from "@/shared/styles/color";

const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: fixed;
  left: 315px;
  top: 35px;
`;
function UserManage({
  modalHandler,
}: {
  modalHandler: (name: string) => void;
}) {
  return (
    <DefaultLayout modalHandler={modalHandler} name="manage">
      <H1>계정 관리</H1>
    </DefaultLayout>
  );
}

export default UserManage;

import React from "react";
import styled from "styled-components";
import MenuDefaultLayout from "../../ui/MenuDefaultLayout";
import color from "@/shared/styles/color";
import { NoneContents } from "@/shared/ui/layout";

const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: absolute;
  left: 48px;
  top: 3px;
`;

function Notice({
  submodalHandler,
}: {
  submodalHandler: (name: string) => void;
}) {
  return (
    <MenuDefaultLayout
      modalHandler={submodalHandler}
      isSubModal={true}
      name="notice"
    >
      <H1>공지사항</H1>
      <NoneContents text="새로운 공지사항이 없습니다." height={716}/>
    </MenuDefaultLayout>
  );
}

export default Notice;

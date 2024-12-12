import React from 'react'
import styled from 'styled-components'
import MenuDefaultLayout from '../../ui/MenuDefaultLayout';
import { NoneContents } from "@/shared/ui/layout";
import color from '@/shared/styles/color';

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

function UserInquire({
  submodalHandler,
}: {
  submodalHandler: (name: string) => void;
}) {
  return (
    <MenuDefaultLayout
    modalHandler={submodalHandler}
    isSubModal={true}
    name="inquire"
  >
    <H1>1:1 문의하기</H1>
    <NoneContents text="문의 내역이 없습니다." height={716}/>
  </MenuDefaultLayout>
  )
}

export default UserInquire
import React from "react";
import * as Styled from "./mypage.styled";
import { ActiveSideBar } from "@/features/activesidebar";

export const Mypage = () => {
  return (
    <Styled.SLayout>
      <ActiveSideBar></ActiveSideBar>
    </Styled.SLayout>
  );
};

import React, { ReactNode } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

const Layout = styled.div<{ isFocused: boolean }>`
  width: 330px;
  height: 119px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #191919;
  background: ${({ isFocused }) => (isFocused ? color.pointcolor : "#121212")};
  z-index: 10;
  display:flex;
  justify-content: center;
  align-items: center;
  padding-left:10px;
  padding-right:10px;
`;

function GeneralCard({
  children,
  isFocused,
}: {
  children: ReactNode;
  isFocused: boolean;
}) {
  return <Layout isFocused={isFocused}>{children}</Layout>;
}

export default GeneralCard;
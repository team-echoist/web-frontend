import React, { useState } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

const TabContainer =styled.div`
 display:flex;
 justify-content:center;
`

const TabItem = styled.button<{ isActiveTab: boolean }>`
  all: unset;
  width: 219px;
  height: 48px;
  border-bottom: ${({ isActiveTab }) =>
    isActiveTab ? `3px solid ${color.white}` : "none"};
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items: center;
`;

function Tab({
  tabData,
  activeTab,
  handleChangeActiveTab,
}: {
  tabData: string[];
  activeTab: number;
  handleChangeActiveTab: (index: number) => void;
}) {
  return (
    <TabContainer>
      {tabData.map((item, index) => (
        <TabItem
          key={item}
          isActiveTab={activeTab === index}
          onClick={() => handleChangeActiveTab(index)}
        >
          {item}
        </TabItem>
      ))}
    </TabContainer>
  );
}

export default Tab;

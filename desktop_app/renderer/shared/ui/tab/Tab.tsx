import React, { useState } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TabItem = styled.button<{ isactivetab: boolean }>`
  all: unset;
  width: 219px;
  height: 48px;
  border-bottom: ${({ isactivetab }) =>
    isactivetab ? `3px solid ${color.white}` : "none"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  data {
    margin-top: 3px;
    margin-left: 10px;
  }
`;

function Tab({
  tabData,
  activeTab,
  handleChangeActiveTab,
  listCount,
}: {
  tabData: string[];
  activeTab: number;
  handleChangeActiveTab: (index: number) => void;
  listCount: number;
}) {
  return (
    <TabContainer>
      {tabData.map((item, index) => (
        <TabItem
          key={item}
          isactivetab={activeTab === index}
          onClick={() => handleChangeActiveTab(index)}
        >
          {item}
          <data> {activeTab === index && listCount}</data>
        </TabItem>
      ))}
    </TabContainer>
  );
}

export default Tab;

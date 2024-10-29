import React, { useState } from "react";
import { Tab } from "@/shared/ui/tab";
import Card from "./Card";
import styled from "styled-components";

const CardContiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function List() {
  const [tabData, setTabData] = useState(["나만의 글", "발행한 글", "스토리"]);
  //추후 api 연동후 글개수 counting 한거 파싱해야됨
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <>
      <Tab
        tabData={tabData}
        activeTab={activeTab}
        handleChangeActiveTab={handleChangeActiveTab}
      />
      <CardContiner>
        <Card />
      </CardContiner>
    </>
  );
}

export default List;

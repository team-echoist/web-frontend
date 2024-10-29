import React, { useEffect, useState } from "react";
import { Tab } from "@/shared/ui/tab";
import Card from "./Card";
import styled from "styled-components";
import { getEssays } from "@/shared/api";
import { getStories } from "@/shared/api";
import { Essay } from "@/shared/types";
import { ScrollTop } from "@/shared/ui/scroll";

const CardContiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function List() {
  const [tabData, setTabData] = useState(["나만의 글", "발행한 글", "스토리"]);
  //추후 api 연동후 글개수 counting 한거 파싱해야됨
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const [listData, setListData] = useState<Essay[]>([]);

  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    if (activeTab !== 2) {
      getList();
    }
  }, [activeTab]);

  const getList = async () => {
    try {
      const tabInfo: { [key: number]: string } = {
        0: "private",
        1: "public",
      } as const;
      const pageType = tabInfo[activeTab];
      // pageType: private, public
      const { data } = await getEssays(page, 5, pageType);
      setListData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Tab
        tabData={tabData}
        activeTab={activeTab}
        handleChangeActiveTab={handleChangeActiveTab}
      />
      <CardContiner>
        {listData.map((item) => (
          <Card
            key={item.title}
            data={item}
            type={activeTab === 0 ? "private" : "public"}
          />
        ))}
      </CardContiner>
    </>
  );
}

export default List;

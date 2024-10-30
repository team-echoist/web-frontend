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
const NoneData = styled.div`
  height: 80vh;
  color: #686868;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  display:flex;
  align-items: center;
  justify-content: center;
`;

function List() {
  const tabData = ["나만의 글", "발행한 글", "스토리"];
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const [listData, setListData] = useState<Essay[]>([]);
  const [listCount, setListCount] = useState(0);

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
      setListCount(data.length);
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
        listCount={listCount}
      />
      {/* <NoneData>저장된 글이 없습니다.</NoneData> */}
      {/* 추후 스토리 로직 세팅후 활성화 */}
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

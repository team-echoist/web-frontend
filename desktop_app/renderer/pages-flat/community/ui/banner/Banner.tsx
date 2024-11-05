import React, { useState } from "react";
import styled from "styled-components";
import { Tab } from "@/shared/ui/tab";
import { SelectBox } from "@/shared/ui/selectbox";

const Layout = styled.div`
  width: 862px;
  padding-top: 51px;
`;
const TitleDiv = styled.div`
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H1 = styled.h1`
  color: #262626;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%;
`;
const P = styled.p`
  color: #696969;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
const ContentDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 300px;
`;
const TitleTextDiv = styled.div``;
const SelectBoxDiv = styled.div`
  margin-right: 30px;
`;
const options = [
  { value: "first", label: "첫 문장" },
  { value: "last", label: "마지막 문장" },
];
function Banner() {
  const tab = ["랜덤", "구독"];
  const [selectedValue, setSelectedValue] = useState<string>(options[0].label);
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <Layout>
      <Tab
        tabData={tab}
        activeTab={activeTab}
        handleChangeActiveTab={handleChangeActiveTab}
        isBlack={true}
        width="431px"
      />
      <TitleDiv>
        <TitleTextDiv>
          <H1>한 문장을 모아</H1>
          <P>글의 시작을 알리는 문장들을 만나보세요.</P>
        </TitleTextDiv>
        <SelectBoxDiv>
          <SelectBox
            options={options}
            selectedValue={selectedValue}
            onChange={(value) => setSelectedValue(value)}
          />
        </SelectBoxDiv>
      </TitleDiv>
      <ContentDiv></ContentDiv>
    </Layout>
  );
}

export default Banner;

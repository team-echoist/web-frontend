import React, { useState } from "react";
import styled from "styled-components";
import { Tab } from "@/shared/ui/tab";
import { SelectBox } from "@/shared/ui/selectbox";
import colorList from "@/shared/styles/color";

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
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
`;
const TitleTextDiv = styled.div``;
const SelectBoxDiv = styled.div`
  margin-right: 30px;
`;
const Chip = styled.div<{ color?: string; expanded?: boolean; width: string }>`
  background-color: ${({ color = colorList.black }) => color};
  cursor: pointer;
  display: inline-flex;
  height: 60px;
  padding: 8px 20px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  border-radius: 0px 50px 50px 0px;
  width: ${({ expanded, width }) => (expanded ? "95%" : width)};
  transition: width 0.5s ease;
`;
const Span = styled.span<{ color?: string }>`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ color = colorList.white }) => color};
`;
const options = [
  { value: "first", label: "첫 문장" },
  { value: "last", label: "마지막 문장" },
];
function Banner() {
  const tab = ["랜덤", "구독"];
  const [selectedValue, setSelectedValue] = useState<string>(options[0].label);
  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

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
      <ContentDiv>
        <Chip expanded={isExpanded} onClick={handleClick} width="150px">
          <Span color={colorList.white}>이원영은 초파리를 좋아했다.</Span>
        </Chip>
        <Chip
          expanded={isExpanded}
          onClick={handleClick}
          width="150px"
          color={colorList.white}
        >
          <Span color={colorList.black}>
            빗소리가 커서 괜찮지 않냐고 물었지만 사실 너무 커서 무서웠다.
          </Span>
        </Chip>
        <Chip
          expanded={isExpanded}
          onClick={handleClick}
          width="150px"
        >
          <Span color={colorList.white}>
            빗소리가 커서 괜찮지 않냐고 물었지만 사실 너무 커서 무서웠다.
          </Span>
        </Chip>
      </ContentDiv>
    </Layout>
  );
}

export default Banner;

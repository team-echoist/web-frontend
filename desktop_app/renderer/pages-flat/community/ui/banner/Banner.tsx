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
  overflow: hidden;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  position: relative;
`;
const TitleTextDiv = styled.div``;
const SelectBoxDiv = styled.div`
  margin-right: 30px;
`;
const Chip = styled.div<{
  color?: string;
  expanded?: boolean;
  width: string;
  index: number;
  isVisible: boolean;
  left: string;
  translateX: string;
}>`
  background-color: ${({ color = colorList.black }) => color};
  cursor: pointer;
  display: inline-flex;
  height: 60px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 170%;
  border-radius: 0px 50px 50px 0px;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  width: ${({ expanded, width, index }) =>
    expanded ? (index === 0 ? "822px" : "calc(820px - 40px)") : width};
  transition: width 0.5s ease, transform 0.5s ease;
  transform: ${({ expanded, index, translateX }) => {
    if (expanded) {
      return translateX;
    }
  }};
  z-index: ${({ expanded, index }) => (expanded ? 1 : 10 - index)};
  position: absolute;
  top: 0;
  left: ${({ left }) => left};
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
const ContentItemDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
const ChipContainer = styled.div`
  position: relative;
  width: 100%;
`;
const options = [
  { value: "first", label: "첫 문장" },
  { value: "last", label: "마지막 문장" },
];
function Banner() {
  const tab = ["랜덤", "구독"];
  const [selectedValue, setSelectedValue] = useState<string>(options[0].label);
  const [activeTab, setActiveTab] = useState(0);
  const [expandedChipIndex, setExpandedChipIndex] = useState<number | null>(
    null
  );

  const handleClick = (index: number) => {
    setExpandedChipIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const chipsData = [
    {
      text: "이원영은 초파리를 좋아했다.",
      color: colorList.black,
      textColor: colorList.white,
      width: "180px",
      left: "0px",
      translateX: "translateX(0)",
    },
    {
      text: "빗소리가 커서 괜찮지 않냐고 물었지만 사실 너무 커서 무서웠다.",
      color: colorList.white,
      textColor: colorList.black,
      width: "400px",
      left: "-200px",
      translateX: "translateX(-10%)",
    },
    {
      text: "빗소리가 커서 괜찮지 않냐고 물었지만 사실 너무 커서 무서웠다.",
      color: colorList.black,
      textColor: colorList.white,
      width: "417px",
      left: "-100px",
      translateX: "translateX(-60%)",
    },
  ];
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
        <ContentItemDiv>
          {chipsData.map((chip, index) => (
            <ChipContainer key={index}>
              <Chip
                expanded={expandedChipIndex === index}
                onClick={() => handleClick(index)}
                width={chip.width}
                color={chip.color}
                index={index}
                isVisible={
                  expandedChipIndex === null || expandedChipIndex === index
                }
                left={chip.left}
                translateX={chip.translateX}
              >
                <Span color={chip.textColor}>{chip.text}</Span>
              </Chip>
            </ChipContainer>
          ))}
        </ContentItemDiv>
      </ContentDiv>
    </Layout>
  );
}

export default Banner;

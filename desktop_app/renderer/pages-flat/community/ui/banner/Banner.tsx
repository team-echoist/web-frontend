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
  height: 500px;
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
  // gap: 10px;
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
  const [expandedChipIndices, setExpandedChipIndices] = useState<{
    [key: number]: number | null;
  }>({
    1: null,
    2: null,
    3: null,
    4:null,
    5:null
  });

  const handleChipClick = (group: number, index: number) => {
    setExpandedChipIndices((prevIndices) => {
      const newIndices = { ...prevIndices };

      if (newIndices[group] === index) {
        newIndices[group] = null; 
      } else {
        for (let key in newIndices) {
          newIndices[key] = parseInt(key) === group ? index : null;
        }
      }
  
      return newIndices;
    });
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
  const chipsData2 = [
    {
      text: "책장을 넘기는 내내 입안에서 독이 든 사탕을 굴리는 기분이었다.",
      color: colorList.white,
      textColor: colorList.black,
      width: "367px",
      left: "0px",
      translateX: "translateX(0)",
    },
    {
      text: "할 말이 없기도 하고 또 너무 많기도 했다.",
      color: colorList.black,
      textColor: colorList.white,
      width: "400px",
      left: "-50px",
      translateX: "translateX(-30%)",
    },
    {
      text: "목격한 순간, 결코 이전으로 되돌아갈 수 없었다.",
      color: colorList.white,
      textColor: colorList.black,
      width: "417px",
      left: "-30px",
      translateX: "translateX(-68%)",
    },
  ];
  const chipsData3 = [
    {
      text: "하루 종일 줄곧 침대에만 누워있다.",
      color: colorList.black,
      textColor: colorList.white,
      width: "228px",
      left: "0px",
      translateX: "translateX(0)",
    },
    {
      text: "바닷새는 바닷사람처럼 묻혀야지.",

      color: colorList.white,
      textColor: colorList.black,
      width: "340px",
      left: "-50px",
      translateX: "translateX(-30%)",
    },
    {
      text: "갑자기 이유를 알 수 없게 화가 치솟아서 손톱을 세웠지만, 역시 사람의 피부라는 생각에 금방 기운이 빠졌다.",
      color: colorList.black,
      textColor: colorList.white,
      width: "417px",
      left: "-30px",
      translateX: "translateX(-68%)",
    },
  ];
  const chipsData4 = [
    {
      text: "“미안하다.” 그런 뻔한 소리를 듣고 싶은 게 아니었다.",
      color: colorList.white,
      textColor: colorList.black,
      width: "326px",
      left: "0px",
      translateX: "translateX(0)",
    },
    {
      text: "일그러진 엄마의 얼굴이 콩깍지가 벌어지듯 탁 터졌다.",
      color: colorList.black,
      textColor: colorList.white,
      width: "400px",
      left: "-50px",
      translateX: "translateX(-30%)",
    },
    {
      text: "가끔은 내가 이 고양이를 미워한다는 생각이 들어.",
      color: colorList.white,
      textColor: colorList.black,
      width: "417px",
      left: "-30px",
      translateX: "translateX(-68%)",
    },
  ];
  const chipsData5 = [
    {
      text: "단어로, 어절로, 완전한 문장으로, 말이 순서 없이 차오르는 순간이 있다.",
      color: colorList.black,
      textColor: colorList.white,
      width: "445px",
      left: "0px",
      translateX: "translateX(0)",
    },
    {
      text: "뭉근한 수프를 휘젓는 마음으로 하염없이 걸었다.",
      color: colorList.white,
      textColor: colorList.black,

      width: "400px",
      left: "0px",
      translateX: "translateX(-35%)",
    },
    {
      text: "산더미처럼 높아지는 파도를 볼 수 없었고, 다음 모퉁이를 돌아 나오는 위기를 볼 수 없었다.",
      color: colorList.black,
      textColor: colorList.white,
      width: "417px",
      left: "-30px",
      translateX: "translateX(-68%)",
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
                expanded={expandedChipIndices[1] === index}
                onClick={() => handleChipClick(1, index)} // 그룹 1 전달
                width={chip.width}
                color={chip.color}
                index={index}
                isVisible={
                  expandedChipIndices[1] === null ||
                  expandedChipIndices[1] === index
                }
                left={chip.left}
                translateX={chip.translateX}
              >
                <Span color={chip.textColor}>{chip.text}</Span>
              </Chip>
            </ChipContainer>
          ))}
        </ContentItemDiv>

        <ContentItemDiv>
          {chipsData2.map((chip, index) => (
            <ChipContainer key={index}>
              <Chip
                expanded={expandedChipIndices[2] === index}
                onClick={() => handleChipClick(2, index)} // 그룹 2 전달
                width={chip.width}
                color={chip.color}
                index={index}
                isVisible={
                  expandedChipIndices[2] === null ||
                  expandedChipIndices[2] === index
                }
                left={chip.left}
                translateX={chip.translateX}
              >
                <Span color={chip.textColor}>{chip.text}</Span>
              </Chip>
            </ChipContainer>
          ))}
        </ContentItemDiv>
        <ContentItemDiv>
          {chipsData3.map((chip, index) => (
            <ChipContainer key={index}>
              <Chip
                expanded={expandedChipIndices[3] === index}
                onClick={() => handleChipClick(3, index)} // 그룹 3 전달
                width={chip.width}
                color={chip.color}
                index={index}
                isVisible={
                  expandedChipIndices[3] === null ||
                  expandedChipIndices[3] === index
                }
                left={chip.left}
                translateX={chip.translateX}
              >
                <Span color={chip.textColor}>{chip.text}</Span>
              </Chip>
            </ChipContainer>
          ))}
        </ContentItemDiv>
        <ContentItemDiv>
          {chipsData4.map((chip, index) => (
            <ChipContainer key={index}>
              <Chip
                expanded={expandedChipIndices[4] === index}
                onClick={() => handleChipClick(4, index)} 
                width={chip.width}
                color={chip.color}
                index={index}
                isVisible={
                  expandedChipIndices[4] === null ||
                  expandedChipIndices[4] === index
                }
                left={chip.left}
                translateX={chip.translateX}
              >
                <Span color={chip.textColor}>{chip.text}</Span>
              </Chip>
            </ChipContainer>
          ))}
        </ContentItemDiv>
        <ContentItemDiv>
          {chipsData5.map((chip, index) => (
            <ChipContainer key={index}>
              <Chip
                expanded={expandedChipIndices[5] === index}
                onClick={() => handleChipClick(5, index)} 
                width={chip.width}
                color={chip.color}
                index={index}
                isVisible={
                  expandedChipIndices[5] === null ||
                  expandedChipIndices[5] === index
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

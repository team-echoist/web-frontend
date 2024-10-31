import React, { useState } from "react";
import PrevButtonImg from "@/shared/assets/img/prevbutton.svg";
import styled from "styled-components";
import color from "@/shared/styles/color";
import SpotMenuIcon from "@/shared/assets/img/spotmenuicon.svg";
import Check from "@/shared/ui/check/check";
import { Button } from "@/shared/ui/button";
import SuccessStory from "./SuccessStory";

const Layout = styled.article`
  display: flex;
  flex-direction: column;

  .menu {
    margin-right: 30px;
  }
`;

const PrevBtn = styled.button`
  width: 24px;
  height: 20.5px;
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 30px;
  &:focus {
    outline: none;
  }
`;
const Header = styled.header`
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(104, 104, 104, 0.3);
  background: #121212;
  display: flex;
  margin-top: 32px;
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  width: 95%;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
`;
const Input = styled.input`
  all: unset;
  display: flex;
  width: 900px;
  padding: 46px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #161616;
`;
const ContentsBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsInfo = styled.div`
  display: flex;
  width: 900px;
  padding: 15px 40px;
  align-items: center;
  justify-content: space-between;
  gap: 689px;
  border-right: 1px solid rgba(104, 104, 104, 0.1);
  border-left: 1px solid rgba(104, 104, 104, 0.1);
  border-bottom: 1px solid rgba(104, 104, 104, 0.1);
`;

const Span = styled.span`
  color: #727070;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Strong = styled.strong`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const BlackButton = styled.button`
  all: unset;
  border-radius: 4px;
  background: #161616;
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${color.pointcolor};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
`;

const ListCard = styled.div`
  border-right: 1px solid rgba(104, 104, 104, 0.1);
  border-left: 1px solid rgba(104, 104, 104, 0.1);
  border-bottom: 1px solid rgba(104, 104, 104, 0.1);
  display: flex;
  width: 900px;
  padding: 24px 40px;
  justify-content: space-between;
  gap: 10px;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const P = styled.p`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Time = styled.time`
  color: #727070;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const BtnDiv = styled.div`
  position: fixed;
  bottom: 60px;
`;
const CheckDiv = styled.div`
  display: flex;
  align-items: center;
`;
const CountText = styled.p`
  color: #6b6b6b;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Chip = styled.div`
  display: inline-flex;
  height: 20px;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${color.pointcolor};
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

function AddStoryModal({ handleStoryModal }: { handleStoryModal: () => void }) {
  const [isSuccess, setIsSuccess] = useState(true);
  return (
    <Layout>
      <Header>
        <PrevBtn onClick={handleStoryModal}>
          <PrevButtonImg />
        </PrevBtn>
        <Title>
          {isSuccess ? (
            <>
              <Chip>스토리</Chip>
              돌연한 출발 <CountText>8편</CountText>
            </>
          ) : (
            "스토리 만들기"
          )}
        </Title>
        {isSuccess && <SpotMenuIcon class="menu" />}
      </Header>
      <ContentsBody>
        {isSuccess ? (
          <SuccessStory />
        ) : (
          <>
            <Input placeholder="에세이 제목" />
            <ContentsInfo>
              <Span>
                전체 <Strong>8</Strong>개
              </Span>
              <BlackButton>전체 선택</BlackButton>
            </ContentsInfo>
            <ListCard>
              <TextDiv>
                <P>뜻밖의 사실</P>
                <Time>2024.05.19</Time>
              </TextDiv>
              <CheckDiv>
                <Check check={true} type="circle"></Check>
              </CheckDiv>
            </ListCard>
            <BtnDiv>
              <Button text="총 0개 모으기" />
            </BtnDiv>
          </>
        )}
      </ContentsBody>
    </Layout>
  );
}

export default AddStoryModal;

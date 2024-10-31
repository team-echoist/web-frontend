import React, { useEffect, useState } from "react";
import PrevButtonImg from "@/shared/assets/img/prevbutton.svg";
import styled from "styled-components";
import color from "@/shared/styles/color";
import SpotMenuIcon from "@/shared/assets/img/spotmenuicon.svg";
import Check from "@/shared/ui/check/check";
import { Button } from "@/shared/ui/button";
import SuccessStory from "./SuccessStory";
import { getNotIncludedEssay } from "@/shared/api";
import { Essay } from "@/shared/types";
import { formatDateString } from "@/shared/lib/date";
import { postStory } from "@/shared/api";

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
  margin-bottom: 30px;
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

function AddStoryModal({
  handleStoryModal,
  selectedStoryId,
}: {
  handleStoryModal: () => void;
  selectedStoryId: number | null;
}) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [essay, setEssay] = useState<Essay[]>([]);
  const [checkedCount, setCheckedCount] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const count = essay.filter((item) => item.isChecked).length;
    setCheckedCount(count);
  }, [essay]);

  useEffect(() => {
    essayList();
  }, []);

  const essayList = async () => {
    try {
      const storyId = selectedStoryId ? selectedStoryId : null;
      const { data } = await getNotIncludedEssay();
      // story Id가 있으면 StoryId 태워서 보내고, storyId 매개변수로 안넣은것도 보내서 파싱해야됨
      // storyId가 있는것들의 data값에는 무조건 isChecked:true로
      // 스토리 id가 있다면 setTitle도 해줘야됨
      const updatedData = data.map((item) => ({
        ...item,
        isChecked: false,
      }));
      setEssay(updatedData);
    } catch (err) {
      console.log(err);
    }
  };
  const toggleCheck = (index: number) => {
    setEssay((prevEssay) =>
      prevEssay.map((item, i) =>
        i === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };
  const selectAll = () => {
    setEssay((prevEssay) =>
      prevEssay.map((item) => ({ ...item, isChecked: !item.isChecked }))
    );
  };
  const updateStory = async () => {
    // 스토리 id가 선택되었을때 안되었을때 나눠서 api요청
    if (title.length === 0) {
      alert("스토리 이름을 적어주세요.");
    }
    try {
      const { status, data } = await postStory(title, essay);
      console.log("status", status, data);
    } catch (err) {
      console.log(err);
    }
  };

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
          <SuccessStory selectedStoryId={selectedStoryId} />
        ) : (
          <>
            <Input
              placeholder="에세이 제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ContentsInfo>
              <Span>
                전체 <Strong>{essay.length}</Strong>개
              </Span>
              <BlackButton onClick={selectAll}>전체 선택</BlackButton>
            </ContentsInfo>
            {essay.map((item, index) => (
              <ListCard key={item.title}>
                <TextDiv>
                  <P>{item.title}</P>
                  <Time>{formatDateString(item.createdDate)}</Time>
                </TextDiv>
                <CheckDiv>
                  <Check
                    check={item.isChecked}
                    setCheck={() => toggleCheck(index)}
                    type="circle"
                  />
                </CheckDiv>
              </ListCard>
            ))}

            <BtnDiv>
              <Button
                text={`총 ${checkedCount}개 모으기`}
                type={checkedCount > 0 ? "point" : "disable"}
                onClick={checkedCount > 0 ? updateStory : undefined}
              />
            </BtnDiv>
          </>
        )}
      </ContentsBody>
    </Layout>
  );
}

export default AddStoryModal;

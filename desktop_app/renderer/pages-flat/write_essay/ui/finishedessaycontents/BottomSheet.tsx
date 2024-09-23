import React, { useState } from "react";
import styled from "styled-components";
import { BottomSeet } from "@/shared/ui/modal";
import color from "@/shared/styles/color";
import Loop from "@/shared/assets/img/loop.svg";
import NextBtnImg from "@/shared/assets/img/next_Icon.svg";
import { changeGroupChain, changeSingleChain } from "../../utils/changeChain";
import { useRouter } from "next/navigation";

const Layout = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.isOpen ? "rgba(0, 0, 0, 0.8)" : "")};
  z-index: ${(props) => (props.isOpen ? "999" : "0")};
`;
const Wrapper = styled.div``;

const TopNavigatorDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavigatorChip = styled.div`
  border-radius: 15px;
  background: #8a8a8a;
  width: 40px;
  height: 5px;
  flex-shrink: 0;
  cursor: pointer;
`;
const P = styled.p`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const TitleDiv = styled.div`
  margin-top: 50px;
`;
const StepTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const LoopDiv = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const LoopWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  height: 100%;
  position: relative;
`;

const Strong = styled.strong`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  text-decoration-line: underline;
`;
const NextBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 60px;
  right: 41px;
`;
const PrevBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 60px;
  left: 41px;
  .prev-btn {
    transform: scaleX(-1);
  }
`;

const ChainDiv = styled.div<{ isReversing?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .forward-click-able {
    cursor: ${({ isReversing }) => (isReversing ? "default" : "pointer")};
  }

  .reverse-click-able {
    cursor: ${({ isReversing }) => (isReversing ? "pointer" : "default")};
  }
`;

const GroupChainDiv = styled.div``;
const StepTwoWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
`;

const SingleChainDiv = styled.div``;
interface Loop {
  id: number;
  loose: string;
  tied: string;
  default: string;
  isMoving: boolean;
}

function BottomSheet({ tag }: { tag: string[] }) {
  const [isOpen, setIsOpen] = useState(true);
  const [chainStep, setChainStep] = useState("zero");
  const [isReversing, setIsReversing] = useState(false);
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDialogClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const handleChainStep = () => {
    const chainStepArr = ["zero", "one", "two", "three", "four"];
    const currentIndex = chainStepArr.findIndex((s) => s === chainStep);

    let nextStep;

    if (isReversing) {
      if (currentIndex === 0) {
        setIsReversing(false);
        nextStep = chainStepArr[currentIndex + 1];
      } else {
        if (currentIndex === 1) {
          setIsReversing(false);
        }
        nextStep = chainStepArr[currentIndex - 1];
      }
    } else {
      if (currentIndex === chainStepArr.length - 1) {
        // 마지막인덱스일때 뒤집어준다.
        setIsReversing(true);
        nextStep = chainStepArr[currentIndex - 1];
      } else {
        nextStep = chainStepArr[currentIndex + 1];
      }
    }

    setChainStep(nextStep);
  };

  const stepOneRenderer = () => {
    return (
      <>
        <TitleDiv>
          <P>
            이 <Strong>글을 쓰면서 풀어낸 마음</Strong> 만큼
          </P>
          <P>고리를 풀어주세요.</P>
        </TitleDiv>
        <LoopDiv>
          <LoopWrapper>
            <ChainDiv isReversing={isReversing}>
              <GroupChainDiv
                onClick={isReversing ? undefined : handleChainStep}
              >
                {changeGroupChain(chainStep)}
              </GroupChainDiv>
              <SingleChainDiv
                onClick={isReversing ? handleChainStep : undefined}
              >
                {changeSingleChain(chainStep)}
              </SingleChainDiv>
            </ChainDiv>
          </LoopWrapper>
          <NextBtn onClick={stepHandler}>
            <NextBtnImg alt="Next" />
          </NextBtn>
        </LoopDiv>
        <TagDiv>
          {tag.map((item) => (
            <P>{item}</P>
          ))}
        </TagDiv>
      </>
    );
  };

  const navigateEssayDetails = () => {
    router.push(`essay_details?id=id&type=published`);
    // ui생기면 분기처리 private/published/linkedout
  };

  const stepTwoRenderer = () => {
    return (
      <StepTwoContainer>
        <TitleDiv>
          <P>이 글을 어떻게 할까요?</P>
        </TitleDiv>
        <StepTwoWrapper>
          <button onClick={navigateEssayDetails}>임시 버튼</button>
          <PrevBtn>
            <NextBtnImg className="prev-btn" alt="Prev" onClick={stepHandler} />
          </PrevBtn>
        </StepTwoWrapper>
      </StepTwoContainer>
    );
  };
  const stepHandler = () => {
    if (step === 1) {
      setStep(2);
    }
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <Layout isOpen={isOpen}>
      <BottomSeet isOpen={isOpen} size="large">
        <Wrapper onClick={handleDialogClick}>
          <TopNavigatorDiv>
            <NavigatorChip onClick={handleModalOpen}></NavigatorChip>
          </TopNavigatorDiv>
          {step === 2 ? stepTwoRenderer() : stepOneRenderer()}
        </Wrapper>
      </BottomSeet>
    </Layout>
  );
}

export default BottomSheet;

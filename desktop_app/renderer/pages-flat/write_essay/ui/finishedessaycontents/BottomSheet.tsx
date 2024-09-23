import React, { useState } from "react";
import styled from "styled-components";
import { BottomSeet } from "@/shared/ui/modal";
import color from "@/shared/styles/color";
import Loop from "@/shared/assets/img/loop.svg";
import NextBtnImg from "@/shared/assets/img/next_Icon.svg";
import { changeGroupChain, changeSingleChain } from "../../utils/changeChain";

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  border: 3px solid blue;
  width: 80%;
  height: 100%;
  position: relative;
`;
const LoopStyled = styled(Loop)<{
  isStage?: boolean;
  isMoving?: boolean;
  id: number;
}>`
  position: absolute;
  width: 72.273px;
  height: 60px;
  transition: left 0.5s ease, transform 0.5s ease;
  cursor: ${({ isStage }) => (isStage ? "pointer" : "default")};

  @keyframes moveAnimation {
    from {
      transform: translate(-80%, -50%);
    }
    to {
      transform: translate(-50%, -50%);
    }
  }

  ${({ isMoving, id }) =>
    isMoving && id !== 3
      ? `
      animation: moveAnimation 0.5s ease;
    `
      : ""}
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

const TiedLoop = styled.div<{ isFull?: boolean }>`
  border: 3px solid blue;
  width: ${(props) => (props.isFull ? "60%" : "70%")};
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const LooseLoop = styled.div<{ isFull?: boolean }>`
  border: 3px solid red;
  width: ${(props) => (props.isFull ? "40%" : "30%")};
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
interface Loop {
  id: number;
  loose: string;
  tied: string;
  default: string;
  isMoving: boolean;
}

function BottomSheet({ tag }: { tag: string[] }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isSliding, setIsSliding] = useState("step1");
  const [leftPosition, setLeftPosition] = useState("60%");
  const [tiedLoops, setTiedLoops] = useState<Loop[]>([
    { id: 1, default: "44%", loose: "30%", tied: "px", isMoving: false },
    { id: 2, default: "53%", loose: "43%", tied: "px", isMoving: false },
    { id: 3, default: "62%", loose: "56%", tied: "px", isMoving: false },
    { id: 4, default: "71%", loose: "68%", tied: "px", isMoving: false },
    { id: 5, default: "80%", loose: "30%", tied: "px", isMoving: false },
  ]);

  const handleModalOpen = () => {
    setIsOpen(false);
  };

  const handleDialogClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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
            <TiedLoop></TiedLoop>
            <LooseLoop></LooseLoop>
          </LoopWrapper>
          <NextBtn>
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

  const stepTwoRenderer = () => {
    return (
      <>
        <PrevBtn>
          <NextBtnImg className="prev-btn" alt="Prev" />
        </PrevBtn>
      </>
    );
  };

  return (
    isOpen && (
      <Layout onClick={handleModalOpen}>
        <BottomSeet isOpen={true} size="large">
          <Wrapper onClick={handleDialogClick}>
            <TopNavigatorDiv>
              <NavigatorChip onClick={handleModalOpen}></NavigatorChip>
            </TopNavigatorDiv>
            {stepOneRenderer()}
          </Wrapper>
        </BottomSeet>
      </Layout>
    )
  );
}

export default BottomSheet;

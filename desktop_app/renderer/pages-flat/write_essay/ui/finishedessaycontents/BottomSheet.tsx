import React, { useState } from "react";
import styled from "styled-components";
import { BottomSeet } from "@/shared/ui/modal";
import color from "@/shared/styles/color";
import Loop from "@/shared/assets/img/loop.svg";

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
const LoopStyled = styled(Loop)<{ isStage: boolean }>`
  position: absolute;
  width: 72.273px;
  height: 60px;
  transition: left 0.5s ease, transform 0.5s ease;
  cursor: ${({ isStage }) => (isStage ? "pointer" : "default")};
`;

function BottomSheet({ tag }: { tag: string[] }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isSliding, setIsSliding] = useState("step1");
  const [leftPosition, setLeftPosition] = useState("60%");

  const handleModalOpen = () => {
    setIsOpen(false);
  };

  const handleDialogClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleSlide = (step: string) => {
    const steps = ["step1", "step2", "step3", "step4", "step5"];

    const currentIndex = steps.indexOf(isSliding || step);

    let newIndex = steps.indexOf(step);
    if (currentIndex < newIndex) {
      newIndex = Math.min(steps.length - 1, currentIndex + 1);
    } else if (currentIndex > newIndex) {
      newIndex = Math.max(0, currentIndex - 1);
    }

    setTimeout(() => {
      setIsSliding(steps[newIndex]);
    }, 500);
  };
  // const handleLoopClick = (step: string) => {
  //   handleSlide(step);
  // };
  const handleLoopClick = () => {
    setLeftPosition("70%");
  };
  const stepOneRenderer = () => {
    return (
      <>
        <TitleDiv>
          <P>이 글을 쓰면서 풀어낸 마음 만큼</P>
          <P>고리를 풀어주세요.</P>
        </TitleDiv>
        <LoopDiv>
          <LoopStyled
            isStage={isSliding === "step5"}
            style={{
              top: "50%",
              left: "40%",
              transform: `translate(-50%, -50%) ${
                isSliding === "step5" ? "translateX(20%)" : ""
              }`,
            }}
          />
          <LoopStyled
            isStage={isSliding === "step4"}
            style={{
              top: "50%",
              left: "45%",
              transform: `translate(-50%, -50%) ${
                isSliding === "step4" ? "translateX(20%)" : ""
              }`,
            }}
          />
          <LoopStyled
            isStage={isSliding === "step3"}
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) ${
                isSliding === "step3" ? "translateX(20%)" : ""
              }`,
            }}
          />
          <LoopStyled
            isStage={isSliding === "step2"}
            style={{
              top: "50%",
              left: "60%",
              transform: `translate(-50%, -50%) ${
                isSliding === "step2" ? "translateX(20%)" : ""
              }`,
            }}
          />
          <LoopStyled
            isStage={isSliding === "step1"}
            style={{
              top: "50%",
              left: leftPosition,
              transform: `translate(-50%, -50%) ${
                isSliding === "step1" ? "translateX(20%)" : ""
              }`,
            }}
            onClick={handleLoopClick}
          />
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
    return <></>;
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

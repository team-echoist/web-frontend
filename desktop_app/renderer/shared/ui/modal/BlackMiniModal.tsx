import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import MinusBtn from "@/shared/assets/img/button/minus_button.svg";
import MinusDisableBtn from "@/shared/assets/img/button/minus_disable_button.svg";
import PlusBtn from "@/shared/assets/img/button/plus_button.svg";
import PlusDisableBtn from "@/shared/assets/img/button/plus_disable_button.svg";
import color from "@/shared/styles/color";

const Layout = styled.div`
  width: 180px;
  border-radius: 10px;
  background: #0e0e0e;
  box-shadow: 0.1px 0.1px 6px -2px rgba(255, 255, 255, 0.05);
  padding: 12px 20px;
  position: fixed;
  top: 69px;
  right: 30px;
  z-index: 2;
`;
const ScaleAdjustDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-bottom: 1px solid #1a1a1a;
  svg {
    cursor: pointer;
  }
`;
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

function BlackMiniModal({
  handleZoomIn,
  handleZoomOut,
  scale,
  children,
  onClose,
}: {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  scale: number;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const scaleBtnController = (status: string) => {
    let minusBtn =
      scale === 1 ? <MinusDisableBtn /> : <MinusBtn onClick={handleZoomOut} />;
    let plusBtn =
      scale === 2 ? <PlusDisableBtn /> : <PlusBtn onClick={handleZoomIn} />;

    return status === "minus" ? minusBtn : plusBtn;
  };
  return (
    <Layout ref={modalRef}>
      <ScaleAdjustDiv>
        {scaleBtnController("minus")}
        <Span>가</Span>
        {scaleBtnController("plus")}
      </ScaleAdjustDiv>
      {children}
    </Layout>
  );
}

export default BlackMiniModal;

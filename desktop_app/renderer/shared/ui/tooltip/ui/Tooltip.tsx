import React from "react";
import styled from "styled-components";
import TooltipImg from "@/shared/assets/img/tooltip.webp";
import color from "@/shared/styles/color";

interface TooltipProps {
  data: string[]; // 툴팁에 표시할 텍스트 배열
  title: string;
  width?: string; // 툴팁 너비 (기본값 설정 가능)
  height?: string; // 툴팁 높이 (기본값 설정 가능)
}
const TooltipContainer = styled.div<{ width: string; height: string }>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${TooltipImg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 30px;
  z-index: 3000;
  display: flex;
  flex-direction: column;
`;
const TextList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;
  margin-left: 50px;
  margin-top: 6px;
`;
const Text = styled.li`
  color: white;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 500;
  //   text-align: center;
  line-height: 1.5;
  padding: 4px 8px;
`;
const Title = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: 90%;
  margin-left: 20px;
`;
const Tooltip: React.FC<TooltipProps> = ({
  data,
  title,
  width = "175px",
  height = "195px",
}) => {
  return (
    <TooltipContainer width={width} height={height}>
      <Title>{title}</Title>
      <TextList>
        {data.map((text) => (
          <Text>{text}</Text>
        ))}
      </TextList>
    </TooltipContainer>
  );
};

export default Tooltip;

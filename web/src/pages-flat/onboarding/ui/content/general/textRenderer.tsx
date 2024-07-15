import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

interface Step {
  title: string;
  desc: string;
  desc2: string;
  desc3?: string;
}

interface TextObj {
  step1: Step;
  step2: Step;
  step3: Step;
  step4: Step;
}

interface TextRendererProps {
  text: TextObj;
}

const SH1 = styled.h1`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom:16px;
`;
const SP = styled.p`
  color: ${color.gray};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;

function TextRenderer({ text }: TextRendererProps) {
  return (
    <>
      <SH1>{text.step1.title}</SH1>
      <SP>{text.step1.desc}</SP>
      <SP>{text.step1.desc2}</SP>
      {text.step1.desc3 && <SP>{text.step1.desc3}</SP>}
    </>
  );
}

export default TextRenderer;

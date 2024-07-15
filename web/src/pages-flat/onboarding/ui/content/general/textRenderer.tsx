import React from "react";

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

function TextRenderer({ text }: TextRendererProps) {
  return <div>TextRenderer</div>;
}

export default TextRenderer;

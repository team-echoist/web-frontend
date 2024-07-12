import React from "react";
import styled from "styled-components";
import onBoarding1 from "@/shared/assets/img/onboarding_final_1.gif";
import onBoarding2 from "@/shared/assets/img/onboarding_final_2.gif";
import onBoarding3 from "@/shared/assets/img/onboarding_final_3.gif";
import onBoarding4 from "@/shared/assets/img/onboarding_final_4.gif";

interface SLayoutProps {
  bgImage: string;
}

interface ImageRendererProps {
  step: "step1" | "step2" | "step3" | "step4";
}

const SLayout = styled.section<SLayoutProps>`
  width: 100%;
  height: 58vh;
  position: relative;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -50%;
`;

const mapper = {
  step1: onBoarding1.src,
  step2: onBoarding2.src,
  step3: onBoarding3.src,
  step4: onBoarding4.src,
};

function ImageRenderer() {
  return <SLayout bgImage={mapper.step1} />;
}

export default ImageRenderer;

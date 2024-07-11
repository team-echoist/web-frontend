import React from "react";
import styled from "styled-components";
import SplashImg from "@/shared/assets/img/splash_final_clear.gif";
import Image from "next/image";

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function FirstStepContent() {
  return (
    <SContainer>
      <SImage src={SplashImg} alt="Splash Image" layout="fill" />
    </SContainer>
  );
}

export default FirstStepContent;

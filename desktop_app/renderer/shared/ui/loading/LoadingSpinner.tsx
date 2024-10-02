import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import SpinnerImage from "@/shared/assets/img/Progressbar.webp";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding-left:50px;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  z-index: 999;
  position: relative;
`;

const LoadingSpinner = () => (
  <SpinnerWrapper>
    <Spinner>
      <Image src={SpinnerImage} alt="Loading..."  objectFit="contain" fill/>
    </Spinner>
  </SpinnerWrapper>
);

export default LoadingSpinner;
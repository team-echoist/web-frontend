import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    right: -390px; /* 모달의 초기 위치 (화면 밖) */
  }
  to {
    right: 0;
  }
`;

const slideOut = keyframes`
  from {
    right: 0;
  }
  to {
    right: -390px; /* 모달의 초기 위치 (화면 밖) */
  }
`;

const Layout = styled.div<{ isOpen: boolean }>`
  z-index: 500;
  width: 390px;
  height: 96.8vh;
  background: #121212;
  position: absolute;
  top:30px;
  right: 0;
  animation: ${({ isOpen }) =>
    isOpen ? css`${slideIn} 0.3s ease` : css`${slideOut} 0.3s ease`};
  transition: width 0.3s ease; /* 너비 조정 시 부드러운 애니메이션 */
`;

interface AlarmModalProps {
  isOpen: boolean;
}

export const AlarmModal = ({ isOpen }: AlarmModalProps) => {
  return <Layout isOpen={isOpen}>A</Layout>;
};

export default AlarmModal;
import React, { ReactNode } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Overlay = styled.div`
  position: fixed;
  top: 32px;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  width: 818px;
  height: 764px;
  border-radius: 20px 20px 0px 0px;
  background: ${color.darkgray};
  border-radius: 8px;
  z-index: 1001;
  overflow-y: auto;
`;

const WideModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default WideModal;

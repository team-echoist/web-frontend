import React from "react";
import CloseImg from "@/shared/assets/img/x.svg";
import styled from "styled-components";

interface ClosebuttonProps {
  isShowModal: boolean;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = styled.div`
  cursor: pointer;
`;

function Closebutton({ isShowModal, setIsShowModal }: ClosebuttonProps) {
  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <Container onClick={handleClick}>
      <CloseImg />
    </Container>
  );
}

export default Closebutton;

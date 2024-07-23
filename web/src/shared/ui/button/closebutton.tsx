import React from "react";
import CloseImg from "@/shared/assets/img/x.svg";
import styled from "styled-components";

interface ClosebuttonProps {
  setIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = styled.div`
  cursor: pointer;
`;

function Closebutton({ setIsClosed }: ClosebuttonProps) {
  const handleClick = () => {
    setIsClosed(true);
  };

  return (
    <Container onClick={handleClick}>
      <CloseImg />
    </Container>
  );
}

export default Closebutton;

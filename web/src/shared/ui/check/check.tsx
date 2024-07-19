import React from "react";
import UnCheckImg from "@/shared/assets/img/uncheck.svg";
import CheckImg from "@/shared/assets/img/check.svg";
import styled from "styled-components";

interface CheckProps {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxContainer = styled.div`
  cursor: pointer;
`;
function Check({ check, setCheck }: CheckProps) {
  const handleClick = () => {
    setCheck((prevCheck) => !prevCheck);
  };

  return (
    <CheckboxContainer onClick={handleClick}>
      {check ? <CheckImg /> : <UnCheckImg />}
    </CheckboxContainer>
  );
}

export default Check;

import React from "react";
import styled from "styled-components";
import ToggleOn from "@/shared/assets/img/toggle_on.svg";
import ToggleOff from "@/shared/assets/img/toggle_off.svg";

const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
interface ToggleProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
}

const Toggle = ({ isOn, onToggle }: ToggleProps) => {
  const handleToggle = () => {
    onToggle(!isOn);
  };

  return (
    <ToggleContainer onClick={handleToggle}>
      {isOn ? <ToggleOn/>: <ToggleOff/>}
    </ToggleContainer>
  );
};

export default Toggle;

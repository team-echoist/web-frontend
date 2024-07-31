import React from "react";
import AlarmIcon from "@/shared/assets/img/alarm.svg";
import styled from "styled-components";

interface AlarmButtonProps {
  onClick?: () => void;
}

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const AlarmButton: React.FC<AlarmButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <AlarmIcon />
    </Button>
  );
};

export default AlarmButton;
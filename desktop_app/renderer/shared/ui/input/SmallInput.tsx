import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

const Input = styled.input`
  width: 52px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #252525;

  &:focus {
    border: 1px solid ${color.pointcolor};
  }
`;

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
  maxLength?: number;
}

function SmallInput({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  maxLength = 1,
}: InputProps) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      maxLength={maxLength}
    />
  );
}

export default SmallInput;

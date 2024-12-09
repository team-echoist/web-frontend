import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

const SInput = styled.input<{
  hasError?: boolean;
  hasValue?: boolean;
  width: number;
}>`
  all: unset;
  border-radius: 10px;
  background: #252525;
  width: ${({ width }) => (width ? `${width}px` : "442px")};
  height: 50px;
  flex-shrink: 0;
  box-sizing: border-box;
  border: ${(props) =>
    props.hasError
      ? "2px solid #E43446"
      : props.hasValue
      ? `1px solid ${color.pointcolor}`
      : "none"};
  color: ${color.white};
  padding-left: 17px;
  &:focus {
    border: 1px solid ${color.pointcolor};
    outline: none;
  }
`;
interface InputProps<T> {
  placeholder: string;
  name: keyof T;
  setState?: Dispatch<SetStateAction<T>>;
  error?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  width?: number;
}

export const Input = <
  T extends { [key: string]: { value: string; placeholder: string } }
>({
  placeholder,
  name,
  setState,
  error,
  value,
  onChange,
  maxLength,
  width,
}: InputProps<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (setState) {
      setState((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name as keyof T],
          value: value,
        },
      }));
    }
  };
  const inputType = typeof name === "string" && name.includes("password") ? "password" : "text";
  return (
    <SInput
      placeholder={placeholder}
      onChange={onChange ? onChange : handleChange}
      name={name as string}
      type={inputType}
      hasError={error}
      value={value}
      hasValue={(value && value?.length > 0) || false}
      maxLength={maxLength || undefined}
      width={width ? width : 442}
    />
  );
};

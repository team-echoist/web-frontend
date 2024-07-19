import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

export const SInput = styled.input`
  border-radius: 10px;
  background: #252525;
  width: 442px;
  height: 50px;
  flex-shrink: 0;
  box-sizing: border-box;
  border: none;
   &::placeholder {
    text-indent: 17px;
  }
`;

interface InputProps<T> {
  placeholder: string;
  name: keyof T;
  setState: Dispatch<SetStateAction<T>>;
}

export const Input = <
  T extends { [key: string]: { value: string; placeholder: string } }
>({
  placeholder,
  name,
  setState,
}: InputProps<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name as keyof T],
        value: value,
      },
    }));
  };
  return (
    <SInput
      placeholder={placeholder}
      onChange={handleChange}
      name={name as string}
    />
  );
};

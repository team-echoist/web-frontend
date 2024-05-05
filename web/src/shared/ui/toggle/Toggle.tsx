"use client";
import React, { FC } from "react";
import * as Styled from "./toggle.styled";

interface IToggle {
  readonly onClick?: () => void;
}

export const Toggle: FC<IToggle> = (props) => {
  const { onClick } = props;
  return <Styled.SToggle onClick={onClick}></Styled.SToggle>;
};

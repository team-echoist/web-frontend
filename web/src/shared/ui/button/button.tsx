import React, { useLayoutEffect, useState, MouseEventHandler } from "react";
import * as Styled from "./button.styled";
import updateBtnStyle from "@/shared/lib/style/updateBtnStyle";
import { BtnType, styleObjType } from "@/shared/types";

type buttonProps = BtnType & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export const Button = ({ text, style, type, scale, onClick }: buttonProps) => {
  const [styleObj, setStyleObj] = useState<styleObjType>({
    borderRadius: "",
    backgroundColor: "",
    width: "",
    height: "",
  });

  useLayoutEffect(() => {
    const returnedStyle = updateBtnStyle(style, type, scale);
    if (returnedStyle) {
      setStyleObj(returnedStyle);
    }
  }, [style, type, scale]);
  return <Styled.SButton styleObj={styleObj} onClick={onClick}>{text}</Styled.SButton>;
};

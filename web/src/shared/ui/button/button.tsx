import React, { useEffect, useState, MouseEventHandler } from "react";
import * as Styled from "./button.styled";
import updateBtnStyle from "@/shared/lib/style/updateBtnStyle";
import { BtnType, styleObjType } from "@/shared/types/btnType";

// scale: small,small_2,small_3, lage, style: round_1,round_2,square type:red, disable,point
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

  useEffect(() => {
    const returnedStyle = updateBtnStyle(style, type, scale);
    if (returnedStyle) {
      setStyleObj(returnedStyle);
    }
  }, [style, type, scale]);
  return <Styled.SButton styleObj={styleObj} onClick={onClick}>{text}</Styled.SButton>;
};

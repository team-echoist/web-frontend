import styled from "styled-components";
import { styleObjType } from "@/shared/types/btnType";

interface SButtonProps {
 styleObj: styleObjType;
}

export const SButton = styled.button<SButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.styleObj.borderRadius};
  background-color: ${(props) => props.styleObj.backgroundColor};
  width: ${(props) => props.styleObj.width};
  height: ${(props) => props.styleObj.height};
`;

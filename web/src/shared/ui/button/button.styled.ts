import styled from "styled-components";
import { styleObjType } from "@/shared/types";
import color from "../../styles/color";

interface SButtonProps {
  styleObj: styleObjType;
}

export const SButton = styled.button<SButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${(props) => props.styleObj.borderRadius};
  background-color: ${(props) => props.styleObj.backgroundColor};
  width: ${(props) => props.styleObj.width};
  height: ${(props) => props.styleObj.height};
  color: ${color.black};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%;
`;

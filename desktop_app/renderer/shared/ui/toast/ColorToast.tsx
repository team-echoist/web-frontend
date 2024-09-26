import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";

const Layout = styled.dialog<{ type: string }>`
  display: flex;
  width: 360px;
  height: 53px;
  padding: 16px 18px 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 71px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ type }) =>
    type === "alert" ? color.red : color.pointcolor};
  color: ${color.white};
  border:none;
  z-index:50;
`;

function ColorToast({ text, type="normal" }: { text: string; type?: string }) {
  return <Layout type={type}>{text}</Layout>;
}

export default ColorToast;

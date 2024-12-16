import React from "react";
import { DarkBackground } from "@/shared/ui/background";
import GeuloquisCard from "./contents/GeuloquisCard";
import styled from "styled-components";

const Wrapper = styled.div<{ isAlertOpen: boolean }>`
  width: ${({ isAlertOpen }) => (isAlertOpen ? "100%" : "80%")};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Geuloquis({
  handleGeuloque,
  isOpenGeuloque,
  isAlertOpen,
  url,
}: {
  handleGeuloque: () => void;
  isOpenGeuloque: boolean;
  url: string | null;
  isAlertOpen: boolean;
}) {
  if (!isOpenGeuloque) {
    return;
  }

  return (
    <DarkBackground left={isAlertOpen ? 0 : 259}>
      <Wrapper isAlertOpen={isAlertOpen}>
        <GeuloquisCard url={url} handleGeuloque={handleGeuloque} />
      </Wrapper>
    </DarkBackground>
  );
}

export default Geuloquis;

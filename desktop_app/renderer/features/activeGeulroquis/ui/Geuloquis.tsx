import React, { useEffect, useState } from "react";
import { DarkBackground } from "@/shared/ui/background";
import GeuloquisCard from "./contents/GeuloquisCard";
import styled from "styled-components";
import { getGeuloquis } from "@/shared/api/home";

const Wrappser = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Geuloquis({
  handleGeuloque,
  isOpenGeuloque,
  url,
}: {
  handleGeuloque: () => void;
  isOpenGeuloque: boolean;
  url: string | null;
}) {
  if (!isOpenGeuloque) {
    return;
  }

  return (
    <DarkBackground left={259}>
      <Wrappser>
        <GeuloquisCard url={url} handleGeuloque={handleGeuloque} />
      </Wrappser>
    </DarkBackground>
  );
}

export default Geuloquis;

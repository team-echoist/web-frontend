import React from "react";
import styled from "styled-components";
import { DarkBackground } from "@/shared/ui/background";
import { LoadingSpinner } from "@/shared/ui/loading";

const Layout = styled.div``;

function Loading() {
  return (
    <DarkBackground>
      <LoadingSpinner></LoadingSpinner>
    </DarkBackground>
  );
}

export default Loading;

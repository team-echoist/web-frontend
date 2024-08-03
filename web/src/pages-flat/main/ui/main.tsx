"use client";
import React from "react";
import styled from "styled-components";
import { AlarmButton } from "@/shared/ui/button";
import { CircleButton } from "@/shared/ui/button";
import WriteIcon from "@/shared/assets/img/write_icon.svg"

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Main = () => {
  return (
    <Container>
      <AlarmButton></AlarmButton>
      <WriteIcon></WriteIcon>
    </Container>
  );
};

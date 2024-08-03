"use client";
import React from "react";
import styled from "styled-components";
import { AlarmButton } from "@/shared/ui/button";
import { CircleButton } from "@/shared/ui/button";
import WriteIcon from "@/shared/assets/img/write_icon.svg"
import HomeImg from "@/shared/assets/img/mainroom.webp"
import Image from "next/image";

const Container = styled.main`
width:82.8vw;
font-family: Arial, sans-serif;
position:fixed;
top:32px;
`;
const HomeDiv =styled.div`
width: 100%;
height: 89.6vh;
`

export const Main = () => {
  return (
    <Container>
      <HomeDiv>
      <Image alt="home" src={HomeImg} fill/>
      </HomeDiv>
      {/* <AlarmButton></AlarmButton>
      <WriteIcon></WriteIcon> */}
    </Container>
  );
};

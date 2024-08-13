"use client";
import React from "react";
import styled from "styled-components";
import { AlarmButton } from "@/shared/ui/button";
import { CircleButton } from "@/shared/ui/button";
import WriteIcon from "@/shared/assets/img/write_icon.svg";
import HomeImg from "@/shared/assets/img/mainroom.webp";
import Image from "next/image";
import ActiveFooter from "@/features/activeFooter/ui/activeFooter";

const Container = styled.main`
  width: 82.8vw;
  font-family: Arial, sans-serif;
  position: fixed;
  top: 32px;
`;
const HomeDiv = styled.div`
  width: 100%;
  height: 88.6vh;
`;

export const Main = () => {
  return (
    <>
      <Container>
        <HomeDiv>
          <Image alt="home" src={HomeImg} fill />
        </HomeDiv>
        {/* <AlarmButton></AlarmButton>
      <WriteIcon></WriteIcon> */}
      </Container>
      <ActiveFooter />
    </>
  );
};

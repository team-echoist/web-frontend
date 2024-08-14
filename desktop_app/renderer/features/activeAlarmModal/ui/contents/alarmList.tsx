import React, { useState } from "react";
import { GeneralCard } from "@/shared/ui/card";
import { CircularAvatar } from "@/shared/ui/avatar";
import LinkedoutLetter from "@/shared/assets/img/linkedout_letter.webp";
import styled from "styled-components";
import { Label } from "@/shared/ui/label";
import TextField from "./textField";
import Letter from "@/shared/assets/img/letter.webp"

const Layout = styled.div`
  position: absolute;
  top: 96px;
  padding-left: 30px;
  padding-right: 30px;
  display:flex;
  flex-direction: column;
  gap:11px;
`;
const Time =styled.time`
color: #3E3E3E;
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 150%;
`
const AvatarLayout = styled.div`
  position: relative;
`;

function AlarmList() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Layout>
        <Time>2024.06.13</Time>
      <GeneralCard isFocused={isFocused}>
        <AvatarLayout>
          <CircularAvatar img={LinkedoutLetter} />
          <Label text="Linked-out" />
        </AvatarLayout>
        <TextField />
      </GeneralCard>
      <GeneralCard isFocused={isFocused}>
        <AvatarLayout>
          <CircularAvatar img={Letter} />
          <Label text="발행한 글" />
        </AvatarLayout>
        <TextField />
      </GeneralCard>
    </Layout>
  );
}

export default AlarmList;

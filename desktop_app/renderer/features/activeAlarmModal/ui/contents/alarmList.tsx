import React, { useState } from "react";
import { GeneralCard } from "@/shared/ui/card";
import { CircularAvatar } from "@/shared/ui/avatar";
import LinkedoutLetter from "@/shared/assets/img/linkedout_letter.webp";
import styled from "styled-components";
import { Label } from "@/shared/ui/label";
import TextField from "./textField";
import LetterImg from "@/shared/assets/img/letter.webp";
import Letter from "./letter"

const Layout = styled.div`
  position: absolute;
  top: 96px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
const Time = styled.time`
  color: #3e3e3e;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
const AvatarLayout = styled.div`
  position: relative;
`;
const LabelDiv = styled.div`
  position: absolute;
  top: 67px;
  left: 3px;
`;

function AlarmList() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Layout>
      {/* <Letter></Letter> */}
      <Time>2024.06.13</Time>
      <GeneralCard isFocused={isFocused}>
        <AvatarLayout>
          <CircularAvatar img={LinkedoutLetter} width={97} height={55} />
          <LabelDiv>
            <Label text="Linked-out" />
          </LabelDiv>
        </AvatarLayout>
        <TextField />
      </GeneralCard>
      <GeneralCard isFocused={isFocused}>
        <AvatarLayout>
          <CircularAvatar img={LetterImg} width={61} height={59} />
          <LabelDiv>
            <Label text="발행한 글" />
          </LabelDiv>
        </AvatarLayout>
        <TextField />
      </GeneralCard>
    </Layout>
  );
}

export default AlarmList;

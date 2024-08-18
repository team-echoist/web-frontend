import React, { useState } from "react";
import { GeneralCard } from "@/shared/ui/card";
import { CircularAvatar } from "@/shared/ui/avatar";
import LinkedoutLetter from "@/shared/assets/img/linkedout_letter.webp";
import styled from "styled-components";
import { Label } from "@/shared/ui/label";
import TextField from "./textField";
import LetterImg from "@/shared/assets/img/letter.webp";
import Letter from "./letter";
import { Alert } from "@/shared/types";
import { formatDateString } from "@/shared/lib/date";
import Imformation from "@/shared/assets/img/information.webp";

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
  left: 0px;
`;
type MapperKey = "published" | "support" | "linkedout";
const mapper = {
  published: { img: LetterImg, label: "발행한 글" },
  support: { img: Imformation, label: "고객지원" },
  linkedout: { img: LinkedoutLetter, label: "Linked-out" },
};

function AlarmList({ list }: { list: Alert[] }) {
  const [focusedId, setFocusedId] = useState<number | null>(null);
  const handleCardClick = (id: number) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };
  return (
    <Layout>
      {list.map((item) => {
        const { img, label } = mapper[item.type as MapperKey];
        const width =
          item.type === "linkedout" ? 97 : item.type === "support" ? 26 : 65;
        const height =
          item.type === "linkedout" ? 55 : item.type === "support" ? 26 : 59;
        return (
          <>
            {/* {(item.type === "linkedout" || "support") &&
            focusedId === item.id ? (
              <Letter type={item.type} title={item.title} createdDate={item.createdDate}/>
            ) : (
              ""
            )} */}
            <Time>{formatDateString(item.createdDate)}</Time>
            <GeneralCard
              key={item.id}
              isFocused={!item.read}
              onClick={() => handleCardClick(item.id)}
            >
              <AvatarLayout>
                <CircularAvatar img={img} width={width} height={height} />
                <LabelDiv>
                  <Label text={label} />
                </LabelDiv>
              </AvatarLayout>
              <TextField
                createdDate={item.createdDate}
                title={item.title}
                type={item.type}
              />
            </GeneralCard>
          </>
        );
      })}
    </Layout>
  );
}

export default AlarmList;

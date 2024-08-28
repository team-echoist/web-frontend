import React from "react";
import styled from "styled-components";
import TagIcon from "@/shared/assets/img/tag_icon.svg";
import LocationIcon from "@/shared/assets/img/point_location_icon.webp";
import Image from "next/image";
import BaseInput from "@/shared/ui/input/BaseInput";
import { BaseButton } from "@/shared/ui/button";

const Layout = styled.div`
  width: 75.38%;
  height: 60px;
  border-top: 1px rgba(104, 104, 104, 0.1);
  background: #121212;
  display: flex;
  position: relative;
`;
const ImageDiv = styled.div`
  width: 31.278px;
  height: 100%;
`;
const InputDiv = styled.div`
  width: 180px;
  height: 24px;
  margin-top: 3px;
  margin-left: 11px;
`;
const BtnDiv = styled.div`
  width: 121px;
  height: 100%;
  position: absolute;
  right: 0;
`;

interface MapperValue {
  img: React.ReactNode;
  placeholder: string;
  btnText: string;
}

function TagField({ activeTag }: { activeTag: string }) {
  const mapper: Record<string, MapperValue> = {
    tag: {
      img: <TagIcon></TagIcon>,
      placeholder: "감정 해시태그를 입력하세요.",
      btnText: "해시태그 저장",
    },
    location: {
      img: <Image src={LocationIcon} alt="place_tag" width={30} height={30} />,
      placeholder: "장소 이름을 입력해주세요.",
      btnText: "장소 저장",
    },
  };

  const activeValue =
    activeTag && mapper[activeTag] ? mapper[activeTag] : undefined;
  return (
    <Layout>
      {activeValue ? (
        <>
          <ImageDiv>{activeValue.img}</ImageDiv>
          <InputDiv>
            <BaseInput placeholder={activeValue.placeholder}></BaseInput>
          </InputDiv>
          <BtnDiv>
            <BaseButton>{activeValue.btnText}</BaseButton>
          </BtnDiv>
        </>
      ) : null}
    </Layout>
  );
}

export default TagField;

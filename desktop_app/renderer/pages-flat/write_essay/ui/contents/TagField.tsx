import React, { useState } from "react";
import styled from "styled-components";
import TagIcon from "@/shared/assets/img/tag_icon.svg";
import LocationIcon from "@/shared/assets/img/point_location_icon.webp";
import Image from "next/image";
import BaseInput from "@/shared/ui/input/BaseInput";
import { BaseButton } from "@/shared/ui/button";
import { Tag } from "@/shared/ui/tag";
import TagChip from "./TagChip";

const Layout = styled.div`
  width: 80%;
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
const TagDiv = styled.div`
  width: 100%;
  height: 60px;
  overflow-x: auto;
  position: absolute;
  top: -70px;
  display: flex;
  gap: 4px;
  background: #121212;
  padding-top:10px;
`;

interface MapperValue {
  img: React.ReactNode;
  placeholder: string;
  btnText: string;
}

function TagField({ activeTag }: { activeTag: string }) {
  const [tagValues, setTagValues] = useState<string[]>([]);
  const [locationValues, setLocationValues] = useState<string[]>(["37.948˚N 126.329˚E"]);
  const [inputValue, setInputValue] = useState<string>("");

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

  // 버튼 클릭하면 tag인지 location 인지 판단한다
  // 태그일경우 모든 인덱스의 앞에 #을 붙여서 반환
  // 장소일경우 좌표가 있을경우 좌표라는 키값으로 따로 변수에 담아야됨

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();

      if (inputValue.trim() !== "") {
        if (activeTag === "tag") {
          setTagValues((prev) => {
            if (prev.length < 5) {
              return [...prev, `# ${inputValue.trim()}`];
            }
            return prev;
          });
        } else if (activeTag === "location") {
          setLocationValues((prev) => {
            if (prev.length === 1) {
              return [...prev, inputValue.trim()];
            } 
            return prev;
          });
        }
        setInputValue("");
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const removeTag = (index: number) => {
    if (activeTag === "tag") {
      setTagValues(prev => prev.filter((_, i) => i !== index));
    } else if (activeTag === "location") {
      setLocationValues(prev => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <Layout>
      <TagDiv>
        {(activeTag === "tag"
          ? tagValues
          : activeTag === "location"
          ? locationValues
          : []
        ).map((value, index) => (
          <React.Fragment key={`${activeTag}-${index}`}>
            <Tag value={value} onClose={() => removeTag(index)}/>
          </React.Fragment>
        ))}
      </TagDiv>
      {/* <TagChip></TagChip> */}
      {activeValue ? (
        <>
          <ImageDiv>{activeValue.img}</ImageDiv>
          <InputDiv>
            <BaseInput
              value={inputValue}
              placeholder={activeValue.placeholder}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
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

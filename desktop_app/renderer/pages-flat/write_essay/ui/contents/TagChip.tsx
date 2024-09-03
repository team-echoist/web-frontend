import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import BigTag from "@/shared/assets/img/bigTag_icon.svg";
import BigLocation from "@/shared/assets/img/big_location_icon.svg";

const Layout = styled.div`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${color.pointcolor};
  display: flex;
  position: relative;
`;
const ImageDiv = styled.div`
  width: 69.552px;
  height: 100%;
  margin-right: 29.45px;
`;
const Button = styled.button`
  all: unset;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 15px;
`;
const TagDiv = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
`;
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
`;
const P =styled.p`
color: #A8AEE4;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 50px;
`

function TagChip() {
  const imgMapper = {
    tag: <BigTag />,
    location: <BigLocation />,
  };
  return (
    <Layout>
      <ImageDiv>
        <BigTag />
      </ImageDiv>
      <TagDiv>
        <Span>여름에 온 국중박</Span>
      </TagDiv>
      <Button>편집</Button>
    </Layout>
  );
}

export default TagChip;

import React from "react";
import { GeneralModal } from "@/shared/ui/modal";
import { Button } from "@/shared/ui/button";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import Reported from "@/shared/assets/img/reported.gif";
import Published from "@/shared/assets/img/published.gif";
import Image from "next/image";
import color from "@/shared/styles/color";

const ChildrenDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;
const ContentsDiv = styled.div`
  width: 200px;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  white-space: nowrap;
`;
const ImgDiv = styled.div`
  width: 128px;
`;

const TitleDiv =styled.div`
 width:161px;
 height:41px;
 margin-top:62px;
`
const Strong =styled.strong`
color: ${color.pointcolor};
text-align: center;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 150%;
`
const Span =styled.span`
color: ${color.white};
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 150%;
`
function CompleteModal() {
  const searchParams = useSearchParams();

  const mapper = {
    private: { img: null },
    published: {
      img: (
        <Image
          src={Published.src}
          width={148}
          height={245}
          alt="modal_img"
        ></Image>
      ),
      title:<><Strong>링크드아웃</Strong><Span> 완료</Span></>
    },
    linkedout: {
      img: (
        <Image
          src={Published.src}
          width={148}
          height={245}
          alt="modal_img"
        ></Image>
      ),
      title:<><Strong>링크드아웃</Strong><Span> 완료</Span></>
    },
    reported: {
      img: (
        <Image
          src={Reported.src}
          width={148}
          height={245}
          alt="modal_img"
        ></Image>
      ),
      title:<><Strong>링크드아웃</Strong><Span> 완료</Span></>
    },
  };

  console.log("searchParams", searchParams.get("type"));
  //  private/published/linkedout/reported
  return (
    <GeneralModal isOpen={true} isBackgroundVisible={true}>
      <ChildrenDiv>
          <ImgDiv>{mapper["linkedout"].img}</ImgDiv>
          <ContentsDiv>
            <TitleDiv>{mapper["linkedout"].title}</TitleDiv>
          </ContentsDiv>
      </ChildrenDiv>
    </GeneralModal>
  );
}

export default CompleteModal;

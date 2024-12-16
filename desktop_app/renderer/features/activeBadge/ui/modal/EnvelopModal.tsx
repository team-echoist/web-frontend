import React from "react";
import EnvelopCard from "@/shared/ui/card/EnvelopCard";
import styled from "styled-components";
import { DarkBackground } from "@/shared/ui/background";
import BadgeImage1 from "@/shared/assets/img/badge_gif/badge1_final.gif";
import BadgeImage2 from "@/shared/assets/img/badge_gif/badge2_final.gif";
import BadgeImage3 from "@/shared/assets/img/badge_gif/badge3_final.gif";
import BadgeImage4 from "@/shared/assets/img/badge_gif/badge4_final.gif";
import BadgeImage5 from "@/shared/assets/img/badge_gif/badge5_final.gif";
import Image from "next/image";
import { Badge } from "@/shared/types";
import color from "@/shared/styles/color";
import { Button } from "@/shared/ui/button";

const EnvelopeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ImageDiv = styled.div`
  z-index: 1003;
  position: absolute;
  top: 8%;
`;
const H1 = styled.h1`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  z-index: 1003;
  position: absolute;
  top: 45%;
`;
const Desc = styled.p`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  z-index: 1003;
  position: absolute;
  top: 49%;
`;
const Desc2 = styled.p`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  z-index: 1003;
  position: absolute;
  top: 52%;
`;
const Chip = styled.div`
  border-radius: 20px;
  background: ${color.pointcolor};
  display: inline-flex;
  padding: 2px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BtnDiv = styled.div`
  position: absolute;
  top: 57%;
  z-index: 1003;
`;
const badgeArr = [
  {
    name: "angry",
    img: BadgeImage1.src,
    title: "분노할 용기",
    desc: "싫은 감정",
  },
  {
    name: "sad",
    img: BadgeImage2.src,
    title: "슬퍼할 용기",
    desc: "슬프고 힘든 감정",
  },
  {
    name: "complicated",
    img: BadgeImage3.src,
    title: "복잡할 용기",
    desc: "복잡한 감정",
  },
  {
    name: "surprised",
    img: BadgeImage4.src,
    title: "놀랄 용기",
    desc: "예상하지 못한 감정",
  },
  {
    name: "loving",
    img: BadgeImage5.src,
    title: "사랑할 용기",
    desc: "좋은 감정",
  },
];

function EnvelopModal({
  selectedBadge,
  handleBadgeModal,
  badgeList,
}: {
  selectedBadge: string | null;
  handleBadgeModal: (name: string | null) => void;
  badgeList: Badge[];
}) {
  const badgeInfo = badgeArr.find((badge) => badge.name === selectedBadge);
  const badgeDetail = badgeList?.find((badge) => badge.name === selectedBadge);

  return (
    <DarkBackground>
      <EnvelopeContainer>
        <EnvelopCard />
        {badgeInfo && (
          <>
            <ImageDiv>
              <Image
                src={badgeInfo.img}
                alt="badgeImage"
                width={262}
                height={500}
              />
            </ImageDiv>
            <H1>
              Lv.{badgeDetail?.level} {badgeInfo.title}
            </H1>
            <Desc>{badgeInfo.desc} 표현 해시태그</Desc>
            <Desc2>
              <Chip>{badgeDetail?.exp}개</Chip> 사용
            </Desc2>
            <BtnDiv>
              <Button
                text="확인"
                scale="small_3"
                onClick={() => handleBadgeModal(null)}
              />
            </BtnDiv>
          </>
        )}
      </EnvelopeContainer>
    </DarkBackground>
  );
}

export default EnvelopModal;

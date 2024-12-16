import React, { useEffect, useState } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { DarkBackground } from "@/shared/ui/background";
import BadgeImage1 from "@/shared/assets/img/badge_gif/badge1_final.gif";
import BadgeImage2 from "@/shared/assets/img/badge_gif/badge2_final.gif";
import BadgeImage3 from "@/shared/assets/img/badge_gif/badge3_final.gif";
import BadgeImage4 from "@/shared/assets/img/badge_gif/badge4_final.gif";
import BadgeImage5 from "@/shared/assets/img/badge_gif/badge5_final.gif";
import { Badge } from "@/shared/types";
import Image from "next/image";
import { postBadgeLevelup } from "@/shared/api";

const Layout = styled.div`
  width: 100%;
  height: 142px;
  position: absolute;
  z-index: 100;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.button`
  all: unset;
  border-radius: 10px;
  background: #616fed;
  box-shadow: 0.1px 0.1px 3.3px 0px rgba(0, 0, 0, 0.5);
  width: 130px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0d0d0d;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
  cursor: pointer;
`;

const RewardModalDiv = styled.div`
  width: 330px;
  height: 100%;
  position: absolute;
  left: 40%;
`;
const ImageDiv = styled.div<{ imgUrl: string }>`
  width: 362px;
  height: 600px;
  z-index: 1003;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  position: relative;
`;
const H1 = styled.h1`
  color: ${color.white};
  font-family: Abel;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 200%;
  position: absolute;
  top: 70%;
  left: 30%;
`;
const Desc = styled.p`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 200%;
  position: absolute;
  top: 76%;
  left: 42%;
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
function Reward({
  badge,
  fetchBadgeList,
}: {
  badge: Badge;
  fetchBadgeList: () => void;
}) {
  const [selectedLevelUpBadge, setSelectedLevelUpBadge] = useState<
    null | string
  >(null);
  const badgeInfo = badgeArr.find((item) => item.name === badge.name);
  
  useEffect(() => {
    if (selectedLevelUpBadge) {
      const timer = setTimeout(() => {
        setSelectedLevelUpBadge(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [selectedLevelUpBadge]);

  const handleSelectedLevelUpBadge = (name: string | null) => {
    setSelectedLevelUpBadge(name);
  };

  const submitBadgeLevelUp = async (id: number, name: string) => {
    try {
      const { status } = await postBadgeLevelup(id);

      if (status === 201 || status === 200) {
        handleSelectedLevelUpBadge(name);
        fetchBadgeList();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      {selectedLevelUpBadge === badge.name && (
        <DarkBackground>
          <RewardModalDiv>
            {badgeInfo && (
              <>
                <ImageDiv imgUrl={badgeInfo.img}>
                  <H1>
                    Lv. {badge.level + 1} {badgeInfo.title}
                  </H1>
                  <Desc>뱃지 획득!</Desc>
                </ImageDiv>
              </>
            )}
          </RewardModalDiv>
        </DarkBackground>
      )}
      <Btn
        onClick={() => {
          submitBadgeLevelUp(badge.id, badge.name);
        }}
      >
        보상 받기
      </Btn>
    </Layout>
  );
}

export default Reward;

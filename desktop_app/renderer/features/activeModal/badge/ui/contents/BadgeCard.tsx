import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Badge } from "@/shared/types";
import UnactiveBadge1 from "@/shared/assets/img/img_badge_unactivate/img_badge1_unactivate.svg";
import UnactiveBadge2 from "@/shared/assets/img/img_badge_unactivate/img_badge2_unactivate.svg";
import UnactiveBadge3 from "@/shared/assets/img/img_badge_unactivate/img_badge3_unactivate.svg";
import UnactiveBadge4 from "@/shared/assets/img/img_badge_unactivate/img_badge4_unactivate.svg";
import UnactiveBadge5 from "@/shared/assets/img/img_badge_unactivate/img_badge5_unactivate.svg";
import ActiveBadge1 from "@/shared/assets/img/img_badge_activate/img_badge1_activate.svg";
import ActiveBadge2 from "@/shared/assets/img/img_badge_activate/img_badge2_activate.svg";
import ActiveBadge3 from "@/shared/assets/img/img_badge_activate/img_badge3_activate.svg";
import ActiveBadge4 from "@/shared/assets/img/img_badge_activate/img_badge4_activate.svg";
import ActiveBadge5 from "@/shared/assets/img/img_badge_activate/img_badge5_activate.svg";
import color from "@/shared/styles/color";
import Arrow from "@/shared/assets/img/badge_arrow.svg";
import { getBadgeDetails } from "@/shared/api";
import Reward from "./Reward";

const Layout = styled.div`
  width: 758px;
  min-height: 142px;
  padding-bottom: 10px;
`;
const H1 = styled.h1`
  color: #939393;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%;
  margin-bottom: 10px;
`;
const ContentsDiv = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 10px;
  background: #0d0d0d;
  padding-bottom: 25px;
  position: relative;
`;
const ImageDiv = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 22px;
  margin-top: 10px;
`;
const ProgressiveBarDiv = styled.div`
  padding-top: 21px;
`;
const SubTitle = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%;
`;
const Desc = styled.p`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
`;
const Strong = styled.strong`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
`;
const ProgressBarContainer = styled.div`
  width: 520px;
  height: 30.754px;
  background-color: ${color.pointcolor};
  opacity: 0.3;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-top: 9px;
`;

const Progress = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: ${color.pointcolor};
  transition: width 0.3s ease;
`;
const ProgressText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: #fff;
  z-index: 1;
  color: #0d0d0d;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%;
`;
const ArrowDiv = styled.div`
  position: absolute;
  right: 20px;
  top: 28%;
  cursor: pointer;
`;

const TagDiv = styled.div`
  width: 694px;
  min-height: 142px;
  border-top: 1px solid #191919;
  background: #0d0d0d;
  border-radius: 0 0 10px 10px;
  padding: 32px;
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
`;
const TagChip = styled.div`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 126%;
  border-radius: 24px;
  border: 1px solid #616fed;
  display: inline-flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: auto;
  height: 28px;
  min-width: auto;
  white-space: nowrap;
`;

const NoneTageDiv = styled.div`
  width: 100%;
  height: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #686868;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
const badgeArr = [
  {
    name: "angry",
    title: "분노할 용기",
    unactive: <UnactiveBadge1 />,
    active: <ActiveBadge1 />,
    desc: "싫은 감정",
  },
  {
    name: "sad",
    title: "슬퍼할 용기",
    unactive: <UnactiveBadge2 />,
    active: <ActiveBadge2 />,
    desc: "슬프고 힘든 감정",
  },
  {
    name: "complicated",
    title: "복잡할 용기",
    unactive: <UnactiveBadge3 />,
    active: <ActiveBadge3 />,
    desc: "복잡한 감정",
  },
  {
    name: "surprised",
    title: "놀랄 용기",
    unactive: <UnactiveBadge4 />,
    active: <ActiveBadge4 />,
    desc: "예상하지 못한 감정",
  },
  {
    name: "loving",
    title: "사랑할 용기",
    unactive: <UnactiveBadge5 />,
    active: <ActiveBadge5 />,
    desc: "좋은 감정",
  },
];
interface BadgeWithTags extends Badge {
  tags?: string[];
}
function BadgeCard({
  badge,
  fetchBadgeList,
}: {
  badge: Badge;
  fetchBadgeList: () => void;
}) {
  const badgeInfo = badgeArr.find((item) => item.name === badge.name);
  const [BadgeDetailName, setBadgeDetailName] = useState<null | string>(null);
  const [badgeDetails, setBadgeDetails] = useState<BadgeWithTags[]>([]);
  let selectedDetail =
    badgeDetails.find((item) => item.name === BadgeDetailName) || null;

  const badgeDetailHandler = (name: string | null) => {
    if (!BadgeDetailName) {
      setBadgeDetailName(name);
    } else {
      setBadgeDetailName(null);
    }
  };

  useEffect(() => {
    fetchBadgeDetails();
  }, []);

  const fetchBadgeDetails = async () => {
    try {
      const { data, status } = await getBadgeDetails();
      if (status === 200) {
        setBadgeDetails(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      {badgeInfo && (
        <>
          <H1>
            Lv.{badge?.level}&nbsp;
            {badgeInfo.title}
          </H1>
          <ContentsDiv>
            {badge.level > 9 ? (
              <Reward badge={badge} fetchBadgeList={fetchBadgeList}></Reward>
            ) : null}
            <ArrowDiv>
              <Arrow onClick={() => badgeDetailHandler(badge.name)}></Arrow>
            </ArrowDiv>
            <ImageDiv>
              {badge.level > 0 ? badgeInfo?.active : badgeInfo?.unactive}
            </ImageDiv>
            <ProgressiveBarDiv>
              <SubTitle>{badgeInfo?.desc} 표현</SubTitle>
              <Desc>
                해시태그 <Strong>10개</Strong> 사용하기
              </Desc>
              <ProgressBarContainer>
                <Progress progress={badge.exp * 10} />
                <ProgressText>{badge.exp} / 10</ProgressText>
              </ProgressBarContainer>
            </ProgressiveBarDiv>
          </ContentsDiv>
          {BadgeDetailName === badge.name && (
            <TagDiv>
              {selectedDetail &&
              selectedDetail.tags &&
              selectedDetail.tags.length > 0 ? (
                selectedDetail.tags.map((item: string, index: number) => (
                  <TagChip key={index}># {item}</TagChip>
                ))
              ) : (
                <NoneTageDiv>등록된 태그가 없습니다.</NoneTageDiv>
              )}
            </TagDiv>
          )}
        </>
      )}
    </Layout>
  );
}

export default BadgeCard;

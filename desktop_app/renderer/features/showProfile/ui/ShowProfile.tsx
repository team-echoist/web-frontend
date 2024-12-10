import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@/shared/ui/button";
import { useStore } from "@/shared/store";
import { CircularAvatar } from "@/shared/ui/avatar";
import DefaultProfileImg from "@/shared/assets/img/default_profile.webp";
import color from "@/shared/styles/color";
import { getUserProfile } from "@/shared/api/user";
import { User } from "@/shared/types";

const Layout = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 326px;
  display: flex;
  justify-content: center;
  margin-bottom: 39px;
`;
const Wrapper = styled.div`
  width: 758px;
  height: 100%;
`;
const ProfileImageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  strong {
    color: ${color.pointcolor};
  }
`;
const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const OverviewDiv = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  justify-content: space-between;
  margin-top: 21px;
  background: #131313;
  border-radius: 10px;
`;
const StatisticsItemDiv = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const GreyText = styled.span`
  color: #616161;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
const GreyBigText = styled.span`
  color: #616161;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
interface stateType {
  totalEssays: number;
  publishedEssays: number;
  linkedOutEssays: number;
}
function ShowProfile({
  handleProfileModal,
  id,
  isMyProfile=false
}: {
  handleProfileModal?: () => void;
  id: number;
  isMyProfile?:boolean;
}) {
  const [essaystats, setEssaystats] = useState<stateType | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  useEffect(() => {
    if (id) {
      fetchUserProfile();
    }
  }, [id]);

  const fetchUserProfile = async () => {
    try {
      const { data, user, status } = await getUserProfile(id || 0);
      if (status === 200) {
        setEssaystats(data);
        setUserData(user);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <Wrapper>
        <ProfileImageDiv>
          <ProfileImageWrapper>
            <CircularAvatar
              img={userData?.profileImage || DefaultProfileImg.src}
              width={108}
              height={108}
            />
            <Span>
              <strong>{userData?.nickname}</strong> 아무개
            </Span>
          </ProfileImageWrapper>
        </ProfileImageDiv>
        <OverviewDiv>
          <StatisticsItemDiv>
            <GreyText>쓴글</GreyText>
            <GreyBigText>{essaystats?.totalEssays ?? 0}</GreyBigText>
          </StatisticsItemDiv>
          <StatisticsItemDiv>
            <GreyText>발행</GreyText>
            <GreyBigText>{essaystats?.publishedEssays ?? 0}</GreyBigText>
          </StatisticsItemDiv>
          <StatisticsItemDiv>
            <GreyText>링크드아웃</GreyText>
            <GreyBigText>{essaystats?.linkedOutEssays ?? 0}</GreyBigText>
          </StatisticsItemDiv>
        </OverviewDiv>
        <BtnDiv>
          {isMyProfile && (
            <Button
              text="프로필 편집"
              scale="max"
              onClick={handleProfileModal}
            />
          )}
        </BtnDiv>
      </Wrapper>
    </Layout>
  );
}

export default ShowProfile;

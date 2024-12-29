import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@/shared/ui/button";
import { postFollows } from "@/shared/api";
import { CircularAvatar } from "@/shared/ui/avatar";
import DefaultProfileImg from "@/shared/assets/img/default_profile.webp";
import color from "@/shared/styles/color";
import { getUserProfile } from "@/shared/api/user";
import { User } from "@/shared/types";
import { deleteFollow } from "@/shared/api";
import { ColorToast } from "@/shared/ui/toast";
import { getFollows } from "@/shared/api";

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
const SubscribeBtn = styled.button`
  all: unset;
  width: 758px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #242424;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #757575;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
`;
const ToastContainer = styled.div`
  position: fixed;
  bottom: 70px;
  left: 45%;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface stateType {
  totalEssays: number;
  publishedEssays: number;
  linkedOutEssays: number;
}
function ShowProfile({
  handleProfileModal,
  id,
  isMyProfile = false,
  nickname,
  profileImage,
}: {
  handleProfileModal?: () => void;
  id: number;
  isMyProfile?: boolean;
  nickname?: string;
  profileImage?: string;
}) {
  const [essaystats, setEssaystats] = useState<stateType | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const [isShowToast, setIsShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [isError, setError] = useState(false);
  const [isFollow, setFollow] = useState(false);

  const submitFollows = async (isFollow: boolean) => {
    try {
      const { status } = isFollow
        ? await deleteFollow(id)
        : await postFollows(id);
      if (status === 201 || status === 200) {
        const alertText = isFollow
          ? "구독 취소 되었습니다."
          : "구독 추가 되었습니다.";
        fetchFollows();
        setIsShowToast(true);
        setToastText(alertText);
      }
    } catch (err) {
      console.log("err", err);
      setIsShowToast(true);
      setToastText("서버 연결이 불안정합니다. 다시 시도 해주세요.");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  const fetchFollows = async (user?: User) => {
    try {
      const { data, status } = await getFollows();
      const tempUserData = user ? user : userData;
      // 추후 구독 api 수정되면 바꾸기
      if (status === 200) {
        const isFollow =
          data?.some((item) => item.nickname === tempUserData?.nickname) ||
          false;
        setFollow(isFollow);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUserProfile = async () => {
    try {
      const { data, user, status } = await getUserProfile(id || 0);
      if (status === 200) {
        setEssaystats(data);
        setUserData(user);
        if (!isMyProfile) {
          fetchFollows(user);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (id) {
      fetchUserProfile();
    }
  }, [id]);

  return (
    <Layout>
      <Wrapper>
        <ToastContainer>
          <ColorToast
            text={toastText}
            onClose={() => {
              setIsShowToast(false);
            }}
            isShowToast={isShowToast}
            type={isError ? "alert" : "normal"}
          />
        </ToastContainer>
        <ProfileImageDiv>
          <ProfileImageWrapper>
            <CircularAvatar
              img={
                profileImage
                  ? profileImage
                  : userData?.profileImage || DefaultProfileImg.src
              }
              width={108}
              height={108}
            />
            <Span>
              <strong>{nickname ? nickname : userData?.nickname}</strong> 아무개
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
          {isMyProfile ? (
            <Button
              text="프로필 편집"
              scale="max"
              onClick={handleProfileModal}
            />
          ) : isFollow ? (
            <SubscribeBtn onClick={() => submitFollows(isFollow)}>
              구독중
            </SubscribeBtn>
          ) : (
            <Button
              text="구독"
              scale="max"
              onClick={() => submitFollows(isFollow)}
            />
          )}
        </BtnDiv>
      </Wrapper>
    </Layout>
  );
}

export default ShowProfile;

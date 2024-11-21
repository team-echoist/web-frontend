import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getFollows } from "@/shared/api/follow";
import { Users } from "@/shared/types";
import { CircularAvatar } from "@/shared/ui/avatar";
import DefaultProfileImg from "@/shared/assets/img/default_profile.webp";
import color from "@/shared/styles/color";

const NoneFollowsLayout = styled.div`
  width: calc(100vw - 270px);
  height: 636px;
  color: #686868;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FollowsLayout = styled.div`
  display: flex;
`;
const FollowsListContentLayout = styled.div`
  width: 807px;
  height: 174px;
  padding: 12px 0px;
  overflow-x: auto; /* 가로 스크롤 활성화 */
  display: flex;
  white-space: nowrap;
  gap: 28px;
`;
const ProfileItemDiv = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gpa: 2px;
`;
const Span = styled.span`
  color: #5c5c5c;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const AllProfileBtnDiv = styled.div`
  display: flex;
  width: 55px;
  height:100%
  padding: 77px 13px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;
const Btn = styled.button`
  all: unset;
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 126%;
  cursor: pointer;
`;
const tempData = [
  {
    id: 0,
    email: "string",
    nickname: "string",
    profileImage: "string",
    gems: 0,
    createdDate: "2024-11-21T12:20:12.346Z",
    isFirst: true,
    locationConsent: true,
    devices: [
      {
        id: 0,
        uid: "string",
        fcmToken: "string",
        os: "string",
        type: "string",
        model: "string",
      },
    ],
    homeLayouts: [
      {
        id: 0,
        isActive: true,
        updatedDate: "2024-11-21T12:20:12.346Z",
        homeItems: [
          {
            id: 0,
            item: {
              id: 0,
              name: "string",
              position: "string",
              price: 0,
              url: "string",
              owned: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: 0,
    email: "string",
    nickname: "string",
    profileImage: "string",
    gems: 0,
    createdDate: "2024-11-21T12:20:12.346Z",
    isFirst: true,
    locationConsent: true,
    devices: [
      {
        id: 0,
        uid: "string",
        fcmToken: "string",
        os: "string",
        type: "string",
        model: "string",
      },
    ],
    homeLayouts: [
      {
        id: 0,
        isActive: true,
        updatedDate: "2024-11-21T12:20:12.346Z",
        homeItems: [
          {
            id: 0,
            item: {
              id: 0,
              name: "string",
              position: "string",
              price: 0,
              url: "string",
              owned: true,
            },
          },
        ],
      },
    ],
  },
];
function FollowList() {
  const [follows, setFollows] = useState<Users | null>(null);

  useEffect(() => {
    fetchFollows();
  }, []);


  const fetchFollows = async () => {
    try {
      const { data, status } = await getFollows();
      if (status === 200) {
        setFollows(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const followsListRenderer = (isNoneFollows: boolean) => {
    return (
      <>
        {isNoneFollows ? (
          <FollowsLayout>
            <FollowsListContentLayout>
              <ProfileItemDiv>
                <CircularAvatar
                  img={DefaultProfileImg.src}
                  width={60}
                  height={60}
                />
                <Span>꾸루룩</Span>
              </ProfileItemDiv>
            </FollowsListContentLayout>
            <AllProfileBtnDiv><Btn>전체</Btn></AllProfileBtnDiv>
          </FollowsLayout>
        ) : (
          <NoneFollowsLayout>구독한 아무개가 없습니다.</NoneFollowsLayout>
        )}
      </>
    );
  };
  return <>{followsListRenderer(follows?.length === 0)}</>;
}

export default FollowList;

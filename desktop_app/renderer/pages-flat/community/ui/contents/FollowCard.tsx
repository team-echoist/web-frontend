import React from "react";
import { User } from "@/shared/types";
import styled from "styled-components";
import { CircularAvatar } from "@/shared/ui/avatar";
import color from "@/shared/styles/color";
import { useRouter } from "next/router";

const Card = styled.div`
  width: 781px;
  display: flex;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #191919;
`;

const P = styled.p`
  color: #656565;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  align-items: center;
  margin-left: 17px;
  width: 545px;
`;
const Strong = styled.strong`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const Btn = styled.button`
  all: unset;
  color: ${color.pointcolor};
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  width: 67px;
  height: 38px;
  padding: 8px 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #181818;
  cursor: pointer;
  margin-left: 72px;
`;
const AvatarBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

function FollowCard({ data }: { data: User }) {
  const router = useRouter();

  const navigateUserProfile = (id: number) => {
    router.push(`/web/user_profile?id=${id}&isSubscribed=true`);
  };
  return (
    <Card>
      <AvatarBtn
        onClick={() => {
          navigateUserProfile(data.id);
        }}
      >
        <CircularAvatar img={data.profileImage} width={60} height={60} />
      </AvatarBtn>
      <P>
        <Strong>{data.nickname}</Strong> 아무개
      </P>
      <Btn>구독중</Btn>
    </Card>
  );
}

export default FollowCard;

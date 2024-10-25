import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultProfileImg from "@/shared/assets/img/default_profile.webp";
import Image from "next/image";
import color from "@/shared/styles/color";
import { useStore } from "@/shared/store";

const Layout = styled.div`
  width: 80%;
  height: 100px;
  padding: 20px 147px;
  margin-bottom: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProfileDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10.62px;
`;
const ProfileImgDiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  display: flex;
  gap: 17px;
  img {
    border-radius: 50px;
  }
`;
const ProfileName = styled.div`
  color: #656565;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  gap: 5px;
  align-items: center;
  white-space: nowrap;
`;

const Strong = styled.strong`
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;
const SubscribeBtn = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  width: 87px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${color.pointcolor};
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
`;

function splitByKeyword(str: string, keyword: string) {
  if (str.includes(keyword)) {
    const [firstPart] = str.split(keyword);
    return [firstPart];
  }
  return [str];
}

function UserProfile({
  userName,
  profileImage,
}: {
  userName: string;
  profileImage: string;
}) {
  const [splitedUserName, setSplitedUserName] = useState<string[]>([]);
  const user = useStore((state) => state.user);

  useEffect(() => {
    const splitedStringArr = splitByKeyword(userName, "아무개");
    setSplitedUserName(splitedStringArr);
  }, [userName]);

  return (
    <Layout>
      <ProfileDiv>
        <ProfileImgDiv>
          <Image
            src={profileImage ? profileImage : DefaultProfileImg.src}
            alt="profile_image"
            width={60}
            height={60}
          ></Image>
        </ProfileImgDiv>
        <ProfileName>
          {splitedUserName[0]} <Strong>아무개</Strong>
        </ProfileName>
      </ProfileDiv>
      {user?.nickname !== userName && <SubscribeBtn>구독하기</SubscribeBtn>}
    </Layout>
  );
}

export default UserProfile;

import React from "react";
import styled from "styled-components";
import Logo from "@/shared/assets/img/logo.svg";
import HomeFocusIcon from "@/shared/assets/img/homeicon_focus.svg";
import EssayFocusIcon from "@/shared/assets/img/home_essay_icon_focus.svg";
import CommunityFocusIcon from "@/shared/assets/img/home_community_icon_focus.svg";
import MypageFocusIcon from "@/shared/assets/img/home_mypage_focus.svg";
import HomeDisableIcon from "@/shared/assets/img/homeicon_disabled.svg";
import EssayDisableIcon from "@/shared/assets/img/home_essay_icon_disabled.svg";
import CommunityDisableIcon from "@/shared/assets/img/home_community_icon_disabled.svg";
import MypageDisableIcon from "@/shared/assets/img/home_mypage_disabled.svg";
import color from "@/shared/styles/color";

interface IconMap {
  home: React.ReactElement;
  myessay: React.ReactElement;
  community: React.ReactElement;
  mypage: React.ReactElement;
}
const name: any = {
  home: "홈",
  myessay: "나의글",
  community: "커뮤니티",
  mypage: "프로필",
};
const disableIcon: IconMap = {
  home: <HomeDisableIcon />,
  myessay: <EssayDisableIcon />,
  community: <CommunityDisableIcon />,
  mypage: <MypageDisableIcon />,
};

const focusIcon: IconMap = {
  home: <HomeFocusIcon />,
  myessay: <EssayFocusIcon />,
  community: <CommunityFocusIcon />,
  mypage: <MypageFocusIcon />,
};

const Layout = styled.nav`
  width: 214px;
  height: 100%;
  flex-shrink: 0;
  z-index: 200;
  border-right: 0.75px solid #191919;
  background: #121212;
  position: absolute;
  left: 0;
  top: 32px;
  padding: 29.25px 22.5px;
  diisplay: flex;
  flex-direction: column;
`;
const SideBarItem = styled.div<{ textColor: string }>`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 30px;
  margin-top: 29px;
  color: ${({ textColor }) => textColor};
  cursor: pointer;
`;

function SideBar({
  focusedKey,
  onIconClick,
}: {
  focusedKey: keyof IconMap;
  onIconClick: (key: keyof IconMap) => void;
}) {
  const icons = ["home", "myessay", "community", "mypage"].map((key) => {
    const isFocused = focusedKey === key;
    const textColor = isFocused ? color.white : "#686868";
    const IconComponent = isFocused
      ? focusIcon[key as keyof IconMap]
      : disableIcon[key as keyof IconMap];
    const navName = name[key];

    return (
      <SideBarItem
        key={key}
        onClick={() => onIconClick(key as keyof IconMap)}
        textColor={textColor}
      >
        {IconComponent} {navName}
      </SideBarItem>
    );
  });
  return (
    <Layout>
      <Logo />
      {icons}
    </Layout>
  );
}

export default SideBar;

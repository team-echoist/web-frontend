import React from "react";
import { ActiveSideBar } from "@/features/activesidebar";
import styled from "styled-components";
import { ShowProfile } from "@/features/showProfile";
import { useRouter } from "next/router";

const ContentsContainer = styled.article`
  position: absolute;
  top: 32px;
  left: 265px;
  width: calc(100vw - 270px);
  // height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

function UserProfile() {
  const router = useRouter();
  const { query } = router;

  const isSubscribed = query.isSubscribed === "true";
  return (
    <>
      <ActiveSideBar />
      <ContentsContainer>
        <ShowProfile
          id={Number(query.id)}
          isSubscribed={isSubscribed || false}
        />
      </ContentsContainer>
    </>
  );
}

export default UserProfile;

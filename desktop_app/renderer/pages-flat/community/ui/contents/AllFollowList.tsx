import React, { useState, useEffect } from "react";
import { Users } from "@/shared/types";
import { getFollows } from "@/shared/api/follow";
import FollowCard from "./FollowCard";
import styled from "styled-components";
import { NoneContents } from "@/shared/ui/layout";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
`;

function AllFollowList({
  modalHandler,
  fetchFollows,
  follows,
  handelFollowId,
}: {
  modalHandler: (name: string) => void;
  fetchFollows: () => void;
  follows: Users;
  handelFollowId: (id: number) => void;
}) {
  useEffect(() => {
    fetchFollows();
  }, []);

  return (
    <Layout>
      {follows.length > 0 ? (
        <>
          {follows.map((item) => (
            <FollowCard
              data={item}
              modalHandler={modalHandler}
              handelFollowId={handelFollowId}
            />
          ))}
        </>
      ) : (
        <NoneContents text="구독한 사람이 없습니다." />
      )}
    </Layout>
  );
}

export default AllFollowList;

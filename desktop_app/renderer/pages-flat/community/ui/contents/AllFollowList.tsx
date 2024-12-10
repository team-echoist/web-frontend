import React, { useState, useEffect } from "react";
import { Users } from "@/shared/types";
import { getFollows } from "@/shared/api/follow";
import FollowCard from "./FollowCard";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
`;

function AllFollowList() {
  const [follows, setFollows] = useState<Users>([]);

  useEffect(() => {
    fetchFollows();
  }, []);

  const fetchFollows = async () => {
    try {
      const { data, status } = await getFollows();
      if (status === 200) {
        const filteredData = data?.filter(
          (item) => Object.keys(item).length > 0
        );
        setFollows(filteredData || []);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      {follows.map((item) => (
        <FollowCard data={item} />
      ))}
    </Layout>
  );
}

export default AllFollowList;

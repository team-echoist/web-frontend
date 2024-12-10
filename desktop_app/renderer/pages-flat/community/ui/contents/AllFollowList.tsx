import React, { useState,useEffect } from "react";
import { Users } from "@/shared/types";
import { getFollows } from "@/shared/api/follow";

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

  return <div>AllFollowList</div>;
}

export default AllFollowList;

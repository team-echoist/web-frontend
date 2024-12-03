import React, { useEffect, useState } from "react";
import DefaultLayout from "../../ui/DefaultLayout";
import styled from "styled-components";
import color from "@/shared/styles/color";
import BadgeCard from "./contents/BadgeCard";
import { Badge } from "@/shared/types";
import { getBadges } from "@/shared/api";

const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: absolute;
  left: 50px;
  top: 5px;
`;
const BadgeLayout = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  margin-top:52px;
  margin-bottom:50px;
`;
function BadgeModal({
  modalHandler,
}: {
  modalHandler: (name: string) => void;
}) {
  const [badgeList, setBadgeList] = useState<Badge[]>([]);
  useEffect(() => {
    fetchBadgeList();
  }, []);

  const fetchBadgeList = async () => {
    try {
      const { data, status } = await getBadges();
      if (status === 200) {
        setBadgeList(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <DefaultLayout modalHandler={modalHandler} name="badge">
      <H1>링크드아웃 뱃지</H1>
      <BadgeLayout>
        {badgeList.map((badge) => (
          <BadgeCard badge={badge} fetchBadgeList={fetchBadgeList}/>
        ))}
      </BadgeLayout>
    </DefaultLayout>
  );
}

export default BadgeModal;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UnactiveBadge1 from "@/shared/assets/img/img_badge_unactivate/img_badge1_unactivate.svg";
import UnactiveBadge2 from "@/shared/assets/img/img_badge_unactivate/img_badge2_unactivate.svg";
import UnactiveBadge3 from "@/shared/assets/img/img_badge_unactivate/img_badge3_unactivate.svg";
import UnactiveBadge4 from "@/shared/assets/img/img_badge_unactivate/img_badge4_unactivate.svg";
import UnactiveBadge5 from "@/shared/assets/img/img_badge_unactivate/img_badge5_unactivate.svg";
import ActiveBadge1 from "@/shared/assets/img/img_badge_activate/img_badge1_activate.svg";
import ActiveBadge2 from "@/shared/assets/img/img_badge_activate/img_badge2_activate.svg";
import ActiveBadge3 from "@/shared/assets/img/img_badge_activate/img_badge3_activate.svg";
import ActiveBadge4 from "@/shared/assets/img/img_badge_activate/img_badge4_activate.svg";
import ActiveBadge5 from "@/shared/assets/img/img_badge_activate/img_badge5_activate.svg";
import { getBadges } from "@/shared/api";
import { Badge } from "@/shared/types";
import EnvelopModal from "./modal/EnvelopModal";


const Layout = styled.ul`
  width: 758px;
  height: 158px;
  display: flex;
  gap: 30px;
`;
const BadgeItem = styled.li`
  all: unset;
  cursor: pointer;
`;

const BadgeIconArr = [
  {
    name: "angry",
    unactive: <UnactiveBadge1 />,
    active: <ActiveBadge1 />,
  },
  {
    name: "sad",
    unactive: <UnactiveBadge2 />,
    active: <ActiveBadge2 />,
  },
  {
    name: "complicated",
    unactive: <UnactiveBadge3 />,
    active: <ActiveBadge3 />,
  },
  {
    name: "surprised",
    unactive: <UnactiveBadge4 />,
    active: <ActiveBadge4 />,
  },
  {
    name: "loving",
    unactive: <UnactiveBadge5 />,
    active: <ActiveBadge5 />,
  },
];

function ActiveBadge() {
  const [badgeList, setBadgeList] = useState<Badge[]>([]);
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

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
  const handleBadgeModal = (name: string | null) => {
      setSelectedBadge(name);
  };
  return (
    <Layout>
      {selectedBadge && (
        <EnvelopModal
          selectedBadge={selectedBadge}
          handleBadgeModal={handleBadgeModal}
          badgeList={badgeList}
        />
      )}
      {badgeList.map((badge, index) => {
        const matchedBadge = BadgeIconArr.find(
          (item) => item.name === badge.name
        );
        return (
          <BadgeItem
            key={index}
            onClick={() => {
              if (badge.level > 0) {
                handleBadgeModal(matchedBadge?.name ?? null);
              }
            }}
          >
            {badge.level > 0 ? matchedBadge?.active : matchedBadge?.unactive}
          </BadgeItem>
        );
      })}
    </Layout>
  );
}

export default ActiveBadge;

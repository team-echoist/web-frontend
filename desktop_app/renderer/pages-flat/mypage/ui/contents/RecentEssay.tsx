import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRecentEssay } from "@/shared/api";
import color from "@/shared/styles/color";
import { Essay } from "@/shared/types";
import { useRouter } from "next/navigation";
import Devider from "@/shared/assets/img/devider.svg";

const Layout = styled.div`
  width: 758px;
  display: flex;
  gap: 32px;
`;
const Card = styled.div<{ islast: boolean }>`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  border-right: ${({ islast }) => (islast ? "1px solid #333" : "")};
  padding-right: 20px;
`;
const Title = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Desc = styled.p`
  color: ${color.white};
  text-align: justify;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 23.8px */
  letter-spacing: 0.14px;
`;

function RecentEssay() {
  const [data, setData] = useState<Essay[]>([]);
  const router = useRouter();
  useEffect(() => {
    fetchRecentEssay();
  }, []);
  const fetchRecentEssay = async () => {
    try {
      const { data, status } = await getRecentEssay(1, 3);
      if (status === 200) {
        setData(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const navigateToEssay = (id?: number, status?: string) => {
    const essayId = id || 0;
    if (essayId) {
      router.push(`/web/essay_details?id=${essayId}&pageType=${status}`);
    }
  };
  return (
    <Layout>
      {data.map((item, index) => (
        <Card
          islast={data.length !== index + 1}
          onClick={() => {
            navigateToEssay(item.id, item.status);
          }}
        >
          <Title>{item?.title}</Title>
          <Desc>{item?.content}</Desc>
        </Card>
      ))}
    </Layout>
  );
}

export default RecentEssay;

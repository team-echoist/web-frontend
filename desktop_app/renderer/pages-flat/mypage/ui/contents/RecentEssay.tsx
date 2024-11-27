import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRecentEssay } from "@/shared/api";
import color from "@/shared/styles/color";
import { Essay } from "@/shared/types";
import { useRouter } from "next/navigation";

const Layout = styled.div`
  width: 758px;
  display: flex;
  gap: 32px;
  min-height: 168px;
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
const NoneContentsLayout = styled.div`
 width: 100%;
  color: #686868;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  display: flex;
  justify-content: center;
  align-items: center;
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
      {data.length > 0 ? (
        <>
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
        </>
      ) : (
        <NoneContentsLayout>최근 본 글이 없습니다.</NoneContentsLayout>
      )}
    </Layout>
  );
}

export default RecentEssay;

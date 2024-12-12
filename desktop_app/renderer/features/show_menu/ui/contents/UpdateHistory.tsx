import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import styled from "styled-components";
import { NoneContents } from "@/shared/ui/layout";
import color from "@/shared/styles/color";
import { getReleases } from "@/shared/api/surpport";
import { Virtuoso } from "react-virtuoso";
import { Release } from "@/shared/types";
import { formatDateToFullKorean } from "@/shared/lib/date";
import { formatDateToYearMonth } from "@/shared/lib/date";

const Layout = styled.nav`
  width: 93%;
  height: 90vh;
  overflow-y: auto;
`;
const TitleChip = styled.div`
  width: 650px;
  height: 21px;
  border-radius: 8px 8px 0px 0px;
  background: ${color.pointcolor};
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;
const BlackText = styled.span`
  color: #0e0e0e;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  white-space: nowrap;
`;
const Contents = styled.div`
  padding: 46px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Ul = styled.ul`
  width: 650px;
  padding: 12px 23px 20px 23px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Li = styled.li`
  color: #888;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;
const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
`;
function UpdateHistory({
  handleCloseComponent,
}: {
  handleCloseComponent: () => void;
}) {
  const [releaseData, setReleaseData] = useState<Release[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  useEffect(()=>{
    fetchReleaseData();
  },[])

  const fetchReleaseData = async () => {
    try {
      const { data, status } = await getReleases(page, 20);
      if (status === 200 || status === 201) {
        setReleaseData((prevData) => [...prevData, ...data]);
        setTotalPage(totalPage);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const loadMore = () => {
    if (totalPage && page >= totalPage) {
      return;
    }
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (page > 1) {
      fetchReleaseData();
    }
  }, [page]);
  return (
    <Layout>
      <Header title="업데이트 기록" handleClose={handleCloseComponent} />
      <Contents>
        {releaseData.length > 0 ? (
          <Virtuoso
            style={{ height: "700px", width: "100%" }}
            data={releaseData}
            endReached={loadMore}
            itemContent={(_, item) => (
              <ContentItem>
                <TitleChip>
                  <BlackText>
                    {formatDateToYearMonth(item.updatedDate)} 업데이트
                  </BlackText>
                  <BlackText>
                    {formatDateToFullKorean(item.updatedDate)}
                  </BlackText>
                </TitleChip>
                <Ul>
                  <Li>{item.content}</Li>
                </Ul>
              </ContentItem>
            )}
          />
        ) : (
          <NoneContents text="업데이트 기록이 없습니다." />
        )}
      </Contents>
    </Layout>
  );
}

export default UpdateHistory;

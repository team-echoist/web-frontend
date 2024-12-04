import React, { useEffect, useState } from "react";
import DefaultLayout from "../../ui/DefaultLayout";
import { getRecentEssay } from "@/shared/api";
import { useRouter } from "next/router";
import { Virtuoso } from "react-virtuoso";
import { Essay } from "@/shared/types";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { PostCard } from "@/shared/ui/card";

const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: fixed;
  left: 315px;
  top: 35px;
`;
const ContentsContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  margin-top: 19px;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  margin-top: 19px;
`;
const PostCardItemDiv = styled.div`
  display: flex;
`;
const NoneData = styled.div`
  width: 80%;
  height: 80vh;
  color: #686868;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function RecentEssays({
  modalHandler,
}: {
  modalHandler: (name: string) => void;
}) {
  const [list, setList] = useState<Essay[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    fetchRecentEssay();
  }, []);
  const fetchRecentEssay = async () => {
    try {
      const { data, totalPage, status } = await getRecentEssay(page, 20);
      if (status === 200) {
        setList((prevList) => [...prevList, ...data]);
        if (totalPage) {
          setTotalPage(totalPage);
        }
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
  useEffect(() => {
    if (page > 1) {
      fetchRecentEssay();
    }
  }, [page]);
  const loadMore = () => {
    if (totalPage && page >= totalPage) {
      return;
    }
    setPage((prev) => prev + 1);
  };
  return (
    <DefaultLayout modalHandler={modalHandler} name="recent">
      <H1>최근 본 글</H1>
      {list.length > 0 ? (
        <ContentsContainer>
          <Wrapper>
            <Virtuoso
              style={{ height: "700px", width: "100%" }}
              data={list}
              endReached={loadMore}
              itemContent={(_, item) => (
                <PostCardItemDiv>
                  <PostCard
                    key={item.id}
                    title={item.title}
                    desc={item.content}
                    time={item.createdDate}
                    imgUrl={item.thumbnail}
                    linkedout={item.status === "linkedout"}
                    onClick={() => navigateToEssay(item.id, item.status)}
                  />
                </PostCardItemDiv>
              )}
            />
          </Wrapper>
        </ContentsContainer>
      ) : (
        <NoneData>최근 본 글이 없습니다.</NoneData>
      )}
    </DefaultLayout>
  );
}

export default RecentEssays;

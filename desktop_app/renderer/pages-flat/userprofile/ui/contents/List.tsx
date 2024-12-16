import { Essay } from "@/shared/types";
import React from "react";
import { Virtuoso } from "react-virtuoso";
import { PostCard } from "@/shared/ui/card";
import styled from "styled-components";
import { useRouter } from "next/router";
import { NoneContents } from "@/shared/ui/layout";

const ContentsContainer = styled.div`
  width: 758px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  margin-top: 19px;
`;
function List({ essays, loadMore }: { essays: Essay[]; loadMore: () => void }) {
  const router = useRouter();
  const navigateToEssay = (id?: number, status?: string) => {
    const essayId = id || 0;
    if (essayId) {
      router.push(`/web/essay_details?id=${essayId}&pageType=${status}`);
    }
  };

  return (
    <ContentsContainer>
      {essays.length > 0 ? (
        <Virtuoso
          style={{ height: "700px", width: "100%" }}
          data={essays}
          endReached={loadMore}
          itemContent={(_, item) => (
            <PostCard
              key={item.id}
              writer={item.author.nickname}
              title={item.title}
              desc={item.content}
              time={item.createdDate}
              imgUrl={item.thumbnail}
              linkedout={item.status === "linkedout"}
              onClick={() => navigateToEssay(item.id, item.status)}
            />
          )}
        />
      ) : (
        <NoneContents text="게시글이 없습니다." height={300}/>
      )}
    </ContentsContainer>
  );
}

export default List;

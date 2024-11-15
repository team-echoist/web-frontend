import React, { useEffect, useState } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { Essay } from "@/shared/types";
import { PostCard } from "@/shared/ui/card";
import { useRouter } from "next/navigation";
import { getRandomEssays } from "@/shared/api";

const Layout = styled.article`
  width: calc(100vw - 270px);
  position: absolute;
  top: 726px;
  left: 265px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 861px;
  margin-top: 26px;
  height: 60vh;
`;
const H1 = styled.h1`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 30.6px */
  letter-spacing: 0.18px;
`;

const P = styled.p`
  color: #696969;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
const TitleDiv = styled.div`
`;

function EssayList() {
  const [list, setList] = useState<Essay[]>([]);
  const router = useRouter();
  useEffect(() => {
    getEssayList();
  }, []);
  const getEssayList = async () => {
    try {
      const { data } = await getRandomEssays( 10);
      setList(data);
    } catch (Err) {
      console.log(Err);
    }
  };
  const navigateToEssay = (id?: number,status?:string) => {
    const essayId = id || 0;
    if (essayId) {
      router.push(`/web/essay_details?id=${essayId}&pageType=${status}`);
    }
  };
  return (
    <Layout>
      <Wrapper>
        <TitleDiv>
          <H1>랜덤 글</H1>
          <P>수많은 유저들의 진솔하고 다양한 경험을 만나보세요.</P>
        </TitleDiv>
        {list.map((item) => (
          <PostCard
            key={item.id}
            writer={item.author.nickname}
            title={item.title}
            desc={item.content}
            time={item.createdDate}
            imgUrl={item.thumbnail}
            linkedout={item.status === "linkedout"}
            onClick={() => navigateToEssay(item.id,item.status)}
          ></PostCard>
        ))}
      </Wrapper>
    </Layout>
  );
}

export default EssayList;

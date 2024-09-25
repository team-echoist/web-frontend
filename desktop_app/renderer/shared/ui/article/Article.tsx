import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { formatDateFullString } from "@/shared/lib/date";
import SmallRing from "@/shared/assets/img/ring/small_ring.webp";
import Image from "next/image";

const Layout = styled.article`
  width: 80%;
  margin-top: 32px;
  padding: 72px 147px;
  display: flex;
  flex-direction: column;
`;
const ImageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 45px;
`;
const H1 = styled.h1`
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const Desc = styled.p`
  color: #b4b4b4;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  margin-top: 20px;
  word-wrap: keep-all;
`;
const UserName = styled.p`
  color: #686868;
  text-align: right;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
const DateTime = styled.time`
  color: #686868;
  text-align: right;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  margin-top: 8px;
`;
const RingDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

function Article({
  title,
  desc,
  userName,
  date,
  imgUrl,
}: {
  title: string;
  desc: string;
  userName: string;
  date: string;
  imgUrl?: string;
}) {
  return (
    <Layout>
      <ImageDiv>
        {imgUrl && (
          <Image src={imgUrl} alt="Thumbnail" width={1200} height={460} />
        )}
      </ImageDiv>
      <H1>{title}</H1>
      <Desc dangerouslySetInnerHTML={{ __html: desc }} />
      <UserName>{userName}</UserName>
      <DateTime>{formatDateFullString(date)}</DateTime>
      <RingDiv>
        <Image alt="icon" src={SmallRing} width={81} height={30}></Image>
      </RingDiv>
    </Layout>
  );
}

export default Article;

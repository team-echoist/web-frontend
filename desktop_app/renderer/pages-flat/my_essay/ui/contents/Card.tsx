import React from "react";
import SpotMenuIcon from "@/shared/assets/img/spotmenuicon.svg";
import styled, { css } from "styled-components";
import color from "@/shared/styles/color";
import { Essay } from "@/shared/types";
import { formatDateFullString } from "@/shared/lib/date";
import { useRouter } from "next/navigation";

const Layout = styled.article<{ img?: string }>`
  width: 657px;
  height: 141px;
  padding: 20.54px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10.27px;
  flex-shrink: 0;
  align-self: stretch;
  border-bottom: 1.027px solid rgba(104, 104, 104, 0.1);
  background: ${({ img }) =>
    img
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
      : 'none'};
  margin: 0 auto;
  cursor: pointer;
`;
const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1;
`;
const SpotIconDiv = styled.div``;
const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DescDiv = styled.div`
  width: 100%;
  height: 82px;
  color: ${color.white};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 23.8px */
  letter-spacing: 0.14px;
  margin-top: 15.72px;
`;
const TimeDiv = styled.div`
  width: 100%;
  height: 17px;
  color: #686868;
  text-align: right;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
const Chip = styled.div`
  color: ${color.black};
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  width: 40px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${color.pointcolor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Card({ data, type }: { data: Essay; type: string }) {
  const router = useRouter();

  const navigateToDetails = () => {
    router.push(`essay_details?id=${data.id}&pageType=${type}`);
  };
  console.log("data", data);
  return (
    <Layout onClick={navigateToDetails} img={data.thumbnail}>
      <TitleDiv>
        <H1>
          {data.title} {type == "public" && <Chip>Out</Chip>}
        </H1>
        <SpotIconDiv>
          <SpotMenuIcon />
        </SpotIconDiv>
      </TitleDiv>
      <DescDiv>{data.content}...</DescDiv>
      <TimeDiv>{formatDateFullString(data?.createdDate)}</TimeDiv>
    </Layout>
  );
}

export default Card;

import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import Image from "next/image";
import { useRouter } from "next/router";

const Card = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #121212;
`;
const TitleDiv = styled.div`
  display: flex;
  padding: 25px 51px;
  flex-direction: column;
`;
const Title = styled.h1`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 15.961px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  white-space: nowrap;
`;
const Time = styled.span`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 11.971px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 5px;
`;
const ImageDiv = styled.div`
  width: 100%;
  height: 250px;
`;
const BtnDiv = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 15.961px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const PendingBtn = styled.button`
  all: unset;
  width: 50%;
  display: flex;
  padding: 20px 56px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 0px 0px 0px 10px;
  background: #121212;
  cursor: pointer;
`;
const AcceptBtn = styled.button`
  all: unset;
  width: 50%;
  border-radius: 0px 0px 10px 0px;
  border-left: 1px solid #262626;
  background: #121212;
  display: flex;
  padding: 20px 56px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
function GeuloquisCard({
  url,
  handleGeuloque,
}: {
  url: string | null;
  handleGeuloque: () => void;
}) {
  const router = useRouter();
  const lastFetchDate = localStorage.getItem("lastFetchDate");
  const navigateToWriteEssay = (url:string|null) => {
    localStorage.setItem("pendingGeuloquis","false");
    router.push(`/web/write_essay?geuloquis=true&url=${url}`);
  };
  const PendingGeuloquis = () =>{
    localStorage.setItem("pendingGeuloquis","true");
    handleGeuloque();
  }
  return (
    <Card>
      <TitleDiv>
        <Title>오늘의 글로키가 도착했어요!</Title>
        <Time>{lastFetchDate} GeulRoquis</Time>
      </TitleDiv>
      <ImageDiv>
        {url && (
          <Image alt="geuloquis" width={330} height={250} src={url}></Image>
        )}
      </ImageDiv>
      <BtnDiv>
        <PendingBtn onClick={PendingGeuloquis}>보류</PendingBtn>
        <AcceptBtn onClick={()=>navigateToWriteEssay(url)}>수락</AcceptBtn>
      </BtnDiv>
    </Card>
  );
}

export default GeuloquisCard;

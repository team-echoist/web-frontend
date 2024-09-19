import React, { useEffect, useState } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import BottomSheet from "./BottomSheet";
import Image from "next/image";

const Layout = styled.div`
  padding: 72px 147px;
  display: flex;
  flex-direction: column;
`;
const ThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
`;
const Title = styled.p`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 34px;
`;

const Desc = styled.p`
  color: #b4b4b4;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;

function FinishedEssay({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string[];
}) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  useEffect(() => {
    const currentEssayId = localStorage.getItem("currentEssayId");
    if (currentEssayId) {
      const essayData = JSON.parse(localStorage.getItem("essayData") || "[]");
      const storedEssayData = essayData.find((item: any) => {
        return item.id === currentEssayId && item.imageSrc;
      });
      setThumbnailImage(storedEssayData.imageSrc);
    }
  }, []);
  return (
    <Layout>
      <ThumbnailContainer>
        {thumbnailImage && (
          <Image
            src={thumbnailImage}
            alt="Thumbnail"
            width={1200}
            height={460}
          />
        )}
      </ThumbnailContainer>
      <BottomSheet tag={tag}></BottomSheet>
      <Title>{title}</Title>
      <Desc dangerouslySetInnerHTML={{ __html: desc }} />
    </Layout>
  );
}

export default FinishedEssay;

import { PrevButton } from "@/shared/ui/button";
import styled from "styled-components";
import Image from "next/image";
import BackgroundLogo from "@/shared/assets/img/background_logo.webp";
import MainRoomImg from "@/shared/assets/img/completeroom.webp";
import color from "@/shared/styles/color";
import { useStore } from "@/shared/store";
import { useEffect,} from "react";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/shared/ui/loading";
import {minHeights } from "@/shared/styles/device";

const Layout = styled.main`
  width: 521px;
  height: 100%;
  margin: auto;
  position: relative;
  padding: 40px 80px 132px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const MainContentsDiv = styled.div`
  width: 100%;
  height: 450px;
  flex-shrink: 0;
  position: absolute;
  top: 17.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const MainRoomDiv = styled.div`
  width: 246.458px;
  height: 265.562px;
  flex-shrink: 0;
  position: absolute;
  top: 130.84px;
  left: 163.88px;
`;
const MainTextDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 59px;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const H = styled.h1``;
const HighlightedText = styled.span`
  color: ${color.pointcolor};
`;
const P = styled.p``;
const Small = styled.small`
  display: block;
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  margin-top: 5px;
`;

const SubDescriptionDiv = styled.div`
  position: absolute;
  left: 267.93px;
  top: 70.86vh;
  text-align: right;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  @media only screen and ${minHeights.heightL} {
    top: 50.86vh;
  }
`;

function Complete() {
  const router = useRouter();
  const user = useStore((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      router.push("/web/main");
    }, 3000);
  }, [router]);

  return (
    <Layout>
      <LoadingSpinner />
      <PrevButton />
      <MainContentsDiv>
        <MainTextDiv>
          <H>
            <HighlightedText>
              &lsquo;{user?.nickname} 아무개&rsquo;
            </HighlightedText>
            님,
          </H>
          <P>당신만을 위한 글쓰기 공간을 생성중입니다</P>
          <Small>
            필명은 [마이페이지 &gt; 프로필 편집]에서 수정 가능합니다.
          </Small>
        </MainTextDiv>
        <StyledImage src={BackgroundLogo} alt="background logo" layout="fill" />
        <MainRoomDiv>
          <Image
            src={MainRoomImg}
            alt="room_image"
            width={246.458}
            height={265.562}
          ></Image>
        </MainRoomDiv>
      </MainContentsDiv>
      <SubDescriptionDiv>
        <P>이곳에서 마음껏</P>
        <P> 실험하고, 부딪히고, 성장하는</P>
        <P>아무개가 되어보세요</P>
      </SubDescriptionDiv>
    </Layout>
  );
}

export default Complete;

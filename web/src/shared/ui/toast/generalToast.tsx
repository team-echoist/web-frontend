import styled from "styled-components";
import color from "@/shared/styles/color";
import Closebutton from "../button/closebutton";
import { useState } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.80);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  display: flex;
  width: 440px;
  height: 81px;
  padding: 16px 18px 16px 20px;
  flex-shrink: 0;
  white-space: nowrap;
  text-align: left;
  border-radius: 10px;
  background: #212121;
  position: fixed;
  top: 82.21vh;
  z-index: 1000;
`;

const P = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: ${color.pointcolor};
`;

const H1 = styled.h1`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20px;
  top: 30px;
`;

const CloseButtonDiv = styled.div`
  position: absolute;
  top: 30px;
  left: 430px;
`;

function GeneralToast({ title, desc }: { title: string; desc: string }) {
  const [isClosed, setIsClosed] = useState(false);
  if (isClosed) {
    return null;
  }
  return (
    <Overlay>
      <Layout>
        <CloseButtonDiv>
          <Closebutton setIsClosed={setIsClosed} />
        </CloseButtonDiv>
        <ContentDiv>
          <H1>{title}</H1>
          <P>{desc}</P>
        </ContentDiv>
      </Layout>
    </Overlay>
  );
}

export default GeneralToast;
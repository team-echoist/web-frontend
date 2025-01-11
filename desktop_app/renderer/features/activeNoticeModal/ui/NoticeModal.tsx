import React from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { DarkBackground } from "@/shared/ui/background";
import NoticeLogo from "@/shared/assets/img/notice_logo.svg";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
  width: 370px;
  height: 244px;
  display: inline-flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  background: ${color.darkgray};
  svg {
    margin-top: 20px;
  }
`;
const P = styled.p`
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const Desc = styled.p`
  color: ${color.pointcolor};
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 16.5px */
`;
const BtnDiv = styled.div`
  display: flex;
  gap: 10px;
  color: #000;
  text-align: center;
`;
const DetailBtn = styled.button`
  display: flex;
  width: 320px;
  height: 50px;
  padding: 14px 27px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${color.pointcolor};
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
`;
const CloseBtn = styled.button`
  display: flex;
  width: 160px;
  height: 50px;
  padding: 14px 27px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #868686;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
`;
function NoticeModal({ onClose }: { onClose: () => void }) {
  return (
    <DarkBackground zIndex={5001}>
      <Wrapper>
        <Modal>
          <NoticeLogo />
          <P>
            아무개님,
            <br></br>
            새로운 공지사항이 있어요!
          </P>
          <Desc>[설정 탭]의 고객 지원에서 업데이트 히스토리를 확인해보세요.</Desc>
          <BtnDiv>
            <DetailBtn onClick={onClose}>확인</DetailBtn>
            {/* <CloseBtn onClick={onClose}>닫기</CloseBtn> */}
          </BtnDiv>
        </Modal>
      </Wrapper>
    </DarkBackground>
  );
}

export default NoticeModal;

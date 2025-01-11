import React from "react";
import styled from "styled-components";
import { DarkBackground } from "@/shared/ui/background";
import color from "@/shared/styles/color";
import UpdateLogo from "@/shared/assets/img/update_logo.svg";
import { shell } from "electron";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
  width: 330px;
  height: 323px;
  display: inline-flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  background: ${color.darkgray};
`;
const UpdateChip = styled.div`
  display: flex;
  width: 82px;
  height: 31px;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 80px;
  border: 2px solid #ffe045;
  color: #ffe045;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const P = styled.p`
  color: #ffe045;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const Desc = styled.span`
  color: #ffe045;
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const BtnDiv = styled.div`
  display: flex;
  gap: 10px;
  color: #000;
  text-align: center;
`;
const DetailBtn = styled.button`
  display: flex;
  width: 160px;
  height: 50px;
  padding: 14px 27px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #ffe045;
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
function Update({ onClose }: { onClose: () => void }) {
  const navigateDetails = () => {
    if (typeof window !== "undefined" && window.require) {
      const { shell } = window.require("electron");
      shell.openExternal("https://www.linkedoutapp.com/");
    } else {
      onClose();
      const width = 1707;
      const height = 1000;
      const left = (window.screen.width - width) / 2;
      const top = (window.screen.height - height) / 2;
      window.open(
        "https://www.linkedoutapp.com/",
        "_blank",
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
      );
    }
  };
  return (
    <DarkBackground zIndex={5002}>
      <Wrapper>
        <Modal>
          <UpdateChip>UPDATE</UpdateChip>
          <UpdateLogo />
          <P>
            아무개님,
            <br></br>
            새로운 버전으로 업데이트되었습니다!
          </P>
          <Desc>[자세히 보기]를 탭해 업데이트 히스토리를 확인해보세요.</Desc>
          <BtnDiv>
            <DetailBtn onClick={navigateDetails}>자세히 보기</DetailBtn>
            <CloseBtn onClick={onClose}>닫기</CloseBtn>
          </BtnDiv>
        </Modal>
      </Wrapper>
    </DarkBackground>
  );
}

export default Update;

import React from "react";
import { BottomSeet } from "@/shared/ui/modal";
import { Button } from "@/shared/ui/button";
import styled from "styled-components";
import Confirm from "@/shared/ui/modal/Confirm";

const ButtonDiv = styled.div`
  position: fixed;
  bottom: 86px;
  left: 35%;
`;

function BottomDialog() {
  // disable일때 아닐때, confirm창나올때
  return (
    <>
      {/* <ButtonDiv>
        <Button
          text="총 2개 삭제"
          type="point"
          style="square"
          scale="large"
        ></Button>
      </ButtonDiv> */}
      <Confirm
        title1="모든 임시 저장 글이 사라집니다. "
        title2="삭제하시겠습니까?"
      ></Confirm>
    </>
  );
}

export default BottomDialog;

import React, { useState } from "react";
import Header from "./header/Header";
import styled from "styled-components";
import LightMode from "@/shared/assets/img/menu/lightmode.svg";
import BlackMode from "@/shared/assets/img/menu/darkmode.svg";
import Check from "@/shared/ui/check/check";
import color from "@/shared/styles/color";
import { ColorToast } from "@/shared/ui/toast";

const Layout = styled.nav`
  width: 93%;
`;
const Contents = styled.div`
  width: 100%;
  display: flex;
  padding-top: 70px;
  justify-content: center;
`;
const Card = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 0 80px;
`;
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
const ToastContainer = styled.div`
  position: fixed;
  top: 55%;
  left: 60%;
  z-index: 800;
`;
function DisplaySettings({
  handleCloseComponent,
}: {
  handleCloseComponent: () => void;
}) {
  const [modeData, setModeData] = useState([
    {
      title: "라이트모드",
      checked: false,
      img: <LightMode />,
    },
    {
      title: "블랙모드",
      checked: true,
      img: <BlackMode />,
    },
  ]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const handleIndividualCheck = (key: string) => {
    if (key === "라이트모드") {
      setIsShowToast(true);
      setToastText("준비중 입니다.");
    } else {
      setModeData((prev) =>
        prev.map((item) =>
          item.title === key
            ? { ...item, checked: !item.checked }
            : { ...item, checked: false }
        )
      );
    }
  };
  return (
    <Layout>
      <Header title="화면 설정" handleClose={handleCloseComponent} />
      <ToastContainer>
        <ColorToast
          text={toastText}
          onClose={() => {
            setIsShowToast(false);
          }}
          isShowToast={isShowToast}
          type={"normal"}
        />
      </ToastContainer>
      <Contents>
        {modeData.map((item) => (
          <Card
            onClick={() => {
              handleIndividualCheck(item.title);
            }}
          >
            {item.img}
            <Span>{item.title}</Span>
            <Check check={item.checked} type="circle" setCheck={() => {}} />
          </Card>
        ))}
      </Contents>
    </Layout>
  );
}

export default DisplaySettings;

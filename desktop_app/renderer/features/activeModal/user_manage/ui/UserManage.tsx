import { useEffect, useState } from "react";
import DefaultLayout from "../../ui/DefaultLayout";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { useStore } from "@/shared/store";
import Cookies from "js-cookie";
import WhiteArrow from "@/shared/assets/img/white_arrow.svg";
import { BottomSheet } from "@/shared/ui/modal";
import { DarkBackground } from "@/shared/ui/background";
import { Button } from "@/shared/ui/button";
import { handleLogout } from "@/shared/lib/auth";
import { useRouter } from "next/router";
import WithDrawModal from "./withdraw/WithDrawModal";

const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: fixed;
  left: 315px;
  top: 35px;
`;
const ContentsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 818px;
  margin-top: 41px;
`;
const H2 = styled.h2`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  padding: 20px;
`;
const TabLayout = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  gap: 10px;
  svg {
    cursor: pointer;
  }
`;
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: 705px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const P = styled.p`
  color: #5d5d5d;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const ModalText = styled.p`
  height: 48px;
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 49px;
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding-top: 32px;
`;
function UserManage({
  modalHandler,
}: {
  modalHandler: (name: string) => void;
}) {
  const user = useStore((state) => state.user);
  const [isOauth, setIsOauth] = useState<string | null>(null);
  const [isShowLogout, setShowLogout] = useState(false);
  const [isShowWithDrawer, setShowWithDrawer] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const oauthValue =
      Cookies.get("isOauth") || sessionStorage.getItem("isOauth");
    setIsOauth(oauthValue);
  }, []);

  const submodalHandler = (name: string) => {
    if (name === "logout") {
      setShowLogout((prev) => !prev);
    }
    if (name === "withdraw") {
      setShowWithDrawer((prev) => !prev);
    }
  };

  return (
    <DefaultLayout modalHandler={modalHandler} name="manage">
      <H1>계정 관리</H1>
      {isShowLogout && (
        <DarkBackground>
          <BottomSheet isOpen={true} size="middle">
            <ModalText>로그아웃하시겠습니까?</ModalText>
            <BtnDiv>
              <Button
                text="취소"
                scale="small"
                type="disable"
                onClick={() => {
                  submodalHandler("logout");
                }}
              />
              <Button
                text="확인"
                scale="small"
                onClick={() => {
                  handleLogout();
                  router.push("/web/login");
                }}
              />
            </BtnDiv>
          </BottomSheet>
        </DarkBackground>
      )}
      {isShowWithDrawer && <WithDrawModal submodalHandler={submodalHandler} />}

      <ContentsContainer>
        <Wrapper>
          <H2>로그인 정보</H2>
          <TabLayout>
            <Span>
              이메일 주소 {isOauth === "yes" ? "" : "변경"}
              <P>{user?.email}</P>
            </Span>
            {isOauth !== "yes" && <WhiteArrow />}
          </TabLayout>
          {isOauth !== "yes" && (
            <TabLayout>
              <Span>비밀번호 변경</Span>
              <WhiteArrow />
            </TabLayout>
          )}
          <TabLayout>
            <Span>로그아웃</Span>
            <WhiteArrow
              onClick={() => {
                submodalHandler("logout");
              }}
            />
          </TabLayout>
          <TabLayout>
            <Span>탈퇴하기</Span>
            <WhiteArrow
              onClick={() => {
                submodalHandler("withdraw");
              }}
            />
          </TabLayout>
        </Wrapper>
      </ContentsContainer>
    </DefaultLayout>
  );
}

export default UserManage;

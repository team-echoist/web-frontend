import React, { useState } from "react";
import styled from "styled-components";
import DefaultLayout from "@/features/activeModal/ui/DefaultLayout";
import color from "@/shared/styles/color";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { putUserInfo } from "@/shared/api/user";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ColorToast } from "@/shared/ui/toast";

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
const Layout = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;
const Title = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const Wrapper = styled.div`
  width: 818px;
  height: 764px;
  display: flex;
  flex-direction: column;
  gap: 43px;
  margin-top: 62px;
`;
const ContentItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const BtnDiv = styled.div`
  margin-top: 122px;
`;
const ErrorMsg = styled.p`
  color: ${color.red};
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
type PasswordData = {
  password: { value: string; error: boolean };
  changePassword: { value: string; error: boolean };
};
const ToastContainer = styled.div`
  position: fixed;
  bottom: 135px;
  left: 43%;
  z-index: 50;
`;
function ChangePassword({
  submodalHandler,
}: {
  submodalHandler: (name: string) => void;
}) {
  const [passwordData, setPasswordData] = useState<PasswordData>({
    password: { value: "", error: false },
    changePassword: { value: "", error: false },
  });
  const [isShowToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const router = useRouter();
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => {
      const updatedData: PasswordData = { ...prev };

      // 비밀번호 유효성 검사 (영문, 특수문자, 숫자 포함 8~12자)
      if (name === "password") {
        const passwordValid =
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/.test(
            value
          );
        updatedData.password = { value, error: !passwordValid };
      }

      if (name === "changePassword") {
        const passwordsMatch = value === updatedData.password.value;
        updatedData.changePassword = { value, error: !passwordsMatch };
      }

      return updatedData;
    });
  };
  const fetchChangePassword = async () => {
    try {
      const body = {
        password: passwordData.password.value,
      };
      const { status } = await putUserInfo(body);
      if (status === 200 || status === 201) {
        setToastText("비밀번호 변경이 완료 되었습니다.");
        setShowToast(true);
        setTimeout(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("isOauth");
          sessionStorage.removeItem("accessToken");
          sessionStorage.removeItem("refreshToken");
          sessionStorage.removeItem("isOauth");
          router.push("/web/login");
        }, 3000);
      } else {
        setToastText("입력값을 확인해 주세요.");
        setShowToast(true);
      }
    } catch (Err) {
      setToastText("입력값을 확인해 주세요.");
      setShowToast(true);
      console.log("err", Err);
    }
  };
  return (
    <DefaultLayout
      modalHandler={submodalHandler}
      isSubModal={true}
      name="changePassword"
    >
      <ToastContainer>
        <ColorToast
          text={toastText}
          onClose={() => {
            setShowToast(false);
          }}
          isShowToast={isShowToast}
          type={toastText.includes("완료") ? "normal" : "alert"}
        />
      </ToastContainer>
      <Layout>
        <H1>비밀번호 변경</H1>
        <Wrapper>
          <ContentItemDiv>
            <Title>새 비밀번호</Title>
            <Input
              placeholder="새 비밀번호를 입력해주세요."
              name="password"
              width={758}
              value={passwordData.password.value}
              error={passwordData.password.error}
              onChange={handlePassword}
            />
            {passwordData.password.error && (
              <ErrorMsg>
                *비밀번호는 영문 대소문자, 특수문자, 숫자 포함 8~12자를 조합해 주세요.
              </ErrorMsg>
            )}
          </ContentItemDiv>
          <ContentItemDiv>
            <Title>새 비밀번호 확인</Title>
            <Input
              placeholder="새 비밀번호를 다시 입력해주세요."
              name="changePassword"
              width={758}
              value={passwordData.changePassword.value}
              error={passwordData.changePassword.error}
              onChange={handlePassword}
            />
            {passwordData.changePassword.error && (
              <ErrorMsg>*비밀번호가 일치하지 않습니다.</ErrorMsg>
            )}
          </ContentItemDiv>
          <BtnDiv>
            <Button
              text="변경하기"
              scale="max"
              type={
                passwordData.password.value.length !== 0 &&
                passwordData.changePassword.value.length !== 0 &&
                passwordData.password.value ===
                  passwordData.changePassword.value
                  ? "point"
                  : "disable"
              }
              onClick={
                passwordData.password.value.length !== 0 &&
                passwordData.changePassword.value.length !== 0 &&
                passwordData.password.value ===
                  passwordData.changePassword.value
                  ? fetchChangePassword
                  : undefined
              }
            />
          </BtnDiv>
        </Wrapper>
      </Layout>
    </DefaultLayout>
  );
}

export default ChangePassword;

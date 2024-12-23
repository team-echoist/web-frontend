import React, { useId, useState } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { GeneralToast } from "@/shared/ui/toast";
import { resetPassword } from "@/shared/api/user";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ColorToast } from "@/shared/ui/toast";
import { PrevButton } from "@/shared/ui/button";

const DefaultLayout = styled.div`
  width: 98vw;
  position: fixed;
  top: 32px;
  left: 10px;
  background: ${color.darkgray};
  z-index: 2000;
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  // width: 818px;
  // height: 764px;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 5px;
`;

const ErrorMsg = styled.p`
  color: ${color.red};
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  margin-top: 8px;
`;
const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: fixed;
  left: 70px;
  top: 32px;
`;
const BtnDiv = styled.div`
  margin-top: 447px;
`;
const InputDiv = styled.div`
  margin-top: 10px;
`;
const ToastContainer = styled.div`
  position: fixed;
  bottom: 135px;
  left: 43%;
  z-index: 50;
`;
function ResetPassword({
  modalHandler,
}: {
  modalHandler: (name: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isShowToast, setShowToast] = useState(false);
  const [isShowColorToast, setShowColorToast] = useState(false);
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };

  const fetchResetPassword = async () => {
    try {
      const { status } = await resetPassword(email);
      if (status === 200 || status === 201) {
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
        setShowColorToast(true);
      }
    } catch (Err) {
      console.log(Err);
    }
  };

  return (
    <DefaultLayout>
      <PrevButton
        onClick={() => {
          modalHandler("resetPassword");
        }}
      ></PrevButton>
      <H1>비밀번호 재설정</H1>
      <GeneralToast
        title="입력하신 이메일 주소로 임시 비밀번호가 발송됐습니다."
        desc="임시 비밀번호로 로그인 후, 비밀번호를 변경하세요."
        isShowToast={isShowToast}
        setIsShowToast={setShowToast}
        width={502}
      />
      <ToastContainer>
        <ColorToast
          text="이메일을 확인해 주세요."
          onClose={() => {
            setShowColorToast(false);
          }}
          isShowToast={isShowColorToast}
          type="alert"
        />
      </ToastContainer>
      <Layout>
        <Wrapper>
          <Span>가입 시 사용한 이메일 주소를 입력해주세요.</Span>
          <Span>비밀번호를 다시 설정할 수 있는 링크를 보내드릴게요.</Span>
          <InputDiv>
            <Input
              placeholder="이메일"
              name="email"
              width={758}
              onChange={handleEmailChange}
            />
          </InputDiv>
          {!isEmailValid && email.length > 0 && (
            <ErrorMsg>*잘못 입력된 이메일 형식입니다.</ErrorMsg>
          )}

          <BtnDiv>
            <Button
              text="이메일 보내기"
              scale="max"
              type={!isEmailValid ? "disable" : "point"}
              onClick={fetchResetPassword}
            />
          </BtnDiv>
        </Wrapper>
      </Layout>
    </DefaultLayout>
  );
}

export default ResetPassword;

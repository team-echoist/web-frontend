import React, { useState } from "react";
import DefaultLayout from "@/features/activeModal/ui/DefaultLayout";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { useStore } from "@/shared/store";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Verification } from "@/features/check_verification_code";
import { postVerifyEmail } from "@/shared/api/user";
import { changeEmail } from "@/shared/api/user";
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
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 13px;
`;
const Layout = styled.article`
  width: 80%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.section`
  width: 818px;
  height: 764px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const EmailText = styled.p`
  color: #5d5d5d;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 33px;
`;
const GrayText = styled.p`
  color: #5d5d5d;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 10px;
`;
const Strong = styled.strong`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Ul = styled.ul`
  padding: 17px 18px;
  margin-bottom: 52px;
`;

const Li = styled.li`
  color: #5d5d5d;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;
const WhitePoint = styled.strong`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const ToastContainer = styled.div`
  position: fixed;
  bottom: 135px;
  left: 43%;
  z-index: 50;
`;

function ChangeEmail({
  submodalHandler,
}: {
  submodalHandler: (name: string) => void;
}) {
  const user = useStore((state) => state.user);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isShowVerification, setShowVerification] = useState(false);
  const [toastText, setToastText] = useState("");
  const [isError, setError] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };
  const toastHandler = (text: string, isError: boolean) => {
    setIsShowToast(true);
    setToastText(text);
    setError(isError);
    if (isError) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const fetchVerifyEmail = async () => {
    try {
      const { status } = await postVerifyEmail(email);
      if (status === 200 || status === 201) {
        setShowVerification(true);
      }else{
        toastHandler("사용중인 이메일 입니다.",true)
      }
    } catch (Err) {
      toastHandler("사용중인 이메일 입니다.",true)
      console.log(Err);
    }
  };
  const fetchChangeEmail = async (code: string) => {
    try {
      const { status } = await changeEmail(code);
      return status;
    } catch (Err) {
      console.log(Err);
      return 500;
    }
  };

  return (
    <DefaultLayout
      modalHandler={submodalHandler}
      isSubModal={true}
      name="changeEmail"
    >
      {isShowVerification && (
        <Verification
          isShowModal={isShowVerification}
          setShowVerification={setShowVerification}
          fetchData={fetchChangeEmail}
          onRetry={fetchVerifyEmail}
        />
      )}
      <ToastContainer>
        <ColorToast
          text={toastText}
          onClose={() => {
            setIsShowToast(false);
          }}
          isShowToast={isShowToast}
          type={isError ? "alert" : "normal"}
        />
      </ToastContainer>
      <H1>이메일 주소 변경</H1>
      <Layout>
        <Wrapper>
          <Span>현재 이메일 주소</Span>
          <EmailText>{user?.email}</EmailText>
          <Span>새 이메일 주소</Span>
          <Input
            width={758}
            placeholder="이메일"
            name="email"
            onChange={handleEmailChange}
          />
          <GrayText>
            새 이메일 주소를 올바르게 입력한 후
            <Strong>아래의 '인증하기' 버튼</Strong>을 눌러 해당 이메일로 인증을
            완료해주세요.
          </GrayText>
          <Ul>
            <Li>
              바꾼 이메일로 발송된 <WhitePoint>인증번호를 입력</WhitePoint>해야
              로그인 할 수 있어요.
            </Li>
            <Li>
              이메일 주소를 바꾸면 보안을 위해 모든 기기와 브라우저에서
              <WhitePoint>자동 로그인</WhitePoint>이 해제돼요.
            </Li>
          </Ul>
          <Button
            text="인증번호 전송"
            scale="max"
            type={!isEmailValid ? "disable" : "point"}
            onClick={fetchVerifyEmail}
          />
        </Wrapper>
      </Layout>
    </DefaultLayout>
  );
}

export default ChangeEmail;

import React, { useEffect, useState } from "react";
import { PrevButton } from "@/shared/ui/button";
import DefaultLayout from "../../ui/layout/defaultLayout";
import TextField from "../../ui/contents/textfield";
import InputField from "../../ui/contents/inputfield";
import Check from "@/shared/ui/check/check";
import styled from "styled-components";
import color from "@/shared/styles/color";
import ButtonFieldLayout from "../../ui/layout/buttonFieldLayout";
import { Button } from "@/shared/ui/button";
import SocialLoginField from "./content/SocialLoginField";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { checkFirstLogin, localLogin } from "../api";
import { GeneralToast } from "@/shared/ui/toast";
import { useRouter } from "next/navigation";

const CheckboxContainer = styled.fieldset`
  display: flex;
  align-items: center;
  position: absolute;
  top: 385px;
`;

const P = styled.p<{ $loginCheck: boolean }>`
  color: ${({ $loginCheck }) => ($loginCheck ? color.pointcolor : "#484848")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
const Nav = styled.nav`
  width: 100%;
  padding-top: 24px;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 26px;
`;
const Li = styled.li`
  list-style-type: none;
  color: #919191;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  text-decoration-line: underline;
  cursor: pointer;
`;

export const Login = () => {
  const [infoData, setInfoData] = useState({
    id: { value: "", placeholder: "이메일 주소 또는 아이디" },
    password: { value: "", placeholder: "비밀번호" },
  });
  const [autoLoginCheck, setAutoLoginCheck] = useState(false);
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const isValidButton =
    infoData.id.value.length > 0 && infoData.password.value.length > 0;

  useEffect(() => {
    if (token) {
      checkUser(token);
    }
  }, [token]);

  const checkUser = async (token: string) => {
    try {
      const statusCode = await checkFirstLogin(token);
      if (statusCode === 205) {
        setIsFirstLogin(true);
      }
    } catch (err) {
      console.log("Err", err);
    }
  };


  const submitLogin = async () => {
    setIsShowToast(false);
    const body = {
      email: infoData.id.value,
      password: infoData.password.value,
    };
    try {
      const statusCode = await localLogin(body);
      if (statusCode === 200 || statusCode === 201) {
        //메인페이지
        router.push("/web/main");
      }
      if (statusCode === 205) {
        //컴플리트
        router.push("/web/complete");
      }
      if (isFirstLogin) {
        //컴플리트
        router.push("/web/complete");
      }
    } catch (err) {
      console.log("err", err);
      if (err) {
        setIsShowToast(true);
      }
    }
  };

  return (
    <DefaultLayout>
      <PrevButton />
      {isShowToast && (
        <GeneralToast
          title="로그인에 실패 했습니다."
          desc="아이디와 비밀번호를 확인해주세요."
          isShowToast={isShowToast}
          setIsShowToast={setIsShowToast}
        />
      )}

      <TextField
        title="안녕하세요!"
        title2="링크드아웃에 오신 것을 환영합니다."
      />
      <InputField data={infoData} setData={setInfoData} />
      <CheckboxContainer>
        <Check
          check={autoLoginCheck}
          setCheck={setAutoLoginCheck}
          type="general"
        />
        <P $loginCheck={autoLoginCheck}>자동로그인</P>
      </CheckboxContainer>
      <ButtonFieldLayout>
        <Button
          text="로그인"
          style="square"
          scale="large"
          type={isValidButton ? "point" : "disable"}
          onClick={isValidButton ? submitLogin : undefined}
        />
        <Nav>
          <Ul>
            <Li>아이디 찾기</Li>
            <Li>비밀번호 재설정</Li>
            <Link href="/web/signup">
              <Li>회원가입</Li>
            </Link>
          </Ul>
        </Nav>
        <SocialLoginField />
      </ButtonFieldLayout>
    </DefaultLayout>
  );
};

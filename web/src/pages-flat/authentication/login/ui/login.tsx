import React, { useState } from "react";
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
`;

export const Login = () => {
  const [infoData, setInfoData] = useState({
    id: { value: "", placeholder: "이메일 주소 또는 아이디" },
    password: { value: "", placeholder: "비밀번호" },
  });
  const [loginCheck, setLoginCheck] = useState(false);
  return (
    <DefaultLayout>
      <PrevButton />
      <TextField
        title="안녕하세요!"
        title2="링크드아웃에 오신 것을 환영합니다."
      />
      <InputField data={infoData} setData={setInfoData} />
      <CheckboxContainer>
        <Check check={loginCheck} setCheck={setLoginCheck} />
        <P $loginCheck={loginCheck}>자동로그인</P>
      </CheckboxContainer>
      <ButtonFieldLayout>
        <Button text="로그인" style="square" scale="large" type="point" />
        <Nav>
          <Ul>
            <Li>아이디 찾기</Li>
            <Li>비밀번호 재설정</Li>
            <Li>회원가입</Li>
          </Ul>
        </Nav>
        <SocialLoginField />
      </ButtonFieldLayout>
    </DefaultLayout>
  );
};

import DefaultLayout from "../../ui/layout/defaultLayout";
import { PrevButton } from "@/shared/ui/button";
import TextField from "../../ui/contents/textfield";
import { useState } from "react";
import InputField from "../../ui/contents/inputfield";
import CheckField from "./contents/checkField";
import { Button } from "@/shared/ui/button";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const ButtonLayout = styled.div`
  position: absolute;
  top: 684px;
`;

function SignUP() {
  const router =useRouter();
  const [inputData, setinputData] = useState({
    id: { value: "", placeholder: "이메일 주소 또는 아이디" },
    password: { value: "", placeholder: "비밀번호" },
  });

  const [check, setCheck] = useState({
    allCheck: false,
    service: {
      desc: "(필수) 서비스 이용약관 동의",
      checked: false,
      required: true,
    },
    personal: {
      desc: "(필수) 개인정보 수집 및 이용 동의",
      checked: false,
      required: true,
    },
    age: {
      desc: "(필수) 만 14세 이상입니다",
      checked: false,
      required: true,
    },
    marketing: {
      desc: "(선택) 마케팅 정보 수신 동의",
      checked: false,
      required: false,
    },
  });

  const submitSignupForm = () =>{
    router.push("/linkedout/complete")
  }

  return (
    <DefaultLayout>
      <PrevButton />
      <TextField
        title="이메일로 가입하기"
        desc="회원 서비스 이용을 위해 회원가입을 해주세요."
      />
      <InputField
        data={inputData}
        setData={setinputData}
        isValidateText={true}
      />
      <CheckField check={check} setCheck={setCheck} />
      <ButtonLayout>
        <Button text="회원가입" style="square" scale="large" type="disable" onClick={submitSignupForm} />
        {/* 필수값 채워지면 타입 바뀌게끔 로직 바꾸기 */}
      </ButtonLayout>
    </DefaultLayout>
  );
}

export default SignUP;

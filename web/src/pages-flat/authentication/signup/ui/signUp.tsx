import DefaultLayout from "../../ui/layout/defaultLayout"
import { PrevButton } from "@/shared/ui/button";
import TextField from "../../ui/contents/textfield";
import { useState } from "react";
import InputField from "../../ui/contents/inputfield";

function SignUP() {
  const [signupData,setSignupData] =useState({
    id: { value: "", placeholder: "이메일 주소 또는 아이디" },
    password: { value: "", placeholder: "비밀번호" },
  })
  return (
    <DefaultLayout>
      <PrevButton />
      <TextField title="이메일로 가입하기" desc="회원 서비스 이용을 위해 회원가입을 해주세요."/>
      <InputField data={signupData} setData={setSignupData} isValidateText={true}/>
    </DefaultLayout>
  )
}

export default SignUP
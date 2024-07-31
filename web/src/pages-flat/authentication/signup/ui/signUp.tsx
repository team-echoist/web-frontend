import DefaultLayout from "../../ui/layout/defaultLayout";
import { PrevButton } from "@/shared/ui/button";
import TextField from "../../ui/contents/textfield";
import { useState, useEffect } from "react";
import InputField from "../../ui/contents/inputfield";
import CheckField from "./contents/checkField";
import { Button } from "@/shared/ui/button";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { submitSignupForm } from "../api";
import { GeneralToast } from "@/shared/ui/toast";

const ButtonLayout = styled.div`
  position: absolute;
  top: 684px;
`;

interface InputData {
  id: { value: string; placeholder: string };
  password: { value: string; placeholder: string };
}

interface CheckItem {
  desc: string;
  checked: boolean;
  required: boolean;
}

interface CheckState {
  allCheck: boolean;
  service: CheckItem;
  personal: CheckItem;
  age: CheckItem;
  marketing: CheckItem;
}

const validateInput = (input: string, regex: RegExp): boolean => {
  return regex.test(input);
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

const isButtonEnabled = (check: CheckState, inputData: InputData): boolean => {
  const requiredChecks = [check.service, check.personal, check.age];
  const allRequiredChecked = requiredChecks.every((item) => item.checked);
  const isEmailValid = validateInput(inputData.id.value, emailRegex);

  const isPasswordValid = validateInput(
    inputData.password.value,
    passwordRegex
  );

  const inputDataValid = isEmailValid && inputData.password.value.length > 0;

  return (
    (check.allCheck || allRequiredChecked) && inputDataValid && isPasswordValid
  );
};

function SignUP() {
  const [inputData, setinputData] = useState({
    id: { value: "", placeholder: "이메일 주소 또는 아이디" },
    password: { value: "", placeholder: "비밀번호" },
  });
  const isEmailValid = validateInput(inputData.id.value, emailRegex);
  const isPasswordValid = validateInput(
    inputData.password.value,
    passwordRegex
  );
  const [error, setError] = useState({
    id: false,
    password: false,
  });
  const [isShowToast, setIsShowToast] = useState(false);
  const [isButtonEnabledState, setIsButtonEnabled] = useState(false);
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
  const [toastText, setToastText] = useState({
    title: "입력하신 이메일 주소로 인증 메일이 발송됐습니다.",
    desc: "링크를 클릭해 인증을 완료해주세요.",
  });

  useEffect(() => {
    setIsButtonEnabled(isButtonEnabled(check, inputData));
  }, [check, inputData]);

  const onSubmit = async () => {
    setIsShowToast(false);
    if (!isEmailValid) {
      setError((prev) => ({
        ...prev,
        id: true,
      }));
    }
    if (!isPasswordValid) {
      setError((prev) => ({
        ...prev,
        password: true,
      }));
    }

    if (!isButtonEnabledState) {
      return;
    }
    const email = inputData.id.value;
    const password = inputData.password.value;
    const body = {
      email: email,
      password: password,
    };
    try {
      const statusCode = await submitSignupForm(body);
      if (statusCode === 201) {
        setIsShowToast(true);
        setIsButtonEnabled(false);
      }
    } catch (err) {
      if (err) {
        setIsShowToast(true);
        setToastText({
          title: "이메일 인증에 실패했습니다 :( ",
          desc: "다시 시도해주세요.",
        });
      }
    }
  };
  return (
    <DefaultLayout>
      <GeneralToast
        title={toastText.title}
        desc={toastText.desc}
        isShowToast={isShowToast}
        setIsShowToast={setIsShowToast}
      />
      <PrevButton />
      <TextField
        title="이메일로 가입하기"
        desc="회원 서비스 이용을 위해 회원가입을 해주세요."
      />
      <InputField
        data={inputData}
        setData={setinputData}
        isValidateText={true}
        error={error}
      />
      <CheckField check={check} setCheck={setCheck} />
      <ButtonLayout>
        <Button
          text="회원가입"
          style="square"
          scale="large"
          type={isButtonEnabledState ? "point" : "disable"}
          onClick={onSubmit}
        />
      </ButtonLayout>
    </DefaultLayout>
  );
}

export default SignUP;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { SmallInput } from "@/shared/ui/input";

const RectangleDiv = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Rectangle = styled.div`
  width: 40px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #8a8a8a;
`;
const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  padding-left: 31px;
  padding-top: 10px;
`;
const P = styled.p`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  padding-left: 31px;
  margin-top: 6px;
`;
const InputDiv = styled.div`
  width: 100%;
  padding-top: 41px;
  padding-left: 31px;
  display: flex;
  gap: 7px;
`;
const H2 = styled.h2`
  color: #6b6b6b;
  font-family: Abel;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
const RetryDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 45px;
`;
const Button = styled.button`
  background: none;
  border: none;
  color: ${color.pointcolor};
  font-family: Abel;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  text-decoration-line: underline;
`;
function VerificationField() {
  const [inputValues, setInputValues] = useState<string[]>(Array(6).fill(""));
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = e.target.value;
      setInputValues(newInputValues);
    };
  useEffect(() => {
    const isComplete = inputValues.every((value) => value.length === 1);
    if (isComplete) {
      console.log("확인");
      //   const timer = setTimeout(async () => {
      //     try {
      //       const response = await callVerificationAPI(inputValues.join(""));
      //       if (response.status !== 200) {
      //         setHasError(true);
      //         setErrorMessage(*인증번호를 잘못 입력하셨습니다.);
      //       } else {
      //         setHasError(false);
      //         setErrorMessage("");
      //       }
      //     } catch (error) {
      //       setHasError(true);
      //       setErrorMessage(
      //         "서버와의 연결에 문제가 발생했습니다. 다시 시도해 주세요."
      //       );
      //     }
      //   }, 2000);

      //   return () => clearTimeout(timer);
    }
  }, [inputValues]);
  return (
    <>
      <RectangleDiv>
        <Rectangle />
      </RectangleDiv>
      <H1>인증번호 입력하기</H1>
      <P>이메일로 인증번호 6자리를 보내드렸어요.</P>
      <InputDiv>
        {inputValues.map((value, index) => (
          <SmallInput
            type="number"
            key={index}
            value={value}
            onChange={handleChange(index)}
            hasError={hasError}
            disabled={index > 0 && !inputValues[index - 1]}
          />
        ))}
      </InputDiv>
      <RetryDiv>
        <H2>인증번호를 못 받으셨나요?</H2>
        <Button>인증번호 재전송</Button>
      </RetryDiv>
    </>
  );
}

export default VerificationField;

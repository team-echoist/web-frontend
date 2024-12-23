import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BottomSheet } from "@/shared/ui/modal";
import color from "@/shared/styles/color";
import { SmallInput } from "@/shared/ui/input";
import { GeneralToast } from "@/shared/ui/toast";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Layout = styled.div`
  width: 100%;
  height: 97vh;
  z-index: 2000;
  position: fixed;
  top: 32px;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
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
  margin-top: 32px;
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
  //   justify-content: center;
  gap: 7px;
  margin-bottom: 7px;
`;
const ErrorMsg = styled.output`
  color: ${color.red};
  font-family: Abel;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  padding-left: 31px;
  margin-top: 7px;
`;
const RetryDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 45px;
`;
const H2 = styled.h2`
  color: #6b6b6b;
  font-family: Abel;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
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
  cursor: pointer;
`;
const ModalDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //   align-items: center;
`;
function Verification({
  isShowModal,
  setShowVerification,
  fetchData,
  onRetry,
}: {
  isShowModal: boolean;
  setShowVerification: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: (code: string) => Promise<number>;
  onRetry: () => void;
}) {
  const [inputValues, setInputValues] = useState<string[]>(Array(6).fill(""));
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [toastText, setToastText] = useState({
    title: "입력하신 이메일 주소로 인증 메일이 발송됐습니다.",
    desc: "인증 번호를 입력해 설정을 완료해주세요.",
  });
  const router = useRouter();
  useEffect(() => {
    const isComplete = inputValues.every((value) => value.length === 1);
    if (isComplete) {
      const timer = setTimeout(async () => {
        try {
          const status = await fetchData(inputValues.join(""));
          if (status === 201 || status === 200) {
            setTimeout(()=>{
              setHasError(false);
              setErrorMessage("");
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              localStorage.removeItem("isOauth");
              sessionStorage.removeItem("accessToken");
              sessionStorage.removeItem("refreshToken");
              sessionStorage.removeItem("isOauth");
              router.push("/web/login");
            },3000)
          } else {
            setHasError(true);
            setErrorMessage("인증번호를 잘못 입력하셨습니다.");
          }
        } catch (error) {
          setHasError(true);
          setErrorMessage(
            "서버와의 연결에 문제가 발생했습니다. 다시 시도해 주세요."
          );
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inputValues]);
  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = e.target.value;
      setInputValues(newInputValues);
      if (e.target.value.length === 1 && index < 5) {
        const nextInput = document.getElementById(`input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    };
  const onRetryHandler = async () => {
    setInputValues(Array(6).fill(""));
    await onRetry();
  };

  return (
    <Layout>
      <GeneralToast
        title={toastText.title}
        desc={toastText.desc}
        isShowToast={isShowModal}
        setIsShowToast={setShowVerification}
        positionTop={hasError ? "" : "45.4vh"}
      />
      <BottomSheet isOpen={isShowModal}>
        <ModalDiv>
          <H1>인증번호 입력하기</H1>
          <P>이메일로 인증번호 6자리를 보내드렸어요.</P>
          <InputDiv>
            {inputValues.map((value, index) => (
              <SmallInput
                id={`input-${index}`}
                key={index}
                value={value}
                onChange={handleChange(index)}
                hasError={hasError}
                disabled={index > 0 && !inputValues[index - 1]}
              />
            ))}
          </InputDiv>
          <ErrorMsg>{errorMessage}</ErrorMsg>
          <RetryDiv>
            <H2>인증번호를 못 받으셨나요?</H2>
            <Button onClick={() => onRetryHandler()}>인증번호 재전송</Button>
          </RetryDiv>
        </ModalDiv>
      </BottomSheet>
    </Layout>
  );
}

export default Verification;

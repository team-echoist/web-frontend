import React, { useId, useState } from "react";
import DefaultLayout from "@/features/activeModal/ui/DefaultLayout";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

const Layout = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 818px;
  height: 764px;
  display: flex;
  flex-direction: column;
`;
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const ItemDiv = styled.div`
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ErrorMsg = styled.p`
  color: ${color.red};
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
function ChangePassword({
  submodalHandler,
}: {
  submodalHandler: (name: string) => void;
}) {
  const [passwordData, setPasswordData] = useState([
    {
      value: "",
      placeholder: "새 비밀번호를 입력해주세요.",
      title: "새 비밀번호",
      name: "password",
    },
    {
      value: "",
      placeholder: "새 비밀번호를 다시 입력해주세요.",
      title: "새 비밀번호 확인",
      name: "passwordChk",
    },
  ]);
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prevData) =>
      prevData.map((field) =>
        field.name === name ? { ...field, value } : field
      )
    );
    if (name === "password") {
      const isValid =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(
          value
        );
      setIsPasswordValid(isValid);
    }
    if (name === "password" || name === "passwordChk") {
      const password = name === "password" ? value : passwordData[0].value;
      const passwordChk =
        name === "passwordChk" ? value : passwordData[1].value;

      setIsPasswordMatched(password === passwordChk);
    }
  };
  return (
    <DefaultLayout
      modalHandler={submodalHandler}
      isSubModal={true}
      name="changepassword"
    >
      <Layout>
        <Wrapper>
          {passwordData.map((item) => (
            <ItemDiv key={item.name}>
              <Span>{item.title}</Span>
              <Input
                width={758}
                placeholder={item.placeholder}
                name={item.name}
                onChange={handleChange}
                error={
                  item.name === "password" && item.value.length !== 0
                    ? !isPasswordValid
                    : item.name === "passwordChk" && item.value.length !== 0
                    ? !isPasswordMatched
                    : false
                }
              />
              {/* 비밀번호 유효성 검사 메시지 */}
              {item.name === "password" &&
                !isPasswordValid &&
                item.value.length > 0 && (
                  <ErrorMsg>
                    * 비밀번호는 영문, 숫자, 특수문자를 포함한 8~12자여야
                    합니다.
                  </ErrorMsg>
                )}
              {/* 비밀번호 확인 메시지 */}
              {item.name === "passwordChk" &&
                !isPasswordMatched &&
                item.value.length > 0 && (
                  <ErrorMsg>* 비밀번호가 일치하지 않습니다.</ErrorMsg>
                )}
            </ItemDiv>
          ))}
          <ItemDiv>
            <Button
              text="변경하기"
              scale="max"
              type={
                isPasswordMatched === false || isPasswordValid === false
                  ? "disable"
                  : "point"
              }
            />
          </ItemDiv>
        </Wrapper>
      </Layout>
    </DefaultLayout>
  );
}

export default ChangePassword;

import React, { Dispatch, SetStateAction } from "react";
import { Input } from "@/shared/ui/input";
import styled from "styled-components";
import { useId } from "react";

const P = styled.p`
  color: #616fed;
  font-family: Abel;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  padding-left: 17px;
`;

const Layout = styled.section`
  width: 100%;
  position: absolute;
  top: 251px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const ErrorMsg = styled.p`
  color: #e43446;
  font-family: Abel;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;

type FormField = {
  value: string;
  placeholder: string;
};

type FormData = {
  id: FormField;
  password: FormField;
};
type ErrorType = {
  id: boolean;
  password: boolean;
};

interface InputFieldProps {
  data: FormData;
  setData: Dispatch<SetStateAction<FormData>>;
  isValidateText?: boolean;
  error?: ErrorType;
}

// 유효성 검사: 비밀번호는 영문, 특수문자, 숫자 포함 8~12자를 조합해 주세요.
const InputField: React.FC<InputFieldProps> = ({
  data,
  setData,
  isValidateText,
  error,
}) => {
  const id = useId();

  return (
    <Layout>
      {Object.keys(data).map((key) => (
        <React.Fragment key={key+id}>
          <Input
            key={key+`${id}`}
            name={key as keyof FormData}
            placeholder={data[key as keyof FormData].placeholder}
            setState={setData}
            error={error && error[key as keyof ErrorType]}
          />
          {error && error[key as keyof ErrorType] && key === "id" && (
            <ErrorMsg>이메일을 확인해주세요.</ErrorMsg>
          )}
          {error && error[key as keyof ErrorType] && key === "password" && (
            <ErrorMsg>
              비밀번호는 영문, 특수문자, 숫자 포함 8~12자를 조합해 주세요.
            </ErrorMsg>
          )}
        </React.Fragment>
      ))}

      {isValidateText && !error?.password ? (
        <P>비밀번호는 영문, 특수문자, 숫자 포함 8~12자를 조합해 주세요.</P>
      ) : null}
    </Layout>
  );
};

export default InputField;

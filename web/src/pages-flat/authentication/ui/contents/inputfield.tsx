import React, { Dispatch, SetStateAction } from "react";
import { Input } from "@/shared/ui/input";
import styled from "styled-components";

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

type FormField = {
  value: string;
  placeholder: string;
};

type FormData = {
  id: FormField;
  password: FormField;
};

interface InputFieldProps {
  data: FormData;
  setData: Dispatch<SetStateAction<FormData>>;
  isValidateText?: boolean;
}

// 유효성 검사: 비밀번호는 영문, 특수문자, 숫자 포함 8~12자를 조합해 주세요.
const InputField: React.FC<InputFieldProps> = ({
  data,
  setData,
  isValidateText,
}) => {
  return (
    <Layout>
      {Object.keys(data).map((key) => (
        <Input
          key={key}
          name={key as keyof FormData}
          placeholder={data[key as keyof FormData].placeholder}
          setState={setData}
        />
      ))}
      {isValidateText && (
        <P>비밀번호는 영문, 특수문자, 숫자 포함 8~12자를 조합해 주세요.</P>
      )}
    </Layout>
  );
};

export default InputField;

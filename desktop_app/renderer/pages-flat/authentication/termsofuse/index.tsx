import { useState, useEffect } from "react";
import CheckField from "./ui/chekcField";
import DefaultLayout from "../ui/layout/defaultLayout";
import TextField from "../ui/contents/textfield";
import { fetchData } from "@/shared/api/fetchData";

function index() {
  const [check, setCheck] = useState({
    allCheck: false,
    service: {
      desc: "(필수) 서비스 이용약관 동의",
      checked: false,
      required: true,
      isOpenDesc:true
    },
    personal: {
      desc: "(필수) 개인정보 수집 및 이용 동의",
      checked: false,
      required: true,
      isOpenDesc:true
    },
    age: {
      desc: "(필수) 만 14세 이상입니다",
      checked: false,
      required: true,
      isOpenDesc:false
    },
    location: {
      desc: "(선택) 위치 기반 서비스 이용 약관 동의",
      checked: false,
      required: false,
      isOpenDesc:true
    },
    marketing: {
      desc: "(선택) 마케팅 정보 수신 동의",
      checked: false,
      required: false,
      isOpenDesc:false
    },
    alert: {
      desc: "(선택) 서비스 알림 수신 동의",
      checked: false,
      required: false,
      isOpenDesc:false
    },
  });
  return (
    <DefaultLayout>
      <TextField
        title="이용약관 동의"
        desc="회원 서비스 이용을 위해 이용약관을 확인해주세요."
      />
      <CheckField check={check} setCheck={setCheck}></CheckField>
    </DefaultLayout>
  );
}

export default index;

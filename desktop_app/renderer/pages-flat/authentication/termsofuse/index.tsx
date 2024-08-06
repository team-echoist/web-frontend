import { useState, useEffect, SetStateAction } from "react";
import CheckField from "./ui/chekcField";
import DefaultLayout from "../ui/layout/defaultLayout";
import TextField from "../ui/contents/textfield";
import { fetchData } from "@/shared/api/fetchData";
import { Modal } from "@/shared/ui/modal";

function index() {
  const [check, setCheck] = useState({
    allCheck: false,
    service: {
      desc: "(필수) 서비스 이용약관 동의",
      checked: false,
      required: true,
      isOpenDesc: true,
    },
    personal: {
      desc: "(필수) 개인정보 수집 및 이용 동의",
      checked: false,
      required: true,
      isOpenDesc: true,
    },
    age: {
      desc: "(필수) 만 14세 이상입니다",
      checked: false,
      required: true,
      isOpenDesc: false,
    },
    location: {
      desc: "(선택) 위치 기반 서비스 이용 약관 동의",
      checked: false,
      required: false,
      isOpenDesc: true,
    },
    marketing: {
      desc: "(선택) 마케팅 정보 수신 동의",
      checked: false,
      required: false,
      isOpenDesc: false,
    },
    alert: {
      desc: "(선택) 서비스 알림 수신 동의",
      checked: false,
      required: false,
      isOpenDesc: false,
    },
  });
  const [fcmToken, setFcmToken] = useState("");
  const [machineId, setMachineId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const handleDeviceInfo = (data: string) => {
      setMachineId(data);
    };

    window.Electron.onDeviceInfo(handleDeviceInfo);
    window.Electron.requestDeviceInfo();
    window.Electron?.getFCMToken(
      "getFCMToken",
      (_: any, token: SetStateAction<string>) => {
        setFcmToken(token);
      }
    );
  }, []);
  const handelModalOpen = () => {
    console.log("확인");
    setIsModalOpen(!isModalOpen);
  };
  console.log("isModalOpen", isModalOpen);
  return (
    <DefaultLayout>
      <Modal
        title="서비스 이용 약관"
        url="https://tech.kakao.com/posts/453"
        isModalOpen={isModalOpen}
        onClick={handelModalOpen}
      />

      <TextField
        title="이용약관 동의"
        desc="회원 서비스 이용을 위해 이용약관을 확인해주세요."
      />
      <CheckField
        check={check}
        setCheck={setCheck}
        handelModalOpen={handelModalOpen}
      />
    </DefaultLayout>
  );
}

export default index;

import React from "react";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import { useState } from "react";
import ColorToast from "../../../shared/toast/Toast";

function MobileNews() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);

  const handleSubscribe = () => {
    setIsShowToast(true);
  };
  return (
    <main className="w-full">
      <ColorToast
        text="서비스 준비중입니다."
        onClose={() => {
          setIsShowToast(false);
        }}
        isShowToast={isShowToast}
      />
      <Header />
      <section className="flex flex-col min-h-[400px] items-center pt-[178px] mb-[263px]">
        <h1 className="text-white text-[32px] font-bold mb-16">NewsLetter</h1>
        <input
          type="email"
          placeholder="이메일을 입력해 주세요."
          className="rounded-[10px] bg-[#1D1D1D] p-2 text-white py-[17px] px-[17px] w-[316px] focus:border-[#616FED] focus:outline-none mb-[16px]"
        />
        <label className="w-[316px] flex items-start gap-2 cursor-pointer text-[14px]">
          <div
            className={`flex items-center justify-center w-6 h-6 ${
              isChecked1 ? "bg-[#616FED]" : ""
            }`}
            onClick={() => setIsChecked1(!isChecked1)}
            style={{ borderRadius: "4px" }}
          >
            <img
              src={
                isChecked1
                  ? "/images/newsletter/selected_box.svg"
                  : "/images/newsletter/nonselected_box.svg"
              }
              alt="checkbox"
              style={{ cursor: "pointer" }}
            />
          </div>
          <span className="text-white">개인정보 수집 이용 약관 동의(필수)</span>
        </label>
        <label className="w-[316px] flex items-start gap-2 cursor-pointer  text-[14px] mt-[12px]">
          <div
            className={`flex items-center justify-center w-6 h-6 ${
              isChecked2 ? "bg-[#616FED]" : ""
            }`}
            onClick={() => setIsChecked2(!isChecked2)}
            style={{ borderRadius: "4px" }}
          >
            <img
              src={
                isChecked2
                  ? "/images/newsletter/selected_box.svg"
                  : "/images/newsletter/nonselected_box.svg"
              }
              alt="checkbox"
              style={{ cursor: "pointer" }}
            />
          </div>
          <span className="text-white">광고성 정보 수신 동의(필수)</span>
        </label>
        <button
          className="w-[316px] mt-[60px] bg-[#616fed] py-[17px]  rounded-lg text-white font-medium hover:bg-[#4b59ea] transition-colors"
          onClick={handleSubscribe}
        >
          뉴스레터 구독하기
        </button>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default MobileNews;

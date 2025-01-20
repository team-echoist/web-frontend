import Header from "../../../shared/header/Header";
import { useState } from "react";
import ColorToast from "../../../shared/toast/Toast";

const Newsletter = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);

  const handleSubscribe = () => {
    setIsShowToast(true)
  };

  return (
    <main className="min-h-screen bg-[#121212]">
      <ColorToast
        text="서비스 준비중입니다."
        onClose={() => {
          setIsShowToast(false);
        }}
        isShowToast={isShowToast}
      />
      <Header />
      <div className="flex flex-col items-center justify-center w-full py-20">
        <h1 className="text-white xl:text-4xl md:text-[30px] font-bold mb-16">NewsLetter</h1>

        <div className="w-full max-w-[700px] space-y-6">
          {/* 이메일 입력 섹션 */}
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="이메일을 입력해 주세요."
              className="flex-1 xl:px-4 xl:py-3 lg:px-[19.61px] lg:py-[19px] md:px-[19.61px] md:py-[19px]  bg-[#1d1d1d] rounded-lg text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              className="xl:px-8 xl:py-3 lg:px-[26px] lg:py-[6px] md:px-[26px] md:py-[6px] bg-[#616fed] rounded-lg text-white font-medium hover:bg-[#4b59ea] transition-colors"
              onClick={handleSubscribe}
            >
              구독하기
            </button>
          </div>

          <div className="flex gap-8 text-gray-400 xl:text-[16px] lg:text-[12px] md:text-[12px]">
            <label className="flex items-center gap-2 cursor-pointer">
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
              <span className="text-white">
                개인정보 수집 이용 약관 동의(필수)
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Newsletter;

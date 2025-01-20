import React from "react";
import GeneralButton from "../../../../shared/button/GeneralButton";

function MobileBanner({
  handleDesktopOpen,
  handlePrepare,
  isDesktopOpen,
  setIsDesktopOpen,
}) {
  return (
    <section className="w-full  flex flex-col items-center h-[766px] z-30 relative">
      <img src="/images/logo.svg" alt="로고" className="w-[129px] h-[53px]" />
      <h1 className="text-white text-[14px] font-bold font-['Pretendard'] mt-[16.54px] mb-[14.92px]">
        나만의 글쓰기 공간, 링크드아웃
      </h1>
      <div
        className="relative  h-[689px] bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/images/mobile/home/home_banner.svg')",
        }}
      >
        <div className="flex flex-col items-center gap-[10px]">
          <GeneralButton onClick={handlePrepare}>
            <div className="w-[310px] h-[60px]  py-[10px] flex items-center justify-center gap-[14px]">
              <img
                className="w-[37px] h-[33px]"
                src={"/images/mainpage/button/apple-web.webp"}
                alt="apple_logo"
              />

              <p
                className="text-white text-[14px] font-[500] font-['Pretendard'] mt-[16.54px] mb-[14.92px]
              "
              >
                Apple Store에서 다운로드
              </p>
            </div>
          </GeneralButton>
          <GeneralButton
            onClick={() =>
              (window.location.href =
                "https://play.google.com/store/apps/details?id=com.echoist.linkedout&hl=ko&pli=1")
            }
          >
            <div className="w-[310px] h-[60px]  py-[10px] flex items-center justify-center gap-[14px]">
              <img
                className="w-[30px] h-[30px]"
                src={"/images/mainpage/button/playstore-web.webp"}
                alt="google_logo"
              />

              <p
                className="text-white text-[14px] font-[500] font-['Pretendard'] mt-[16.54px] mb-[14.92px]
              "
              >
                Google Play에서 다운로드
              </p>
            </div>
          </GeneralButton>
        </div>
      </div>
    </section>
  );
}

export default MobileBanner;

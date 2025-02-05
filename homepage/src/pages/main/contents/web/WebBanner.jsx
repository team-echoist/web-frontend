import React from "react";
import GeneralButton from "../../../../shared/button/GeneralButton";
function Web({
  handleDesktopOpen,
  handlePrepare,
  isDesktopOpen,
  setIsDesktopOpen,
}) {
  const downloadFile = (url) => {
    window.location.href = url;
  };
  return (
    <div className="w-full xl:mt-[250px] lg:mt-[130px] md:mt-[100px] relative xl:h-[1373px] lg:h-[890px] md:h-[750px] xl2:flex xl2:items-center xl2:flex-col">
      <div className="xl:ml-[363px] xl2:ml-[0px] lg:ml-[166px] md:ml-[106px]">
        <h1 className="text-white xl:text-[48px] lg:text-[30px] md:text-[24px] font-bold font-pretendard ">
          다양한 나를 '링크드아웃' 할 수 있는 글쓰기 공간
        </h1>
        <h3 className="text-white xl:text-[24px]  lg:text-[14px] font-normal font-['Arial'] leading-[38.40px]">
          A personal space where you can ‘linked-out’ various types of you.
        </h3>
        <div className="xl:w-[1059px] lg:w-[982px] md-[982px] flex gap-[21.58px] mt-[20px] justify-start items-start  xl2:ml-[0px]">
        <GeneralButton onClick={handlePrepare}>
          <img
            className="xl:w-[34px] lg:w-[21px]  md:w-[21px]"
            src={"/images/mainpage/button/apple-web.webp"}
            alt="apple_logo"
          />
          <div className="flex flex-col h-full justify-start xl:ml-[8px] lg:ml-[4.98px] md:ml-[4.98px]">
            <span className="xl:text-[12px] lg:text-[8px] md:text-[8px]">
              Download on the
            </span>
            <p
              className="bg-black1
              text-white 
              xl:text-[16px] 
              lg:text-[10px]
              md:text-[10px]
              font-['Arial'] 
              font-bold
              leading-[19.2px] 
              tracking-[-0.36px]
              "
            >
              App Store
            </p>
          </div>
        </GeneralButton>
        <GeneralButton
          onClick={() =>
            (window.location.href =
              "https://play.google.com/store/apps/details?id=com.echoist.linkedout&hl=ko&pli=1")
          }
        >
          <img
            className="xl:w-[28px] lg:w-[17.413px] md:w-[17.413px]"
            src={"/images/mainpage/button/playstore-web.webp"}
            alt="google_logo"
          />
          <div className="flex flex-col h-full justify-start xl:ml-[8px] lg:ml-[7.42px] md:ml-[7.42px]">
            <span className="xl:text-[12px] lg:text-[8px] md:text-[8px]">
              Download on the
            </span>
            <p
              className="bg-black1
              text-white 
              xl:text-[16px] 
              lg:text-[10px]
              md:text-[10px]
              font-['Arial'] 
              font-bold
              leading-[19.2px] 
              tracking-[-0.36px]
              "
            >
              Google Play
            </p>
          </div>
        </GeneralButton>
        <div className="relative cursor-pointer z-10 w-[285px] ">
          <GeneralButton variant="bold" onClick={handleDesktopOpen}>
            <img
              className="xl:w-[22px] xl:h-[37px] lg:w-[13.681px] lg:h-[32.656px] md:w-[13.681px] md:h-[32.656px]"
              src={"/images/mainpage/button/download-web.svg"}
              alt="download_logo"
            />
            <p className="xl:ml-[21px] lg:ml-[13.06px] md:ml-[13.06px] xl:text-[20px] lg:text-[12px] md:text-[12px]">
              Download for Desktop
            </p>
          </GeneralButton>
          {/* 데스크탑 dialog */}
          {/* 테블릿사이즈 부턴 모달 안열리게 */}
          {isDesktopOpen && (
            <div className="absolute left-[0px] top-[67px] text-white w-[276px]">
              <button
                onClick={() => {
                  setIsDesktopOpen(false);
                  downloadFile(
                    "https://download.linkedoutapp.com/window/linkedout-setup-1.0.0.exe"
                  );
                }}
              >
                <div className="whitespace-nowrap w-[273.54px] border-b-[1px] border-b-black1 flex gap-[5px] bg-black2 pt-[26px] pr-[61px] pb-[26px] pl-[30px] text-[18px] font-['Arial'] font-bold leading-normal tracking-[-0.6px]">
                  Download for
                  <strong className="text-pointcolor">Windows</strong>
                </div>
              </button>
              <button
                onClick={() => {
                  setIsDesktopOpen(false);
                  handlePrepare();
                }}
              >
                <div className="flex whitespace-nowrap  w-[273.54px] gap-[5px] bg-black2 pt-[26px] pr-[41px] pb-[26px] pl-[30px] text-[18px] font-['Arial'] font-bold leading-normal tracking-[-0.6px] rounded-b-[10px]">
                  Download for
                  <strong className="text-pointcolor">Mac</strong>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      </div>

      <div className="absolute xl2:static  xl:top-[38px] xl:left-[6%]  lg:top-[60px]  lg:left-[4%] md:top-[70px] md:left-[0px] xl2:w-[1248px] xl:w-[1478px] lg:w-[902px] md:w-[724px]">
        <img
          src={"/images/mainpage/mockup.png"}
          alt="mockup"
          className="absolute top-[38px] left-[6%] xl2:static xl2:-mt-[68px]"
        />
      </div>
    </div>
  );
}

export default Web;

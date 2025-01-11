import Header from "../../shared/header/Header";
import GeneralButton from "../../shared/button/GeneralButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlipSection from "./contents/FlipSection";
import Footer from "../../shared/footer/Footer";

// 메인 페이지
function MainPage() {
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleDesktopOpen = () => {
    setIsDesktopOpen((prev) => !prev);
  };

  return (
    <main className="bg-[#0F0F0F] min-h-screen text-white">
      <Header />
      <div className="w-full   xl:mt-[250px] lg:mt-[130px] md:mt-[100px] relative xl:h-[1373px] lg:h-[890px] md:h-[750px]">
        <div className="xl:ml-[363px] lg:ml-[166px] md:ml-[106px]">
          <h1 className="text-white xl:text-[48px] lg:text-[30px] md:text-[24px] font-bold font-['Pretendard'] ">
            다양한 나를 '링크드아웃' 할 수 있는 글쓰기 공간
          </h1>
          <h3 className="text-white xl:text-[24px] lg:text-[14px] font-normal font-['Arial'] leading-[38.40px]">
            A personal space where you can ‘linked-out’ various types of you.
          </h3>
        </div>

        <div className="xl:w-[1059px] lg:w-[982px] md-[982px] flex gap-[21.58px] mt-[55px] justify-start items-start xl:ml-[363px] lg:ml-[166px] md:ml-[106px]">
          <GeneralButton>
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
                <div className="whitespace-nowrap border-b-[1px] border-b-black1 flex gap-[5px] bg-black2 pt-[26px] pr-[61px] pb-[26px] pl-[30px] text-[18px] font-['Arial'] font-bold leading-normal tracking-[-0.6px]">
                  Download for
                  <strong className="text-pointcolor">Windows</strong>
                </div>
                <div className="flex whitespace-nowrap gap-[5px] bg-black2 pt-[26px] pr-[41px] pb-[26px] pl-[30px] text-[18px] font-['Arial'] font-bold leading-normal tracking-[-0.6px] rounded-b-[10px]">
                  Download for <strong className="text-pointcolor">Mac</strong>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute xl:top-[38px] lg:top-[60px] xl:left-[6%] lg:left-[4%] md:top-[70px] md:left-[0px] xl:w-[1478px] lg:w-[902px] md:w-[724px]">
          <img
            src={"/images/mainpage/mockup.png"}
            alt="mockup"
            className="absolute top-[38px] left-[6%] w-[1078]"
          />
        </div>
      </div>
      <section className="text-white flex xl:ml-[366.18px] lg:ml-[130px] md:ml-[70px]">
        <div>
          <div className="relative flex xl:gap-[70px]">
            <p className="whitespace-nowrap absolute top-[-23px] left-[30px] text-white font-['Pretendard'] xl:text-[39.043px] lg:text-[24px] md:text-[24px] font-semibold leading-[62.47px] tracking-[-1.171px]">
              다양한 관계 에서 벗어나다
            </p>
            <img
              className="xl:w-[220.84px] xl:h-[47.584px] lg:w-[150px] lg:h-[30px] md:w-[150px] md:h-[30px] xl:ml-[0px] lg:ml-[15px] md:ml-[20px]"
              src={"/images/mainpage/highlight.png"}
              alt="highlights"
            />
            <img
              className="xl:w-[220.84px] xl:h-[47.584px] lg:w-[119px]  md:w-[119px] xl:ml-[0px] lg:h-[30px] md:h-[30px] lg:ml-[35px] md:ml-[40px]"
              src={"/images/mainpage/highlight.png"}
              alt="highlights"
            />
            <p className="absolute xl:top-[35px] lg:top-[18px] md:top-[18px] xl:left-[13%] lg:left-[28%] md:left-[18%]  text-white text-center font-['Pretendard'] xl:text-[24.402px] lg:text-[15.175px] md:text-[15.175px] font-thin leading-[39.043px] tracking-[-0.732px]">
              :Link
            </p>
            <p className="absolute xl:top-[35px] lg:top-[18px] md:top-[18px] xl:left-[40%] lg:left-[85%]  md:left-[43%] text-white text-center font-['Pretendard']  xl:text-[24.402px] lg:text-[15.175px] font-thin leading-[39.043px] tracking-[-0.732px]">
              :Out
            </p>
            <p className="text-white xl:w-[503px] lg:w-[406px] md:w-[306px] break-all xl:static lg:absolute lg:top-[-10px] lg:left-[350px] md:absolute md:top-[-10px] md:left-[350px]">
              링크드아웃에서는 '다양한 관계 속의 나'를 한발짝 떨어져 들여다보는
              기회를 글쓰기 경험을 통해 제공하고 있어요.
            </p>
          </div>
        </div>
      </section>
      <FlipSection></FlipSection>
      <section className="w-full flex justify-center  gap-[137.46px] xl:h-[588px] lg:h-[322.131px] md:h-[322.131px] bg-[#616FED] text-black xl:mt-[317px] lg:mt-[196px] md:mt-[196px] xl:pt-[170.89px] lg:pt-[70.89px] md:pt-[70.89px]">
        <p className="font-semibold text-[#121212] xl:text-[39px] lg:text-[24px] md:text-[24px] tracking-[-1.17px] leading-[62.5px] whitespace-nowrap">
          글쓰기 섬, 링크드아웃
        </p>
        <div className="xl:w-[653px] lg:w-[406px] md:w-[356px] xl:text-[24px] lg:text-[14px] md:text-[14px]">
          <span>링크드아웃은 아무개들의 </span>
          <span className="font-bold">개인적인 글쓰기 섬</span>
          <span>이에요.</span>
          <span>
            글을 써보지 않은 사람, 글을 잘 쓰고 싶어하는 사람, 매일 일기를
            남기는 사람, 쌓아둔 감정을 글로 분출하고 싶은 사람, 나만의 글을
            차곡차곡 모으고 싶은 사람 등을 위한 무인도랍니다.{" "}
          </span>
          <span className="font-bold">
            아무개들이 세상과 단절할 수 있는 섬을 만들어 주는 것이 저희
            링크드아웃 팀원들의 역할입니다.
          </span>
          <button
            className="xl:mt-[76px] lg:mt-[34px] md:mt-[34px] flex gap-[6px] items-center cursor-pointer"
            onClick={() => {
              handleNavigation("/about");
            }}
          >
            <img src={"/images/mainpage/arrow.svg"} alt="arrow" />
            <p>About us</p>
          </button>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default MainPage;

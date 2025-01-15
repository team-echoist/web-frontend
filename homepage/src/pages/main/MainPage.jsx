import Header from "../../shared/header/Header";
import GeneralButton from "../../shared/button/GeneralButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FlipSection from "./contents/web/FlipSection";
import Footer from "../../shared/footer/Footer";
import ColorToast from "../../shared/toast/Toast";
import Mobile from "./contents/mobile";
import Web from "./contents/web";

// 메인 페이지
function MainPage() {
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleDesktopOpen = () => {
    if (window.innerWidth <= 1024) {
      setToastMsg("데스크탑에서만 이용 가능합니다.");
      setIsToastOpen(true);
      setIsDesktopOpen(false);
    } else {
      setIsDesktopOpen((prev) => !prev);
    }
  };
  const handlePrepare = () => {
    setToastMsg("준비중 입니다.");
    setIsToastOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-[#0F0F0F] w-screen min-h-screen text-white">
      <ColorToast
        text={toastMsg}
        onClose={() => {
          setIsToastOpen(false);
        }}
        isShowToast={isToastOpen}
      />
      <Header />
      {isMobile ? (
        <>
          <Mobile
            handlePrepare={handlePrepare}
            handleDesktopOpen={handleDesktopOpen}
            isDesktopOpen={isDesktopOpen}
            setIsDesktopOpen={setIsDesktopOpen}
          />
        </>
      ) : (
        <>
          <Web
            handlePrepare={handlePrepare}
            handleDesktopOpen={handleDesktopOpen}
            isDesktopOpen={isDesktopOpen}
            setIsDesktopOpen={setIsDesktopOpen}
          />
        </>
      )}
      {/* <section className="w-full flex justify-center  gap-[137.46px] xl:h-[588px] lg:h-[322.131px] md:h-[322.131px] bg-[#616FED] text-black xl:mt-[317px] lg:mt-[196px] md:mt-[196px] xl:pt-[170.89px] lg:pt-[70.89px] md:pt-[70.89px]">
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
      </section> */}
      {/* <Footer></Footer> */}
    </main>
  );
}

export default MainPage;

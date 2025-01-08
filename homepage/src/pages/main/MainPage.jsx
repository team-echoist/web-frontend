import Header from "../../shared/header/Header";
import GeneralButton from "../../shared/button/GeneralButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="w-full  mt-[250px] relative h-[1373px]">
        <div className="ml-[363px]">
          <h1 className="text-white text-[48px] font-bold font-['Pretendard'] leading-[76.80px]">
            다양한 나를 '링크드아웃' 할 수 있는 글쓰기 공간
          </h1>
          <h3 className="text-white text-[24px] font-normal font-['Arial'] leading-[38.40px]">
            A personal space where you can ‘linked-out’ various types of you.
          </h3>
        </div>

        <div className="w-[1059px] flex gap-[21.58px] mt-[55px] justify-start items-start ml-[363px]">
          <GeneralButton>
            <img
              src={"/images/mainpage/button/apple-web.webp"}
              alt="apple_logo"
            />
            <div className="flex flex-col h-full justify-start ml-[21px]">
              <span>Download on the</span>
              <p
                className="bg-black1
                  text-white 
                  text-[16px] 
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
          <GeneralButton>
            <img
              src={"/images/mainpage/button/playstore-web.webp"}
              alt="google_logo"
            />
            <div className="flex flex-col h-full justify-start ml-[21px]">
              <span>Download on the</span>
              <p
                className="bg-black1
                  text-white 
                  text-[16px] 
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
                src={"/images/mainpage/button/download-web.svg"}
                alt="download_logo"
              />
              <p className="ml-[21px]">Download for Desktop</p>
            </GeneralButton>
            {/* 데스크탑 dialog */}
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
        <div className="absolute top-[38px] left-[6%] w-[1478px]">
          <img
            src={"/images/mainpage/mockup.png"}
            alt="mockup"
            className="absolute top-[38px] left-[6%] w-[1078]"
          />
        </div>
      </div>
      <section className="text-white flex ml-[366.18px]">
        <div>
          <div className="relative flex gap-[70px]">
            <p className="whitespace-nowrap absolute top-[-23px] left-[30px] text-white font-['Pretendard'] text-[39.043px] font-semibold leading-[62.47px] tracking-[-1.171px]">
              다양한 관계 에서 벗어나다
            </p>
            <img src={"/images/mainpage/highlight.png"} alt="highlights" />
            <img src={"/images/mainpage/highlight.png"} alt="highlights" />
            <p className="absolute top-[35px] left-[13%] text-white text-center font-['Pretendard'] text-[24.402px] font-thin leading-[39.043px] tracking-[-0.732px]">
              :Link
            </p>
            <p className="absolute top-[35px] left-[40%]  text-white text-center font-['Pretendard'] text-[24.402px] font-thin leading-[39.043px] tracking-[-0.732px]">
              :Out
            </p>
            <p className="text-white w-[503px] break-all">
              링크드아웃에서는 '다양한 관계 속의 나'를 한발짝 떨어져 들여다보는
              기회를 글쓰기 경험을 통해 제공하고 있어요.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex ml-[366px] mt-[83.09px]">
          <div className="mr-8">
            <img src={"/images/mainpage/section_1.svg"} alt="section_1" />
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">01</span>
              <span>쓰는 즐거움을 찾아서, 워밍업 글로키</span>
            </div>
          </div>
          <div>
            <img src={"/images/mainpage/section_2.svg"} alt="section_2" />
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">02</span>
              <span>글 맞춤형 옵션 선택</span>
            </div>
          </div>
        </div>

        <div className="flex ml-[366px]">
          <div className="mr-8">
            <img src={"/images/mainpage/section_3.svg"} alt="section_3" />
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">03</span>
              <span>쓸수록 가까워지는 나와의 거리, 감정 해시태그</span>
            </div>
          </div>
          <div>
            <img src={"/images/mainpage/section_4.svg"} alt="section_4" />
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">04</span>
              <span>나만의 스토리로 만든 에세이 모음집</span>
            </div>
          </div>
        </div>

        <div className="flex ml-[366px] ">
          <div className="mr-8">
            <img src={"/images/mainpage/section_5.svg"} alt="section_5" />
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">05</span>
              <span>링크드아웃한 문장을 모은 읽기 커뮤니티</span>
            </div>
          </div>
          <div>
            <img src={"/images/mainpage/section_6.svg"} alt="section_6" />
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">06</span>
              <span>내가 만들고 내가 즐기는 DIY 버츄얼 서재</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[518px] bg-[#616FED] text-black mt-[317px] pl-[367.18px] pt-[114px]">
        <p className="font-semibold text-[#121212] text-[39px] tracking-[-1.17px] leading-[62.5px] whitespace-nowrap">
          글쓰기 섬, 링크드아웃
        </p>
        <div className="w-[653px]">
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
        </div>
        <button
          className="mt-[76px] flex gap-[6px] items-center cursor-pointer"
          onClick={() => {
            handleNavigation("/about");
          }}
        >
          <img src={"/images/mainpage/arrow.svg"} alt="arrow" />
          <p>About us</p>
        </button>
      </section>
    </main>
  );
}

export default MainPage;

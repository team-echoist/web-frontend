import React from "react";
import Footer from "../../../../shared/footer/Footer";
function WebFooter({handleNavigation}) {
  return (
    <div>
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
    </div>
  );
}

export default WebFooter;

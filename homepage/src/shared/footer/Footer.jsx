import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="absolute bottom-[0px] w-full flex gap-[20px] justify-center text-[#323232] font-pretendard xl:text-xs lg:text-xs md:text-xs sm:text-[8px] xs:text-[8px] font-normal leading-[150%] underline xl:mt-[245px] lg:mt-[136.81px] md:mt-[136.81px]  mb-10">
      <div className="xl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[280px]  flex justify-between whitespace-nowrap">
        <Link className="mr-[12px]" to="/operational-policy">
          운영정책
        </Link>
        <Link className="mr-[12px]" to="/terms">
          이용약관
        </Link>
        <Link className="mr-[12px]" to="/privacy-policy">
          개인정보처리방침
        </Link>
        <Link to="/location-terms">위치기반서비스 이용약관</Link>
      </div>
    </footer>
  );
}

export default Footer;

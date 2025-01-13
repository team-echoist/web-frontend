import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full flex gap-[20px] justify-center text-[#323232] font-pretendard text-xs font-normal leading-[150%] underline xl:mt-[245px] lg:mt-[136.81px] md:mt-[136.81px]  mb-10">
      <div className="w-[380px] flex justify-between whitespace-nowrap">
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

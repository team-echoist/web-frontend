import React from "react";
import Footer from "../../../../shared/footer/Footer";

function MobileFooter() {
  return (
    <div>
      <div className="mb-[242px] text-[#121212] h-[65px] bg-pointcolor mt-[132px] flex h-[65px] p-[11px_20px]  justify-end items-center gap-[10px] self-stretch">
        <img
          src="/images/mobile/footer_arrow.svg"
          alt="section_1_back"
          className=" h-[38px]"
        />
        <span> About us</span>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MobileFooter;

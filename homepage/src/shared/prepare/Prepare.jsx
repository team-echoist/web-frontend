import React from "react";

function Prepare() {
  return (
    <div className="flex flex-col items-center pt-[223.08px]">
      <img
      className="xl:w-[102px] xl:h-[102px] lg:w-[46px] lg:h-[46px] md:w-[46px] md:h-[46px]"
        src="/images/prepare/loading.svg"
        alt="loading"
      />
      <span  className="xl:text-[48px] lg:text-[30px] md:text-[30px] text-[#5C5C5C] font-bold leading-[1.6] tracking-[-1.92px] text-center">Coming Soon!</span>
      <p className="xl:text-[20px] lg:text-[14px] md:text-[14px] text-[#9F9F9F]  leading-[1.6] tracking-[-1.92px] text-center mt-[18px]">보다 나은 서비스 제공을 위하여 컨텐츠 준비 중에 있습니다.</p>
      <p className="xl:text-[20px] lg:text-[14px] md:text-[14px] text-[#9F9F9F]  leading-[1.6] tracking-[-1.92px] text-center mt-[4px]">빠른 시일 내에 준비하여 찾아뵙겠습니다! 감사합니다. </p>
    </div>
  );
}

export default Prepare;

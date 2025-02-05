import React, { useEffect, useState } from "react";

function WebDesc() {
  return (
    <section className="text-white flex  flex justify-center  ">
      <div className="xl2:w-[900px] lg:w-[712px] md:w-[632px] flex gap-[112px]">
        <div className={`flex flex-col w-[50%]`}>
          <p className="whitespace-nowrap  text-white font-pretendard xl:text-[39.043px] lg:text-[24px] md:text-[24px] font-semibold leading-[62.47px] tracking-[-1.171px]">
            다양한 관계 에서 벗어나다
          </p>
          <div className="-mt-[25px] -ml-[30px] -mr-[30px] flex flex-col">
            <div className="flex gap-[10px] xl2:gap-[30px] h-[40px] lg:h-[30px] md:h-[30px] w-full">
              <img
                className="w-[60%] xl2:w-[70%] lg:w-[52%] md:w-[52%]"
                src={"/images/mainpage/highlight.png"}
                alt="highlights"
              />
              <img
                className="w-[60%] xl2:w-[55%] lg:w-[38%] md:w-[40%]"
                src={"/images/mainpage/highlight.png"}
                alt="highlights"
              />
            </div>

            <div className="flex -mt-[10px]">
              <p className="w-[38%] lg:w-[42%] md:w-[42%] flex justify-end  font-pretendard xl:text-[1.5rem] lg:text-[1rem] font-thin leading-[2rem] tracking-[-0.05rem]">
                :Link
              </p>
              <p className="w-[55%] lg:w-[45%] md:w-[45%] flex justify-end  font-pretendard xl:text-[1.5rem] lg:text-[1rem] font-thin leading-[2rem] tracking-[-0.05rem]">
                :Out
              </p>
            </div>
          </div>
        </div>
        <p className="text-white  break-all w-[50%] lg:w-[406px]">
          링크드아웃에서는 '다양한 관계 속의 나'를 한발짝 떨어져 들여다보는
          기회를 글쓰기 경험을 통해 제공하고 있어요.
        </p>
      </div>
    </section>
  );
}

export default WebDesc;

import React from 'react'

function WebDesc() {
  return (
    <section className="text-white flex xl:ml-[330.18px] lg:ml-[130px] md:ml-[70px]">
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
  )
}

export default WebDesc
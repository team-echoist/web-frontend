import React from 'react'

function WebDesc() {
  return (
    <section className="text-white flex xl:ml-[330.18px] xl2:ml-[0px] lg:ml-[140px] md:ml-[70px]  xl2:flex xl2:justify-center  ">
    <div className='xl2:w-[972px]'>
      <div className="relative flex gap-[4.375rem]">
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
        <p className="absolute xl:top-[2rem] lg:top-[1rem] md:top-[1rem] xl:left-[15%] lg:left-[38%] md:left-[35%] text-white text-center font-pretendard xl:text-[1.5rem] lg:text-[1rem] font-thin leading-[2rem] tracking-[-0.05rem]">
        :Link
      </p>
      <p className="absolute xl:top-[2rem] lg:top-[1rem] md:top-[1rem] xl:left-[45%] lg:left-[85%] md:left-[85%] text-white text-center font-pretendard xl:text-[1.5rem] lg:text-[1rem] font-thin leading-[2rem] tracking-[-0.05rem]">
        :Out
      </p>
        <p className="text-white xl:w-[503px] lg:w-[406px] md:w-[306px] break-all xl:static xl2:absolute xl2:top-[-10px] xl2:left-[530px] lg:absolute lg:top-[-10px] lg:left-[350px] md:absolute md:top-[-10px] md:left-[350px]">
          링크드아웃에서는 '다양한 관계 속의 나'를 한발짝 떨어져 들여다보는
          기회를 글쓰기 경험을 통해 제공하고 있어요.
        </p>
      </div>
    </div>
  </section>
  )
}

export default WebDesc
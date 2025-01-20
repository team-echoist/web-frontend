import React from "react";

function MobileDesc() {
  return (
    <section className="w-screen flex flex-col items-center h-[106px] mb-[26px]">
      <div className="w-full flex flex-col items-center ">
        <div className="w-[180px] h-[48px]  flex flex-col items-center relative">
          <p className="text-white text-[18px] font-bold font-['Pretendard'] whitespace-nowrap">
            다양한 관계 에서 벗어나다
          </p>
          <img
            className="w-[130px] h-[30px] absolute top-[12px] left-[-35px]"
            src={"/images/mainpage/highlight.png"}
            alt="highlights"
          />
          <img
            src={"/images/mainpage/highlight.png"}
            alt="highlights"
            className="w-[100px] h-[30px] absolute top-[12px] right-[-35px]"
          />
          <p className="absolute top-[25px] left-[20%]">:Link</p>
          <p className="absolute top-[25px] right-[-10%]">:Out</p>
        </div>
      </div>
      <p className="text-white  font-['Pretendard'] text-[12px] mt-[10px]">
        링크드아웃에서는
        <strong className="text-pointcolor mt-[10px]">
          '다양한 관계 속의 나'를 한발짝 떨어져 <br></br>들여다보는 기회를
        </strong>
        글쓰기 경험을 통해 제공하고 있어요.
      </p>
    </section>
  );
}

export default MobileDesc;

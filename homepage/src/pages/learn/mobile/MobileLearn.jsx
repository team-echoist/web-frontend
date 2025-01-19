import React from "react";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";

function MobileLearn() {
  const generalFont = `text-white font-pretendard text-xl tracking[-0.6px]`;
  const titleFontStyle = `text-[20px] font-semibold`;
  const strongFontColor = `text-pointcolor`;
  return (
    <main className="w-full">
      <Header />
      <section
        className={`${generalFont} font-normal text-[14px] flex flex-col gap-[100px] items-center pt-[139px] mb-[259px]`}
      >
        {/* 1번 섹션 */}
        <article
          className={`w-[306px]  flex flex-col items-center text-center`}
        >
          <h1
            className={`${titleFontStyle} ${titleFontStyle} whitespace-nowrap font-semibold `}
          >
            <strong className={`${strongFontColor}`}>01</strong>
            <br></br>
            쓰는 즐거움을 찾아서,{" "}
            <strong className={`${strongFontColor} `}>워밍업 글로키</strong>
          </h1>
          <div className="mt-[34px] w-full flex">
            <img
              src="/images/mobile/learn/section_1_1.svg"
              alt="learn_section1_mobile"
              className={`w-[171px] h-[354px]`}
            />
            <img
              src="/images/mobile/learn/section_1_2.svg"
              alt="learn_section1_mobile"
              className={`w-[135px] h-[293px] mt-[43px]`}
            />
          </div>
          <p className="text-[14px] text-left mt-[28px]">
            글을 쓰는 게 어색하고 시작하기 어려우신가요? 글로키란{" "}
            <strong className={`${strongFontColor} font-normal`}>
              글(geul)과 크로키(croquis)의 합성어
            </strong>
            로 글을 본격적으로 쓰기 전, 주어진 상황을 묘사하거나 상상을 덧대어
            ‘빠르게 스케치’ 하듯이 글을 쓰는 몸풀기를 말합니다.
            <br></br>
            <strong className={`${strongFontColor} font-normal`}>
              AM 12:00&nbsp;
            </strong>
            마다 주어지는 이미지를 보고 글로키를 그려보세요!
          </p>
        </article>
        {/* 2번 섹션 */}
        <article
          className={`w-[306px]  flex flex-col items-center text-center`}
        >
          <h1
            className={`${titleFontStyle} ${titleFontStyle} whitespace-nowrap font-semibold `}
          >
            <strong className={`${strongFontColor}`}>02</strong>
            <br></br>글 맞춤형 옵션 선택
          </h1>
          <div className="mt-[34px]">
            <img
              src="/images/mobile/learn/section_2_1.svg"
              alt="learn_section2_mobile"
              className={`w-[171px] h-[354px]`}
            />
          </div>
          <p className="text-[14px] text-left mt-[28px]">
            글의 내용에 따라, 썼을 때 내 마음에 따라
            <strong className={`${strongFontColor} font-normal`}>
              글의 행방을 결정
            </strong>
            할 수 있어요.
            <br></br>
            <br></br>
            <span>
              “나만 보고 싶은 글이야!”&nbsp;
              <strong className={`${strongFontColor} font-normal`}>
                → 저장
              </strong>
            </span>
            <br></br>
            <span>
              “다른 아무개랑 이 글을 공유하고 싶어”&nbsp;
              <strong className={`${strongFontColor} font-normal`}>
                → 발행
              </strong>
            </span>
            <br></br>
            <span>
              "이 글 다시는 안 읽을거야.. 다른 아무개가 읽어줬으면 해”&nbsp;
              <strong className={`${strongFontColor} font-normal`}>
                → linked-out
              </strong>
            </span>
            <br></br>
            <br></br>
            유리병 편지를 바다에 띄워 보내는 경험을 링크드아웃을 통해 해보세요.
          </p>
        </article>
        {/* 3번 섹션 */}
        <article
          className={`w-[306px]  flex flex-col items-center text-center`}
        >
          <h1
            className={`${titleFontStyle} ${titleFontStyle} whitespace-nowrap`}
          >
            <strong className={`${strongFontColor}`}>03</strong>
            <br></br>
            쓸수록 가까워지는 나와의 거리
            <br></br>
            <strong className={`${strongFontColor} `}> #감정_해시태그</strong>
          </h1>
          <div className="mt-[34px] flex justify-center gap-[9px]">
            <img
              src="/images/mobile/learn/section3_1.svg"
              alt="learn_section3_mobile"
              className={`w-[170px] h-[350px]`}
            />
            <img
              src="/images/mobile/learn/section3_2.svg"
              alt="learn_section3_mobile"
              className={`w-[170px] h-[350px]`}
            />
          </div>
          <p className="text-[14px] text-left mt-[28px]">
            <strong className={`${strongFontColor} font-normal`}>
              <span className="underline">#심술나는</span> &nbsp;
              <span className="underline">#후련한</span>
            </strong>
            과 같은 #감정_해시태그를 달면서 링크드아웃{" "}
            <strong className={`${strongFontColor} font-normal`}>
              감정 뱃지
            </strong>
            를 모아보세요! 평소에 정확하게 표현하지 못했던 감정을 글로 써보고,
            속마음을 들여다봐주세요.
          </p>
        </article>
        {/* 4번 섹션 */}
        <article
          className={`w-[306px]  flex flex-col items-center text-center`}
        >
          <h1
            className={`${titleFontStyle} ${titleFontStyle} whitespace-nowrap font-semibold `}
          >
            <strong className={`${strongFontColor}`}>04</strong>
            <br></br>
            나만의 <strong className={`${strongFontColor} `}>스토리</strong>로
            만든 에세이 모음집
          </h1>
          <div className="mt-[34px] flex justify-center gap-[9px]">
            <img
              src="/images/mobile/learn/section_4_1.svg"
              alt="learn_section4_mobile"
              className={`w-[170px] h-[350px]`}
            />
            <img
              src="/images/mobile/learn/section4_2.svg"
              alt="learn_section4_mobile"
              className={`w-[170px] h-[350px]`}
            />
          </div>
          <p className="text-[14px] text-left mt-[28px]">
            썼던 글을 엮어 &nbsp;
            <strong className={`${strongFontColor} font-normal`}>
              에세이 단편선
            </strong>
            을 만들 수 있어요. 마음에 드는 글을 모으거나, 어울리는 글끼리
            엮거나, 이야기가 이어지는 글을 모아 보거나, 계절감이 맞는 글을
            모으는 등 다양하게 스토리 기능을 사용해보세요!
          </p>
        </article>
        {/* 5번 섹션 */}
        <article
          className={`w-[306px]  flex flex-col items-center text-center`}
        >
          <h1
            className={`${titleFontStyle} ${titleFontStyle} whitespace-nowrap font-semibold `}
          >
            <strong className={`${strongFontColor}`}>05</strong>
            <br></br>
            링크드아웃한 문장을 모은
            <br></br>
            <strong className={`${strongFontColor} `}>읽기 커뮤니티</strong>
          </h1>
          <div className="mt-[34px]">
            <img
              src="/images/mobile/learn/section5_1.svg"
              alt="learn_section5_mobile"
              className={`w-[179px] h-[370px]`}
            />
          </div>
          <p className="text-[14px] text-left mt-[28px]">
            한 문장 읽기, 랜덤 글 읽기 등 다른 아무개가 익명으로 쓴 글을
            다양하게 읽어보세요. 다른 아무개들은 어떤 문장으로 글을 시작하고,
            어떤 문장으로 글을 마무리할까요?
          </p>
        </article>
        {/* 6번 섹션 */}
        <article
          className={`w-[306px]  flex flex-col items-center text-center`}
        >
          <h1
            className={`${titleFontStyle} ${titleFontStyle} whitespace-nowrap font-semibold `}
          >
            <strong className={`${strongFontColor}`}>06</strong>
            <br></br>
            내가 만들고 내가 즐기는
            <br></br>
            <strong className={`${strongFontColor} `}>DIY 버츄얼 서재</strong>
          </h1>
          <div className="mt-[34px] flex justify-center gap-[9px]">
            <img
              src="/images/mobile/learn/section6_1.svg"
              alt="learn_section6_mobile"
              className={`w-[170px] h-[350px]`}
            />
            <img
              src="/images/mobile/learn/section6_2.svg"
              alt="learn_section6_mobile"
              className={`w-[173px] h-[356px]`}
            />
          </div>
          <p className="text-[14px] text-left mt-[28px]">
            글을 쓰면 쓸수록 메인 페이지를 꾸밀 수 있는 리워드가 주어져요.
            다양한 글을 쓰면서 나만의 글쓰기 공간을 마음에 들게 꾸며보세요!
          </p>
        </article>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default MobileLearn;

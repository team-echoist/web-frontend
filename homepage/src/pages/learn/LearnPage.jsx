import Header from "../../shared/header/Header";
import Footer from "../../shared/footer/Footer";

const LearnPage = () => {
  return (
    <div className="bg-[#0F0F0F]  min-h-screen text-white flex flex-col">
      <Header />
      <section className="flex xl:h-[585px] lg:h-[364px] md:h-[324px] xl:mt-[370px] lg:mt-[204px] md:mt-[204px] xl:ml-[363px] lg:ml-[156px] md:ml-[76px]">
        <div>
          <p className="text-pointcolor font-pretendard xl:text-2xl lg:text-[20px] md:text-[16px] font-semibold">
            01
          </p>
          <p>
            <span className="text-[#E8E8E8] font-pretendard xl:text-[32px] lg:text-[20px] md:text-[16px] font-semibold ">
              쓰는 즐거움을 찾아서,{" "}
            </span>

            <span className="text-pointcolor font-pretendard xl:text-[32px] lg:text-[20px] md:text-[20px] font-semibold ">
              워밍업 글로키
            </span>
          </p>
          <p className="flex flex-col text-white font-pretendard xl:text-[20px] lg:text-[12px] md:text-[10px] mt-[28px]">
            <span>글을 쓰는 게 어색하고 시작하기 어려우신가요?</span>
            <span>
              글로키란{" "}
              <strong className="text-pointcolor font-pretendard xl:text-[20px] lg:text-[12px] md:text-[10px]">
                글(geul)과 크로키(croquis)의 합성어
              </strong>{" "}
              로 글을 본격적으로 쓰기 전,
            </span>

            <span>
              주어진 상황을 ‘묘사’하거나 ‘상상’을 덧대어 ‘빠르게 스케치’ 하듯이
              글을 쓰는
              <br></br>
              몸풀기를 말합니다.{" "}
              <strong className="text-pointcolor font-pretendard xl:text-[20px] lg:text-[12px] md:text-[12px]">
                AM 12:00
              </strong>{" "}
              마다 주어지는 이미지를 보고 보이는 것들을<br></br>
              묘사하거나 상상을 더해 글로 표현해보세요.
            </span>
          </p>
        </div>
        <div className="relative xl:w-[508px] lg:w-[373px] md:w-[323px] text-white">
        <img
            className="xl:absolute xl:left-[99px] lg:absolute lg:left-[39px] lg:absolute lg:left-[0px] md:left-[39px] md:absolute md:left-[30px] z-30"
            src="/images/learnpage/image_2730.svg"
            alt="learn_section1_img2"
          />
          <img
            className="xl:absolute xl:left-[-115.05px] xl:top-[244.58px] lg:absolute lg:left-[-185.05px] lg:top-[244.58px] md:absolute md:left-[-185.05px] md:top-[244.58px] z-20"
            src="/images/learnpage/Frame_1437256257.svg"
            alt="learn_section1_img1"
          />
  
          <img
            className="xl:absolute xl:left-[259px] xl:top-[60px] lg:absolute lg:left-[199px] lg:top-[60px] md:absolute md:left-[159px] md:top-[60px] z-20"
            src="/images/learnpage/image_2731.svg"
            alt="learn_section1_img3"
          />
        </div>
      </section>
      {/* 섹션2 */}
      <section className="relative xl:h-[586px] lg:h-[364px]  md:h-[364px] xl:ml-[363px] xl:mt-[269.35px] lg:ml-[154px] lg:mt-[143px] md:ml-[76px] md:mt-[143px] xl:h-[600px] lg:h-[364px] md:h-[364px] flex">
        <div className="flex">
          <img
            className="xl:w-[284px] lg:w-[177px] md:w-[157px] "
            src="/images/learnpage/section2_1.svg"
            alt="learn_section2_1_img"
          />
          <img
            className="xl:w-[284px] lg:w-[176px] md:w-[156px] xl:absolute xl:top-[77px] xl:left-[284px] lg:absolute lg:top-[57px] lg:left-[196px] md:absolute md:top-[72px] md:left-[166px]"
            src="/images/learnpage/section2_2.webp"
            alt="learn_section2_2_img"
          />
        </div>

        <div className="relative xl:ml-[324px] xl:mt-[84px] lg:mt-[84px] md:mt-[84px] lg:ml-[239px] md:ml-[189px]">
          <p className="text-pointcolor font-pretendard xl:text-2xl lg:text-[20px]  md:text-[16px] font-semibold">
            02
          </p>
          <p className="text-[#E8E8E8] font-pretendard xl:text-[32px] lg:text-[20px] md:text-[16px] font-semibold mt-[6px]">
            글 맞춤형 옵션 선택
          </p>
          <p className="mt-[28px] text-white font-pretendard xl:text-[20px] lg:text-[12px] md:text-[10px]">
            <p>
              글의 내용에 따라, 썼을 때 내 마음에 따라 글의 행방을 결정할 수
              있어요.
            </p>

            <span>“나만 보고 싶은 글이야!” </span>
            <span className="text-pointcolor font-pretendard">→ 저장</span>
            <br></br>
            <span>“다른 아무개랑 이 글을 공유하고 싶어” </span>
            <span className="text-pointcolor font-pretendard">→ 발행</span>
            <br></br>
            <span>
              “이 글 다시는 안 읽을거야.. 다른 아무개가 읽어줬으면 해”{" "}
            </span>
            <span className="text-pointcolor font-pretendard">
              → linked-out
            </span>

            <p>
              유리병 편지를 바다에 띄워 보내는 경험을 링크드아웃을 통해
              해보세요.
            </p>
          </p>
        </div>
      </section>
      {/* 섹션3 */}
      <section className="relative xl:ml-[363px] lg:ml-[154px] md:ml-[76px]  xl:mt-[269.35px] lg:mt-[103px] md:mt-[103px] xl:h-[600px] lg:h-[364px] md:h-[364px]  flex">
        <div className="relative mt-[84px] xl:mr-[76px] lg:mr-[56px]">
          <p className="text-pointcolor font-pretendard xl:text-2xl lg:text-[20px]  md:text-[16px] font-semibold">
            03
          </p>
          <p className="text-[#E8E8E8] font-pretendard xl:text-[32px] lg:text-[20px] md:text-[16px] font-semibold mt-[6px]">
            쓸수록 가까워지는 나와의 거리
          </p>
          <p className="text-pointcolor font-pretendard xl:text-[32px] lg:text-[20px] md:text-[16px] font-semibold mt-[2px]">
            #감정_해시태그
          </p>
          <p className="xl:w-[522px] lg:w-[360px] md:w-[350px] mt-[28px] text-white font-pretendard xl:text-[20px] lg:text-[12px] md:text-[10px] ">
            <p className="leading-[160%]">
              #심술나는 #후련한 과 같은 #감정_해시태그를 달면서 링크드아웃
            </p>

            <p className="leading-[160%]">
              감정 뱃지를 모아보세요! 평소에 정확하게 표현하지 못했던 감정을
            </p>
            <p className="leading-[160%]">
              글로 써보고, 속마음을 들여다봐주세요.
            </p>
          </p>
        </div>
        <div className="flex gap-[16px]">
          <img
            className="xl:w-[284px] lg:w-[177px] md:w-[157px] xl:h-[586px] lg:h-[364px]  md:h-[364px]"
            src="/images/learnpage/section3_1.svg"
            alt="learn_section3_1_img"
          />
          <img
            className="xl:w-[284px] lg:w-[177px] md:w-[157px] xl:h-[586px] lg:h-[364px]  md:h-[364px]"
            src="/images/learnpage/section3_2.svg"
            alt="learn_section3_2_img"
          />
        </div>
      </section>
      {/* 섹션4 */}
      <section className="relative  xl:ml-[363px] xl:mt-[269.35px] lg:ml-[154px] md:ml-[76px]  lg:mt-[103px] md:mt-[103px] xl:h-[600px] lg:h-[364px] md:h-[364px] flex">
        <div className="flex gap-[15.98px]">
          <img
            className="xl:w-[284px] lg:w-[177px] md:w-[157px]"
            src="/images/learnpage/section4_1.svg"
            alt="learn_section2_1_img"
          />
          <img
            className="xl:w-[284px] lg:w-[177px] md:w-[157px]"
            src="/images/learnpage/section4_2.svg"
            alt="learn_section2_2_img"
          />
        </div>

        <div className="relative xl:ml-[40.14px] lg:ml-[40.14px] md:ml-[40.14px] mt-[138px]">
          <p className="text-pointcolor font-pretendard xl:text-2xl lg:text-[20px]  md:text-[16px] font-semibold">
            04
          </p>
          <p className="text-[#E8E8E8] font-pretendard xl:text-[32px] lg:text-[20px] md:text-[16px] font-semibold mt-[6px]">
            나만의{" "}
            <strong className="text-pointcolor font-pretendard xl:text-[32px] lg:text-[20px] md:text-[16px] font-semibold mt-[2px]">
              스토리
            </strong>
            로 만든 에세이 모음집
          </p>
          <p className="mt-[28px] text-white font-pretendard xl:text-[20px] lg:text-[12px] md:text-[10px] ">
            <p>썼던 글을 엮어 에세이 단편선을 만들 수 있어요.</p>

            <span>
              마음에 드는 글을 모으거나, 어울리는 글끼리 엮거나, 이야기가
              이어지는
            </span>
            <br></br>
            <span>
              글을 모아 보거나, 계절감이 맞는 글을 모으는 등 다양하게 스토리
              기능을
            </span>
            <br></br>
            <span>사용해보세요!</span>
          </p>
        </div>
      </section>
      {/* 섹션5 */}
      <section className="relative xl:ml-[363px] xl:mt-[269.35px] lg:mt-[103px] md:mt-[103px] lg:ml-[154px] md:ml-[76px]  mt-[269.35px]  xl:h-[600px] lg:h-[364px] md:h-[364px] flex">
        <div className="relative mt-[84px] xl:mr-[76px] lg:mr-[76px] md:mr-[56px]">
          <p className="text-pointcolor font-pretendard xl:text-2xl lg:text-[20px]  md:text-[16px] font-semibold">
            05
          </p>
          <p className="text-[#E8E8E8] font-pretendard xl:text-[32px] lg:text-[20px] md:text-[16px] font-semibold mt-[6px]">
            링크드아웃한 문장을 모은
          </p>
          <p className="text-pointcolor font-pretendard xl:text-[32px] lg:text-[20px] md:text-[16px] font-semibold mt-[2px]">
            읽기 커뮤니티
          </p>
          <p className="mt-[28px] text-white font-pretendard xl:text-[20px] lg:text-[12px] md:text-[10px] ">
            <p className="leading-[160%]">
              한 문장 읽기, 랜덤 글 읽기 등 다른 아무개가 익명으로 쓴 글을 다양
            </p>

            <p className="leading-[160%]">
              하게 읽어보세요. 다른 아무개들은 어떤 문장으로 글을 시작하고,
            </p>
            <p className="leading-[160%]">어떤 문장으로 글을 마무리할까요?</p>
          </p>
        </div>
        <div className="flex gap-[16px]">
          <img
            className="xl:w-[284px] lg:w-[177px] md:w-[157px]"
            src="/images/learnpage/section5_1.svg"
            alt="learn_section5_1_img"
          />
          <img
            src="/images/learnpage/section5_2.svg"
            alt="learn_section5_2_img"
            className="xl:w-[284px] lg:w-[177px] md:w-[157px]"
          />
        </div>
      </section>
      {/* 섹션 6 */}
      <section className="relative xl:ml-[363px] xl:mt-[269.35px] lg:mt-[103px] md:mt-[103px] lg:ml-[154px] md:ml-[76px]  mt-[269.35px]  xl:h-[600px] lg:h-[364px] md:h-[364px] flex">
        <div className="flex gap-[15.98px] xl:w-[598px] lg:w-[356px] md:w-[356px]">
          <img
            src="/images/learnpage/section6_1.svg"
            alt="learn_section6_1_img"
            className="xl:w-[284px] lg:w-[177px] md:w-[157px]"
          />
          <img
            src="/images/learnpage/section6_2.svg"
            alt="learn_section6_2_img"
            className="xl:w-[284px] lg:w-[177px] md:w-[157px]"
          />
        </div>

        <div className="relative xl:ml-[40.14px] lg:ml-[40.14px] md:ml-[15.14px] mt-[138px]">
          <p className="text-pointcolor font-pretendard xl:text-2xl lg:text-[20px]  md:text-[16px] font-semibold">
            06
          </p>
          <p className="text-[#E8E8E8] font-pretendard xl:text-[32px] lg:text-[20px] md:text-[16px] font-semibold mt-[6px]">
            내가 만들고 내가 즐기는{" "}
            <strong className="text-pointcolor font-pretendard xl:text-2xl lg:text-[20px]  md:text-[16px] font-semibold">
              DIY 버츄얼 서재
            </strong>
          </p>
          <p className="mt-[28px] text-white font-pretendard  xl:text-[20px] lg:text-[12px] md:text-[10px]">
            <p>
              글을 쓰면 쓸수록 메인 페이지를 꾸밀 수 있는 리워드가 주어져요.
            </p>
            <p>
              다양한 글을 쓰면서 나만의 글쓰기 공간을 마음에 들게 꾸며보세요!
            </p>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LearnPage;

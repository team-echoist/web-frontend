import Header from "../../shared/header/Header";
import Footer from "../../shared/footer/Footer";

const AboutPage = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      <Header />
      <div className="flex flex-col items-center">
        <img
          src={"/images/aboutpage/linkedout_banner.gif"}
          alt="linkedout_banner"
          className="xl:mt-[150px] lg:mt-[96px] md:mt-[96px] w-full"
        />
        <section className="xl:mt-[156px] lg:mt-[96px] md:mt-[96px] flex justify-center  items-center ">
          {/* 메인 텍스트 */}
          <div className="xl:text-[64px] lg:text-[34px] md:text-[30px] font-bold leading-[1.6] tracking-[-1.92px] text-left">
            <span className="block">안녕하세요 아무개님!</span>
            <span className="block whitespace-nowrap">링크드아웃할 준비가 되셨나요?</span>
          </div>
          {/* 설명 텍스트 */}
          <div className="xl:text-xl lg:text-[12px] md-[12px] leading-[1.6] space-y-4 xl:ml-[216px] lg:ml-[155px] md:ml-[105px] whitespace-nowrap">
            <p>→ 링크드아웃이란?</p>
            <p>→ 쓰는 것에 대하여</p>
            <p>→ 당신은 어떤 아무개인가요?</p>
            <p>→ 그래서 말이죠.</p>
          </div>
        </section>
        <article className="flex justify-center items-start xl:mt-[217px] lg:mt-[141px] md:mt-[141px]">
          <div className="xl:w-[598px] xl:h-[770px] lg:w-[372px] lg:h-[479px] md:w-[372px] md:h-[479px]  bg-[#1E1E1E]">
            <img
              src="/images/aboutpage/contents/island1.gif"
              alt="island1"
              className="object-cover  object-center h-full w-full "
            />
          </div>
          <div className="p-10 xl:w-[597px] lg:w-[450px] md:w-[371px]">
            <h2 className="xl:text-[39.843px] lg:text-[24px] md:text-[24px] font-semibold leading-[1.6] tracking-[-1.171px]">
              글쓰기 섬, 링크드아웃
            </h2>
            <div className="xl:text-xl lg:text-[12px] md:text-[12px]">
              <p className="mt-[32px]">
                사실 사람들은 눈에 보이지 않는 연결 고리를 서로 달고 살아요.
                나와 가족과의 관계, 직장 동료와의 관계, 친구들과의 관계 등
                생각해야 하는 수많은 연결 고리들이 쌓여있지는 않나요?
                링크드아웃은 일상 속의 여러 관계에서 벗어나 ‘나’를 들여다보는
                글쓰기 무인도예요. 다양한 관계 속에서 솔직하게 하지 못했던
                말들이 차오르거나 참다 못해 가라앉아있는 분들에게 이 초대장을
                보내요. 아무도 없는 섬 안에서 하고 싶은 말을 마음껏 하고, 해보지
                못했던 말을 꺼낼 수 있도록 문을 연 공간이랍니다. 아무개들이
                세상과 단절할 수 있는 혼자만의 섬을 만들고, 섬이 가라앉지 않도록
                열심히 노력할테니 맡겨주세요!
              </p>
              <p className="mt-10">
                p.s. ‘아무개’는 링크드아웃 유저들을 부르는 애칭이에요.
              </p>
            </div>
          </div>
        </article>

        <article className="flex justify-center items-start xl:w-full xl:h-[770px] lg:w-[692px] lg:h-[497px] md:w-[692px] md:h-[497px]">
          <div className="xl:p-10 lg:p-7 md:p-7 xl:w-[557px] lg:w-[361px] md:w-[341px] lg:flex lg:flex-col mr-[50px]  xl:static lg:absolute lg:left-[96px] md:absolute md:left-[40px]">
            <h2 className="xl:text-[39.843px] lg:text-[24px] md:text-[24px] font-semibold leading-[1.6] tracking-[-1.171px]">
              쓰는 것에 대하여
            </h2>
            <div className="xl:text-xl lg:text-[12px] md:text-[12px]">
              <p className="mt-[32px]">
                짧은 컨텐츠를 통해 빠르게 소멸되는 이슈를 ‘알고리즘’으로
                소비하는 시대에 살고 있는 우리가 놓치고 있는 즐거움은
                무엇일까요? 혹시 ‘노(NO) 알고리즘 노(NO) 도파민’ 상태에 노출되어
                있지는 않으신가요? 저희는 알고리즘에 끌려다니지 않아도 도파민을
                터트릴 수 있는 방법을 링크드아웃을 통해 제안하려고 합니다.
                빠르게 생겼다 금방 사라지는 즐거움보다는 백지로 시작해 글을
                쓰고, 읽고, 상상하는 것을 통해 천천히 사유하는 즐거움을 누리는
                것이 링크드아웃이 추구하는 즐거움이랍니다! 오로지 나만의
                시선으로부터 만든 도파민을 터트릴 준비가 되셨나요?
              </p>
            </div>
          </div>
          <div className="xl:w-[598px] xl:h-[770px] lg:w-[372px] lg:h-[479px] md:w-[372px] md:h-[479px] xl:static lg:absolute lg:left-[472px] md:absolute md:left-[402px] bg-[#1E1E1E]">
            <img
              src="/images/aboutpage/contents/island2.gif"
              alt="island1"
              className="object-fill object-center h-full w-full "
            />
          </div>
        </article>

        <article className="flex justify-center items-start mt-[217px]">
          <div className="xl:w-[598px] xl:h-[770px] lg:w-[372px] lg:h-[479px] md:w-[372px] md:h-[479px] bg-[#1E1E1E]">
            <img
              src="/images/aboutpage/contents/island3.gif"
              alt="island1"
              className="object-cover  object-center h-full w-full "
            />
          </div>
          <div className="p-10 xl:w-[597px] lg:w-[450px] md:w-[371px]">
            <h2 className="xl:text-[39.843px] lg:text-[24px] md:text-[24px] font-semibold leading-[1.6] tracking-[-1.171px]">
              당신은 어떤 아무개인가요?
            </h2>
            <div className="xl:text-xl lg:text-[12px]">
              <p className="mt-[32px]">
                글을 쓰는 본인의 모습을 떠올려 보세요. 여기에 100명이 있다면
                반드시 글을 쓰는 100가지의 모습이 있을 거예요. 그 중에는 쓰는
                것을 즐기지 않는 사람도, 쓰는 과정을 고통스러워하는 사람도
                있겠죠. 저희도 모르는 수백수만가지의 글쓰기 유형이 있겠지만
                링크드아웃에서는 아무개님이 서비스를 효과적으로 활용할 수 있도록
                몇가지 유형을 만들어 글쓰기 가이드라인을 제시하려고 해요. 다양한
                아무개들이 ‘쓰는 것’과 친해지고, 재밌는 글쓰기 문화를 함께
                향유하는 것이 링크드아웃의 또다른 목표랍니다!
              </p>
            </div>
          </div>
        </article>

        <article className="flex justify-center items-start  xl:w-full xl:h-[770px] lg:w-[692px] lg:h-[497px] md:w-[692px] md:h-[497px]">
          <div className="xl:p-10 lg:p-7 md:p-7 xl:w-[597px] lg:w-[361px] md:w-[361px]  xl:static lg:absolute lg:left-[96px] md:absolute md:left-[30px]">
            <h2 className="xl:text-[39.843px] lg:text-[24px] md:text-[24px] font-semibold leading-[1.6] tracking-[-1.171px]">
              수많은 나를 알아가는 여정
            </h2>
            <div className="xl:text-xl lg:text-[12px] md:text-[12px]">
              <p className="mt-[32px]">
                하룻밤 사이에 안 좋았던 기분이 좋아지고, 12월 31일에서 1월 1일로
                바뀌었을 뿐인데 어떤 새로운 결심을 하게 되거나 달라진 것 같은
                기분을 느꼈던 적이 있으신가요? 어제의 나와 오늘의 내가 다를 수
                있듯이 사람들은 계속해서 변하고, 텍스트로 표현하기 어려운
                무한가지 감정을 느끼기도 해요. 그 과정 속에 수많은 ‘나’의 모습이
                있겠지만 우리는 흘러가는 시간을 바쁘게 쓰느라 본인의 몇가지
                모습밖에 알지 못합니다. 느껴지는 것을 그대로 표현하는 것에
                두려움을 느끼기도 하는 우리가 진짜 나를 찾을 수 있는 방법은
                [많이 쓰는 것!] 이라고 생각해요. 무한으로 느껴지는 감정이나
                데이터들을 텍스트로, 또 내 마음속에 떠오른 그림을 이 공간에 띄워
                다양한 나의 모습을 글자로 [자주] 마주하는 경험을 해보세요.
                솔직해서 매력적인 아무개님의 다양한 모습을 쉽게 발견할 수 있을
                거예요. 링크드아웃에서는 ‘솔직한 글’을 ‘가장 매력적인 글’이라고
                생각한답니다. 이 공간에서 마음껏 솔직해지는 아무개가 되어주세요!
              </p>
            </div>
          </div>
          <div className="xl:w-[598px] xl:h-[770px] lg:w-[372px] lg:h-[479px] md:w-[372px] md:h-[479px] xl:static lg:absolute lg:left-[472px]  md:absolute md:left-[402px] bg-[#1E1E1E]">
            <img
              src="/images/aboutpage/contents/island4.gif"
              alt="island1"
              className="object-cover  object-center h-full w-full "
            />
          </div>
        </article>
        <Footer/>
      </div>

    </div>
  );
};

export default AboutPage;

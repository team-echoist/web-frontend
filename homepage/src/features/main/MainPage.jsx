import Header from "../../shared/Header";

// 메인 페이지
function MainPage() {
  return (
    <main className="bg-[#0F0F0F] min-h-screen text-white">
      <Header />
      <h1 className="text-white text-5xl font-bold font-['Pretendard'] leading-[76.80px]">다양한 나를 '링크드아웃' 할 수 있는 글쓰기 공간</h1>
      <h3 className="text-white text-2xl font-normal font-['Arial'] leading-[38.40px]">A personal space where you can ‘linked-out’ various types of you.</h3>
      <img src={"/images/mainpage/mockup.png"} alt="mockup" />
      <section className="text-white flex">
      <div>
        <div>
          <p>다양한 관계</p>
          <img src={"/images/mainpage/highlight.png"} alt="highlights" />
        </div>
        <p>:Link</p>
      </div>
      <p>에서 </p>
      <div>
        <div>
          <p>벗어나다</p>
          <img src={"/images/mainpage/highlight.png"} alt="highlights" />
        </div>
        <p>:Out</p>
      </div>
      </section>
      <p className="text-white">링크드아웃에서는 '다양한 관계 속의 나'를 한발짝 떨어져 들여다보는 기회를 글쓰기 경험을 통해 제공하고 있어요.</p>
      <section>
        <div className="flex">
          <div className="mr-8">
            <img src={"/images/mainpage/section_1.svg"} alt="section_1"/>
            <div>
              <span className="text-[#616FED]">01</span>
              <span>쓰는 즐거움을 찾아서, 워밍업 글로키</span>
            </div>
          </div>
          <div>
            <img src={"/images/mainpage/section_2.svg"} alt="section_2" />
            <div>
              <span className="text-[#616FED]">02</span>
              <span>글 맞춤형 옵션 선택</span>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="mr-8">
            <img src={"/images/mainpage/section_3.svg"} alt="section_3" />
            <div>
              <span className="text-[#616FED]">03</span>
              <span>쓸수록 가까워지는 나와의 거리, 감정 해시태그</span>
            </div>
          </div>
          <div>
            <img src={"/images/mainpage/section_4.svg"} alt="section_4" />
            <div>
              <span className="text-[#616FED]">04</span>
              <span>나만의 스토리로 만든 에세이 모음집</span>
            </div>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-8">
            <img src={"/images/mainpage/section_5.svg"} alt="section_5" />
            <div>
              <span className="text-[#616FED]">05</span>
              <span>링크드아웃한 문장을 모은 읽기 커뮤니티</span>
            </div>
          </div>
          <div>
            <img src={"/images/mainpage/section_6.svg"} alt="section_6" />
            <div>
              <span className="text-[#616FED]">06</span>
              <span>내가 만들고 내가 즐기는 DIY 버츄얼 서재</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[518px] bg-[#616FED] text-black">
      <p className="font-semibold text-[#121212] text-[39px] tracking-[-1.17px] leading-[62.5px] whitespace-nowrap">글쓰기 섬, 링크드아웃</p>
        <div className="w-[653px]">
          <span>링크드아웃은 아무개들의 </span>
          <span className="font-bold">개인적인 글쓰기 섬</span>
          <span>이에요.</span>
          <span>글을 써보지 않은 사람, 글을 잘 쓰고 싶어하는 사람, 매일 일기를 남기는 사람, 쌓아둔 감정을 글로 분출하고 싶은 사람, 나만의 글을 차곡차곡 모으고 싶은 사람 등을 위한 무인도랍니다. </span>
          <span className="font-bold">아무개들이 세상과 단절할 수 있는 섬을 만들어 주는 것이 저희 링크드아웃 팀원들의 역할입니다.</span>
        </div>
        <div>
          <img src={"/images/mainpage/arrow.svg"} alt="arrow" />
          <p>About us</p>
        </div>
      </section>
    </main>
  );
}

export default MainPage;

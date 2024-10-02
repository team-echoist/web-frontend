import Header from "../../shared/Header";

// 메인 페이지
function MainPage() {
  return (
    <main className="bg-[#121212] min-h-screen p-12 text-white">
      <Header />
      <h1 className="text-white">다양한 나를 '링크드아웃'할 수 있는 글쓰기 공간</h1>
      <h3 className="text-white">A personal space where you can 'linked-out'various types of you.</h3>
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
          <div>
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
        <div>
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
        <div>
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
      </section>
    </main>
  );
}

export default MainPage;

import Header from "../../shared/Header";

const LearnPage = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      <Header />
      <section>
        <div>
          <p>01</p>
          <p>
            <span>쓰는 즐거움을 찾아서,</span>
            <span>워밍업 글로키</span>
          </p>
          <p>
            <span>글을 쓰는 게 어색하고 시작하기 어려우신가요?</span>
            <span>글로키란 </span>
            <span>글(geul)과 크로키(croquis)의 합성어</span>
            <span>로 글을 본격적으로 쓰기 전, 주어진 상황을 ‘묘사’하거나 ‘상상’을 덧대어 ‘빠르게 스케치’ 하듯이 글을 쓰는 몸풀기를 말합니다. </span>
            <span>AM 12:00 </span>
            <span>마다 주어지는 이미지를 보고 보이는 것들을 묘사하거나 상상을 더해 글로 표현해보세요.</span>
          </p>
        </div>
        <div>
          <img src="/images/learnpage/Frame_1437256257.svg" alt="img" />
          <img src="/images/learnpage/image_2730.svg" alt="img" />
          <img src="/images/learnpage/image_2731.svg" alt="img" />
        </div>
      </section>

      <section>
        <div>
          <img src="/images/learnpage/Frame_1437256257.svg" alt="img" />
          <img src="/images/learnpage/image_2730.svg" alt="img" />
          <img src="/images/learnpage/image_2731.svg" alt="img" />
        </div>

        <div>
          <p>02</p>
          <p>
            글 맞춤형 옵션 선택
          </p>
          <p>
            <p>글의 내용에 따라, 썼을 때 내 마음에 따라 글의 행방을 결정할 수 있어요.</p>
            
            <span>“나만 보고 싶은 글이야!” </span>
            <span>→ 저장</span>
            
            <span>“다른 아무개랑 이 글을 공유하고 싶어” </span>
            <span>→ 발행</span>

            <span>“이 글 다시는 안 읽을거야.. 다른 아무개가 읽어줬으면 해” </span>
            <span>→ linked-out</span>

            <p>유리병 편지를 바다에 띄워 보내는 경험을 링크드아웃을 통해 해보세요.</p>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LearnPage;

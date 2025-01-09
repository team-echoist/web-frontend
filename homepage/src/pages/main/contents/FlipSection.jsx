import React from "react";

function FlipSection() {
  const services = [
    {
      step: "01",

      name: "Diagnostics",

      imageUrl:
        "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      description:
        "State-of-the-art diagnostics to accurately identify vehicle issues.",
    },

    {
      step: "02",

      name: "Repairs",

      imageUrl:
        "https://images.unsplash.com/photo-1687462970787-61d953508926?q=80&amp;w=3087&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      description:
        "Engine overhauls to brake replacements, we ensure high-quality work for your vehicle’s longevity.",
    },

    {
      step: "03",

      name: "Maintenance",

      imageUrl:
        "https://images.unsplash.com/photo-1635437536607-b8572f443763?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      description:
        "Oil changes, tire rotations, and more to enhance performance and prevent future issues.",
    },
  ];

  return (
    <>
      {/* 카드 플립 애니메이션 컴포넌트 */}
      <section>
        <div className="flex ml-[366px] mt-[83.09px]">
          <div className="mr-8">
            <div className="group h-96 w-96 [perspective:1000px]">
              <div className="relative h-[375px] w-[582px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <img
                    src="/images/mainpage/section_1.svg"
                    alt="section_1"
                    className="object-cover cursor-pointer object-left h-full w-full "
                  />
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <img
                      src="/images/mainpage/hideimages/web/1.svg"
                      alt="section_1_back"
                      className="object-cover cursor-pointer object-center h-full w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">01</span>
              <span>쓰는 즐거움을 찾아서, 워밍업 글로키</span>
            </div>
          </div>

          <div className="ml-[200px]">
            <div className="group h-96 w-96 [perspective:1000px]">
              <div className="relative h-[375px] w-[582px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <img
                    src="/images/mainpage/section_2.svg"
                    alt="section_2"
                    className="object-cover cursor-pointer object-left h-full w-full "
                  />
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full bg-black/80  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <img
                      src="/images/mainpage/hideimages/web/2.svg"
                      alt="section_2_back"
                      className="object-cover cursor-pointer object-center h-full w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">02</span>
              <span>글 맞춤형 옵션 선택</span>
            </div>
          </div>
        </div>

        <div className="flex ml-[366px]">
          <div className="mr-8">
            <div className="group h-96 w-96 [perspective:1000px]">
              <div className="relative h-[375px] w-[582px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <img
                    src="/images/mainpage/section_3.svg"
                    alt="section_3"
                    className="object-cover cursor-pointer object-left h-full w-full "
                  />
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full bg-black/80  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <img
                      src="/images/mainpage/hideimages/web/3.svg"
                      alt="section_3_back"
                      className="object-cover cursor-pointer object-center h-full w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">03</span>
              <span>쓸수록 가까워지는 나와의 거리, 감정 해시태그</span>
            </div>
          </div>
          <div className="ml-[200px]">
            <div className="group h-96 w-96 [perspective:1000px]">
              <div className="relative h-[375px] w-[582px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <img
                    src="/images/mainpage/section_4.svg"
                    alt="section_4"
                    className="object-cover cursor-pointer object-left h-full w-full "
                  />
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full bg-black/80  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <img
                      src="/images/mainpage/hideimages/web/4.svg"
                      alt="section_4_back"
                      className="object-cover cursor-pointer object-center h-full w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">04</span>
              <span>나만의 스토리로 만든 에세이 모음집</span>
            </div>
          </div>
        </div>

        <div className="flex ml-[366px] ">
          <div className="mr-8">
            <div className="group h-96 w-96 [perspective:1000px]">
              <div className="relative h-[375px] w-[582px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <img
                    src="/images/mainpage/section_5.svg"
                    alt="section_5"
                    className="object-cover cursor-pointer object-left h-full w-full "
                  />
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <img
                      src="/images/mainpage/hideimages/web/5.svg"
                      alt="section_5_back"
                      className="object-cover cursor-pointer object-center h-full w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">05</span>
              <span>링크드아웃한 문장을 모은 읽기 커뮤니티</span>
            </div>
          </div>
          <div className="ml-[200px]">
            <div className="group h-96 w-96 [perspective:1000px]">
              <div className="relative h-[375px] w-[582px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <img
                    src="/images/mainpage/section_6.svg"
                    alt="section_6"
                    className="object-cover cursor-pointer object-left h-full w-full "
                  />
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full bg-black/80  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <img
                      src="/images/mainpage/hideimages/web/6.webp"
                      alt="section_6_back"
                      className="object-fill cursor-pointer object-center h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[9px] mb-[28px]">
              <span className="text-[#616FED] mr-[5px]">06</span>
              <span>내가 만들고 내가 즐기는 DIY 버츄얼 서재</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FlipSection;

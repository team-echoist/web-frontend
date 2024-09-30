import React, { useEffect } from "react";
import styled from "styled-components";
import { PostCard } from "@/shared/ui/card";
import TempThumbnail from "@/shared/assets/img/도시.jpg";
import { IndicatorBar } from "@/shared/ui/indicator";
import { Essay } from "@/shared/types";
import { useRouter } from "next/navigation";
import { getEssays } from "@/features/showessaydetails/api";

const Layout = styled.div`
  padding: 20px 147px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  all: unset;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  box-shadow: none;
  color: #616fed;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  letter-spacing: 0.16px;
  cursor: pointer;
`;
const IndicatorDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    cursor: pointer;
  }
  svg:hover {
    background-color: #0a0a0a;
    border-radius: 50px;
    padding: 10px 10px;
  }
`;
const NoneContentsDiv = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const P = styled.div`
  color: #424242;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function UnFoldedContents({
  pageType,
  prevId,
}: {
  pageType: string;
  prevId: number;
}) {
  const router = useRouter();

  useEffect(() => {
    getEssayList();
  }, []);

  const getEssayList = async () => {
    try{
      const { data } = await getEssays(1, 4, pageType);
      console.log("list",data)
    }catch(err){
      console.log(err)
    }
   
  };
  const NoneContents = () => {
    return (
      <NoneContentsDiv>
        <P>아직 발행된 글이 없습니다..</P>
      </NoneContentsDiv>
    );
  };
  const navigateAnotherEssay = () => {
    if (prevId) {
      router.push(`/web/essay_details?id=${prevId}&pageType=${pageType}`);
    }
  };
  return (
    <Layout>
      <Button onClick={navigateAnotherEssay}>
        {pageType === "private" ? "이전 글" : "다른 글"}
      </Button>
      <PostCard
        writer="구칠이 아무개"
        title="랜덤글1"
        desc="<p>예상치 못한 실패, 좌절, 엉뚱한 결과를 의도하는 사람은 거의 없을 것이다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 예상치 못한 실패, 좌절, 엉뚱한 결과를 의도하는 사람은 거의 없을 것이다. </p><p><br></p><p><br></p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. </p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 </p><p><br></p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고,</p>"
        time="2024-09-26T01:23:30.954Z"
        imgUrl={TempThumbnail.src}
      />
      <PostCard
        writer="구칠이 아무개"
        title="랜덤글1"
        desc="<p>예상치 못한 실패, 좌절, 엉뚱한 결과를 의도하는 사람은 거의 없을 것이다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 예상치 못한 실패, 좌절, 엉뚱한 결과를 의도하는 사람은 거의 없을 것이다. </p><p><br></p><p><br></p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. </p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 </p><p><br></p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고,</p>"
        time="2024-09-26T01:23:30.954Z"
      />
      <PostCard
        writer="구칠이 아무개"
        title="랜덤글1"
        desc="<p>예상치 못한 실패, 좌절, 엉뚱한 결과를 의도하는 사람은 거의 없을 것이다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 예상치 못한 실패, 좌절, 엉뚱한 결과를 의도하는 사람은 거의 없을 것이다. </p><p><br></p><p><br></p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. </p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 </p><p><br></p><p>적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고, 자신과 세계에 대한 놀라운 깨달음을 얻게 되는 것, 그런 마법같은 순간을 경험하는 것, 바로 그것이다. 그러나 이런 바람은 그야말로 '뜻밖'이어야 가능한 것이기 때문에 애초에 그걸 원한다는 것은 불가능하다. 적어도 표면적으로는 말이다. 그러나 우리의 내면에는 우리가 미처 깨닫지 못하는 강력한 바람이 있다. 여행을 통해 '뜻밖의 사실'을 알게 되고,</p>"
        time="2024-09-26T01:23:30.954Z"
      />
      {/* 인디케이터 자리 */}
      <IndicatorDiv>
        <IndicatorBar step="step1"></IndicatorBar>
      </IndicatorDiv>
    </Layout>
  );
}

export default UnFoldedContents;
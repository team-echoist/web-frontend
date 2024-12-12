import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import styled from "styled-components";
import color from "@/shared/styles/color";
import { Toggle } from "@/shared/ui/toggle";
import { getAlarmSettings } from "@/shared/api/alarm";
import { postAlarmSettings } from "@/shared/api/alarm";

const Layout = styled.nav`
  width: 93%;
`;

const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 40px;
`;
const WhiteText = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 1px;
`;
const Contents = styled.div`
  padding: 12px 52px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Strong = styled.strong`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const ContentItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function Preference({
  handleCloseComponent,
}: {
  handleCloseComponent: () => void;
}) {
  const [toggleState, setToggleState] = useState({
    viewed: false,
    report: false,
    marketing: false,
  });
  const handleToggle = (key: string, value: boolean) => {
    const updatedState = { ...toggleState, [key]: value };
    setToggleState(updatedState);

    fetchEditAlarmSettings(updatedState);
  };

  const fetchGetSettings = async () => {
    try {
      const { data, status } = await getAlarmSettings();

      if (status === 200 || status === 201) {
        setToggleState({
          viewed: data.viewed,
          report: data.report,
          marketing: data.marketing,
        });
      }
    } catch (Err) {
      console.error(Err);
    }
  };
  const fetchEditAlarmSettings = async (state: typeof toggleState) => {
    try {
      await postAlarmSettings(state);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchGetSettings();
  }, []);
  return (
    <Layout>
      <Header title="환경 설정" handleClose={handleCloseComponent} />
      <Contents>
        <H1>글 조회 알림</H1>
        <ContentItem>
          <WhiteText>
            <Strong>발행 또는 링크드아웃된 글</Strong> 조회 알림
          </WhiteText>
          <Toggle
            isOn={toggleState.viewed}
            onToggle={(isOn) => handleToggle("viewed", isOn)}
          />
        </ContentItem>

        <ContentItem>
          <WhiteText>
            <Strong>신고 완료</Strong> 알림
          </WhiteText>
          <Toggle
            isOn={toggleState.report}
            onToggle={(isOn) => handleToggle("report", isOn)}
          />
        </ContentItem>

        <H1>그외 알림</H1>
        <ContentItem>
          <WhiteText>
            <Strong>광고성 마케팅</Strong> 조회 알림
          </WhiteText>
          <Toggle
            isOn={toggleState.marketing}
            onToggle={(isOn) => handleToggle("marketing", isOn)}
          />
        </ContentItem>
      </Contents>
    </Layout>
  );
}

export default Preference;

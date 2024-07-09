"use client";
import { useEffect, useState } from "react";
import { OnBoarding } from "@/pages-flat/onboarding";
import { WebOnBoarding } from "@/pages-flat/web_onboarding";
import { useMediaQuery } from "@/shared/lib/media";
import { useStore } from "@/shared/store";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px;

  font-family: Arial, sans-serif;
`;





export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <OnBoarding />;
  }
  // 브라우저가 렌더링 된후에만 isDestop 값을 설정하고, 아닐경우에는 하나의 컴포먼트만 고정되게 렌더링 되게 한다.
  // 추후 구체적인 사이즈 나오면 재설정 예정
  // return isDesktop ? <WebOnBoarding /> : <Main />;
  return (
    <>
      <OnBoarding />
    </>
  );
  // 현재 웹 온보딩 디자인이 안나왔기때문에 앱기준으로 개발 시작
}

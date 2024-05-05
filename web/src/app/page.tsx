"use client";
import { Main } from "@/pages-flat/main";
import { OnBoarding } from "@/pages-flat/onboarding";
import { useMediaQuery } from "@/shared/lib/media";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  // 추후 구체적인 사이즈 나오면 제설정 예정
  return isDesktop ? <OnBoarding /> : <Main />;
}

"use client";
import { useSearchParams } from "next/navigation";
import { FindInfo } from "./findinfo";
import { LinkedIn } from "./linkein";
import { Login } from "./login";
import { Mypage } from "./mypage";
import { Register } from "./register";
import { WriteEssay } from "./write_essay";
import { NotFound } from "./notfound";

// 이컴포넌트에서 모든 페이지 컴포넌트들의 조건부 렌더링이 실시 된다.

export const RenderView = ({ pageName }: { pageName: string }) => {
  if (!pageName) {
    return <div>Loading...</div>;
  }
  switch (pageName) {
    case "findinfo":
      return <FindInfo />;
    case "linkedin":
      return <LinkedIn />;
    case "login":
      return <Login />;
    case "mypage":
      return <Mypage />;
    case "register":
      return <Register />;
    case "write_essay":
      return <WriteEssay />;
    default:
      return <NotFound />;
  }
};

"use client";
import { FindInfo } from "./findinfo";
import { Login } from "./authentication";
import { Mypage } from "./mypage";
import { Register } from "./register";
import { WriteEssay } from "./write_essay";
import { NotFound } from "./notfound";
import { SignUp } from "./authentication";
import { Complete } from "./authentication";
import { Main } from "./main";

// 이컴포넌트에서 모든 페이지 컴포넌트들의 조건부 렌더링이 실시 된다.

export const RenderView = ({ pageName }: { pageName: string }) => {
  if (!pageName) {
    return <div>Loading...</div>;
  }
  switch (pageName) {
    case "main":
      return <Main />;
    case "findinfo":
      return <FindInfo />;
    case "login":
      return <Login />;
    case "signup":
      return <SignUp />;
    case "complete":
      return <Complete />;
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

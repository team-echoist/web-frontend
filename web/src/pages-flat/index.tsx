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
import { withAuth } from "@/shared/lib/auth";

const ProtectedMain = withAuth(Main);
const ProtectedFindInfo = withAuth(FindInfo);
const ProtectedMypage = withAuth(Mypage);
const ProtectedRegister = withAuth(Register);
const ProtectedWriteEssay = withAuth(WriteEssay);
const ProtectedComplete = withAuth(Complete);


export const RenderView = ({ pageName }: { pageName: string }) => {
  if (!pageName) {
    return <div>Loading...</div>;
  }
  switch (pageName) {
    case "main":
      return <ProtectedMain />;
    case "findinfo":
      return <ProtectedFindInfo />;
    case "login":
      return <Login />;
    case "signup":
      return <SignUp />;
    case "complete":
      return <ProtectedComplete />;
    case "mypage":
      return <ProtectedMypage />;
    case "register":
      return <ProtectedRegister />;
    case "write_essay":
      return <ProtectedWriteEssay />;
    default:
      return <NotFound />;
  }
};


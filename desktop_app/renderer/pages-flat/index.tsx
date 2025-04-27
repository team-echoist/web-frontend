import { FindInfo } from "./findinfo";
import { Login } from "./authentication";
import { Mypage } from "./mypage";
import { WriteEssay } from "./write_essay";
import { SignUp } from "./authentication";
import { Complete } from "./authentication";
import { Main } from "./main";
import { withAuth } from "@/shared/lib/auth";
import { TermsofUse } from "./authentication";
import { MyEssay } from "./my_essay";
import { Community } from "./community";
import { UnfinishedWriting } from "./unfinished_writing";
import { EssayDetail } from "./essay_detail";
import { UserProfile } from "./userprofile";

const ProtectedMain = withAuth(Main);
const ProtectedUnfinishedWriting = withAuth(UnfinishedWriting);
const ProtectedFindInfo = withAuth(FindInfo);
const ProtectedMypage = withAuth(Mypage);
const ProtectedWriteEssay = withAuth(WriteEssay);
const ProtectedComplete = withAuth(Complete);
const ProtectedMyEssay = withAuth(MyEssay);
const ProtectedCommunity = withAuth(Community);
const ProtectedUserProfile = withAuth(UserProfile);


const availablePages = [
  "main",
  "findinfo",
  "login",
  "signup",
  "complete",
  "mypage",
  "register",
  "write_essay",
  "myessay",
  "community",
  "termsofuse",
  "essay_details",
  "unfinished_writing",
  "user_profile",
];

export const getStaticPaths = async () => {
  const paths = availablePages.map((page) => ({
    params: { pagename: page },
  }));

  return { paths, fallback: false };
};

interface RenderViewProps {
  pageName: string;
}

const RenderView: React.FC<RenderViewProps> = ({ pageName }) => {
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
    case "termsofuse":
      return <TermsofUse />;
    case "signup":
      return <SignUp />;
    case "myessay":
      return <ProtectedMyEssay />;
    case "community":
      return <ProtectedCommunity />;
    case "complete":
      return <ProtectedComplete />;
    case "mypage":
      return <ProtectedMypage />;
    case "write_essay":
      return <ProtectedWriteEssay />;
    case "essay_details":
      return <EssayDetail />;
    case "unfinished_writing":
      return <ProtectedUnfinishedWriting />;
    case "user_profile":
      return <ProtectedUserProfile />;
    default:
      return <ProtectedMain />;
  }
};

export default RenderView;

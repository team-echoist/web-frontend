import React from "react";
import { useRouter } from "next/navigation";
import { ActiveSideBar } from "@/features/activesidebar";

function MyEssay() {
  const router = useRouter();
  return (
    <>
     <ActiveSideBar></ActiveSideBar>
      <button
        style={{ width: "300px", height: "300px" }}
        onClick={() => {
          router.push("essay_details?id=2674&pageType=public");
        }}
      >
        테스트용
      </button>
    </>
  );
}

export default MyEssay;

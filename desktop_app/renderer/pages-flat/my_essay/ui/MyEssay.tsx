import React from "react";
import { useRouter } from "next/navigation";

function MyEssay() {
  const router = useRouter();
  return (
    <>
      Essay
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

import React from "react";
import ActiveFooter from "@/features/activeFooter/ui/activeFooter";
import { useRouter } from "next/navigation";

function MyEssay() {
  const router = useRouter();
  return (
    <>
      Essay
      <button
        style={{ width: "300px", height: "300px" }}
        onClick={() => {
          router.push("essay_details?id=2643&pageType=private");
        }}
      >
        테스트용
      </button>
      <div>
        <ActiveFooter />
      </div>
    </>
  );
}

export default MyEssay;
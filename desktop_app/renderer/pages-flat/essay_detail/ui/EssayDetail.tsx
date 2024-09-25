import React from "react";
import CompleteModal from "./contents/CompleteModal";
import { PrevButton } from "@/shared/ui/button";
import { ShowEssayDetails } from "@/features/showessaydetails";
import { useSearchParams } from "next/navigation";

function EssayDetail() {
  const searchParams = useSearchParams();
  const pageType = searchParams.get("pageType");
  return (
    <>
      <CompleteModal />
      <ShowEssayDetails pageType={pageType ?? "publuc"} />
    </>
  );
}

export default EssayDetail;

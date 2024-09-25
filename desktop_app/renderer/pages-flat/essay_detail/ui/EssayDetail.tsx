import React from "react";
import CompleteModal from "./contents/CompleteModal";
import { PrevButton } from "@/shared/ui/button";
import { ShowEssayDetails } from "@/features/showessaydetails";

function EssayDetail() {
  return (
    <>
      <CompleteModal />
      <ShowEssayDetails/>
    </>
  );
}

export default EssayDetail;

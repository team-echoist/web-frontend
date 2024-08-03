"use client";
import React, { useState } from "react";
import { Toggle } from "@/shared/ui/toggle";

export const CheckGrammar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleGrammarCheck = () => {
    setIsChecked(!isChecked);
  };
  return <Toggle onClick={handleGrammarCheck} />;
};

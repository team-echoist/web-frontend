"use client";
import React, { useState, useEffect } from "react";
import DefaultLayout from "./layout/onboardingLayout";
import FirstStepContent from "./content/firstStepContent";
import GeneralContent from "./content/general/generalContent";

export const OnBoarding = () => {
  const [isGifEnded, setIsGifEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGifEnded(true);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);
  return (
    <DefaultLayout>
      {isGifEnded ? <GeneralContent step="step1"/> : <FirstStepContent />}
    </DefaultLayout>
  );
};

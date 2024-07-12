"use client";
import React, { useState, useEffect } from "react";
import DefaultLayout from "./onboardingLayout";
import FirstStepContent from "./firststepcontent";
import GeneralContent from "./generalcontent";

export const OnBoarding = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoEnded(true);
    }, 4000); 

    return () => clearTimeout(timer); 
  }, []);
  console.log("isVideoEnded",isVideoEnded)
  return (
    <DefaultLayout>
      {isVideoEnded ? <GeneralContent /> : <FirstStepContent />}
    </DefaultLayout>
  );
};

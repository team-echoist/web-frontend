"use client";
import React, { useState, useEffect } from "react";
import DefaultLayout from "./layout/onboardingLayout";
import FirstStepContent from "./content/firstStepContent";
import GeneralContent from "./content/general/generalContent";

type StepType = "step1" | "step2" | "step3" | "step4";
const stepObj: { [key: string]: StepType } = {
  "1": "step1",
  "2": "step2",
  "3": "step3",
  "4": "step4",
};

export const OnBoarding = () => {
  const [isGifEnded, setIsGifEnded] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGifEnded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const handleStep = () => {
    if (step < 4) {
      return setStep((prev) => prev + 1);
    } else {
      return;
    }
  };
  return (
    <DefaultLayout onClick={handleStep}>
      {isGifEnded ? (
        <GeneralContent step={stepObj[step.toString()]} />
      ) : (
        <FirstStepContent />
      )}
    </DefaultLayout>
  );
};

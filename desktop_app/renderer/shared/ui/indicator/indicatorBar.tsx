import React from "react";
import IndicatorBarStep1 from "@/shared/assets/img/IndicatorBarStep1.svg"
import IndicatorBarStep2 from "@/shared/assets/img/IndicatorBarStep2.svg"
import IndicatorBarStep3 from "@/shared/assets/img/IndicatorBarStep3.svg"
import IndicatorBarStep4 from "@/shared/assets/img/IndicatorBarStep4.svg"

function IndicatorBar({ step }: { step: string }) {
  const getSvg = () => {
    switch (step) {
      case "step1":
        return <IndicatorBarStep1/>;
      case "step2":
        return <IndicatorBarStep2/>;;
      case "step3":
        return <IndicatorBarStep3/>;;
      case "step4":
        return <IndicatorBarStep4/>;;
      default:
        return <IndicatorBarStep1/>;
    }
  };
  return getSvg();
}

export default IndicatorBar;

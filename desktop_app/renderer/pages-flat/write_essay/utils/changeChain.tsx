import StepZeroGroupRing from "@/shared/assets/img/ring/5chained.svg";
import StepOneGroupRing from "@/shared/assets/img/ring/4chained.webp";
import StepTwoGroupRing from "@/shared/assets/img/ring/3chained.webp";
import StepThreeGroupRing from "@/shared/assets/img/ring/2chained.webp";
import StepFourGroupRing from "@/shared/assets/img/ring/1chained.webp";
import StepFiveGroupRing from "@/shared/assets/img/ring/0chained.webp";
import StepOneSingleRing from "@/shared/assets/img/loop.svg";
import StepTwoSingleRing from "@/shared/assets/img/ring/single2ring.webp";
import StepThreeSingleRing from "@/shared/assets/img/ring/single3ring.webp";
import Image from "next/image";

function changeGroupChain(action: string) {
  switch (action) {
    case "zero":
      return <StepZeroGroupRing />;
    case "one":
      return <img src={StepOneGroupRing.src} alt="Step One Group Ring" />;
    case "two":
      return <img src={StepTwoGroupRing.src} alt="Step Two Group Ring" />;
    case "three":
      return <img src={StepThreeGroupRing.src} alt="Step Three Group Ring" />;
    case "four":
      return <img src={StepFourGroupRing.src} alt="Step Four Group Ring" />;
    case "five":
      return <img src={StepFiveGroupRing.src} alt="Step Five Group Ring" />;
    default:
      return <StepZeroGroupRing />;
  }
}
function changeSingleChain(action: string) {
  switch (action) {
    case "zero":
      return null;
    case "one":
      return <StepOneSingleRing />;
    case "two":
      return <img src={StepTwoSingleRing.src} alt="Step Two single Ring" />;
    case "three":
      return <img src={StepThreeSingleRing.src} alt="Step Three single Ring" />;
    case "four":
      return null;
    case "five":
      return null;
    default:
      return null;
  }
}
export { changeGroupChain, changeSingleChain };

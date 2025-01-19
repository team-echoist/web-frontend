import React from "react";
import MobileBanner from "./MobileBanner";
import MobileDesc from "./MobileDesc";
import MobileFlipSection from "./MobileFlipSection";
import MobileFooter from "./MobileFooter";

function index({
  handleDesktopOpen,
  handlePrepare,
  isDesktopOpen,
  setIsDesktopOpen,
  handleNavigation
}) {
  return (
    <div w-full className="absolute top-[145.54px] overflow-x-hidden">
      <MobileBanner
        handlePrepare={handlePrepare}
        handleDesktopOpen={handleDesktopOpen}
        isDesktopOpen={isDesktopOpen}
        setIsDesktopOpen={setIsDesktopOpen}
      />
      <MobileDesc />
      <MobileFlipSection />
      <MobileFooter handleNavigation={handleNavigation}/>
    </div>
  );
}

export default index;

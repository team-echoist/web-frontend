import React from "react";
import WebBanner from "./WebBanner";
import WebDesc from "./WebDesc";
import WebFooter from "./WebFooter";
import FlipSection from "./FlipSection";

function index({
  handleDesktopOpen,
  handlePrepare,
  isDesktopOpen,
  setIsDesktopOpen,
}) {
  return (
    <>
      <WebBanner
        handlePrepare={handlePrepare}
        handleDesktopOpen={handleDesktopOpen}
        isDesktopOpen={isDesktopOpen}
        setIsDesktopOpen={setIsDesktopOpen}
      />
      <WebDesc />
      <FlipSection />
      <WebFooter />
    </>
  );
}

export default index;

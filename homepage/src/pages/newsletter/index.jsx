import React from "react";
import { useState, useEffect } from "react";
import Newsletter from "./web/NewsLetter";
import MobileNews from "./mobile/MobileNews";


function Index() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>{isMobile ? <MobileNews></MobileNews> : <Newsletter></Newsletter>}</>
  );
}

export default Index;

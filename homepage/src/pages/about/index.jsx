import React from "react";
import { useState, useEffect } from "react";
import WebAbout from "./web/AboutPage";
import MobileAbout from "./mobile/MobileAbout";

function About() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileAbout /> : <WebAbout />}</>;
}

export default About;

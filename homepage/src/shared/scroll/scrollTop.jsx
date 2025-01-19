import React, { useEffect, useState } from "react";

function ScrollTop({ bottom = "70px" }) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setVisible(scrollTop > 300);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Set initial state
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed ${isMobile ? "right-2" : "right-12"} w-[55px] h-[55px] cursor-pointer z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ bottom: bottom }}
      onClick={scrollToTop}
    >
      <img
        src="/images/scrollTop.webp"
        alt="Scroll to top"
        width={55}
        height={55}
      />
    </div>
  );
}

export default ScrollTop;
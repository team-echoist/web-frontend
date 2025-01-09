import React, { useEffect, useState } from "react";

function ScrollTop({ bottom = "70px" }) {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed right-12  cursor-pointer z-50 transition-opacity duration-300 ${
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

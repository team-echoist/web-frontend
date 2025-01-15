import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileHeader from "./mobile_header/MobileHeader";


const Header = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // 초기화
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const linkClasses = (path) =>
    `xl:mx-[51px] xl:my-[52px] lg:mx-[26px] lg:my-[26px] md:mx-[26px] md:my-[26px] p-2 font-normal ${
      activePath === path ? "text-white" : "text-[#919191]"
    }`;
    if (isMobile) {
      return <MobileHeader />;
    }
  return (
    <nav className="flex h-[83px] bg-[#0F0F0F] justify-between items-center text-[20px] text-[#121212] xl:px-[43.94px] xl:py-[60px] lg:px-[60px] lg:py-[24px]  md:px-[20px] md:py-[24px] font-normal">
      <Link to="/">
        <img
          src="/images/logo.svg"
          alt="로고"
          width={154}
          height={63.179}
          className="py-[19.744px] xl:w-[154px] lg:w-[95.769px] md:w-[95.769px] sm:w-[95.769px]"
        />
      </Link>
      <div className="xl:text-[20px] lg:text-[12px] md:text-[10px] ">
        <Link cl to="/about" className={linkClasses("/about")}>
          About
        </Link>
        <Link to="/learn" className={linkClasses("/learn")}>
          Learn
        </Link>
        <Link
          to="/premium"
          className={linkClasses("/premium")}
        >
          Premium
        </Link>
        <Link to="/newsletter" className={linkClasses("/newsletter")}>
          Newsletter
        </Link>
      </div>
      <Link to="/">
        <p className="xl:w-[143px] xl:h-[46px] lg:w-[90px] md:w-[60px] lg:h-[30px] xl:text-[20px] lg:text-[12px] md:text-[10px] rounded-2xl bg-white text-[#121212] flex justify-center items-center font-normal cursor-pointer">
          Get the App
        </p>
      </Link>
    </nav>
  );
};

export default Header;

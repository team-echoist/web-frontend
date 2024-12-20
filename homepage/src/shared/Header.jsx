import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const [activePath, setActivePath] = useState("");

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    const linkClasses = (path) => `mx-[51px] my-[52px] p-2 font-normal ${activePath === path ? "text-white" : "text-[#919191]"}`;

    const handlePremiumClick = (event) => {
        event.preventDefault();
        alert("서비스 준비중입니다.");
    };

    return (
            <nav className="flex bg-[#0F0F0F] justify-between items-center text-[20px] text-[#121212] px-10 font-normal">
                <Link to="/">
                    <img src="/images/logo.svg" alt="로고" width={154} height={63.179} className="py-[19.744px]" />
                </Link>
                <div>
                    <Link to="/about" className={linkClasses("/about")}>
                        About
                    </Link>
                    <Link to="/learn" className={linkClasses("/learn")}>
                        Learn
                    </Link>
                    <Link to="/premium" onClick={handlePremiumClick} className={linkClasses("/premium")}>
                        Premium
                    </Link>
                    <Link to="/newsletter" className={linkClasses("/newsletter")}>
                        Newsletter
                    </Link>
                </div>
                <p className="w-[143px] h-[46px] rounded-2xl bg-white text-[#121212] flex justify-center items-center font-normal">
                    Get the App
                </p>
            </nav>
    );
}

export default Header;

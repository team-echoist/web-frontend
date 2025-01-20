import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigation = (path) => {
    setIsMenuOpen(false); // 메뉴 닫기
    navigate(path); // 라우팅
  };

  return (
    <>
      {/* 햄버거 버튼 */}
      <button onClick={toggleMenu} className="z-50">
        <img
          src="/images/mobile/menu/bugerBtn.svg"
          alt="hambuger_menu"
          className="w-[24px] h-[24px] absolute top-[68px] left-[20px]"
        />
      </button>
      {/* 메뉴 */}
      <div
        className={`fixed top-0 left-0 h-full w-[160px] bg-[#0F0F0F] text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-[64px] left-[20px] text-white"
        >
          <img
            src="/images/mobile/menu/closeBtn.svg"
            alt="menu_close"
            className="w-[32px] h-[32px] fixed"
          />
        </button>
        <nav className="fixed top-[137px] pl-[20px] text-[20px]">
          <ul>
            <li className="mb-4">
              <button
                onClick={() => handleNavigation("/")}
                className="text-white"
              >
                Home
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => handleNavigation("/about")}
                className="text-white"
              >
                About
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => handleNavigation("/learn")}
                className="text-white"
              >
                Learn
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => handleNavigation("/premium")}
                className="text-white"
              >
                Premium
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => handleNavigation("/newsletter")}
                className="text-white"
              >
                Newsletter
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileHeader;

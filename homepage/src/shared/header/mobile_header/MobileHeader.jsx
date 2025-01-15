import React, { useState } from "react";
import { Link } from "react-router-dom";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* 햄버거 버튼 */}
      {!isMenuOpen && (
        <button onClick={toggleMenu} className="z-50">
          <img
            src="/images/mobile/menu/bugerBtn.svg"
            alt="hambuger_menu"
            className="w-[24px] h-[24px] absolute top-[68px] left-[20px]"
          />
        </button>
      )}
      {/* 메뉴 */}
      {/* 메뉴바 */}
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
              <Link to="/" >
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/about" >
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/learn" >
                Learn
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/premium" >
                Premium
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/newsletter">
                Newsletter
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileHeader;

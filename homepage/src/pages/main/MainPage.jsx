import Header from "../../shared/header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ColorToast from "../../shared/toast/Toast";
import Mobile from "./contents/mobile";
import Web from "./contents/web";

// 메인 페이지
function MainPage() {
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleDesktopOpen = () => {
    if (window.innerWidth <= 1024) {
      setToastMsg("데스크탑에서만 이용 가능합니다.");
      setIsToastOpen(true);
      setIsDesktopOpen(false);
    } else {
      setIsDesktopOpen((prev) => !prev);
    }
  };
  const handlePrepare = () => {
    setToastMsg("준비중 입니다.");
    setIsToastOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-[#0F0F0F] w-screen min-h-screen text-white">
      <ColorToast
        text={toastMsg}
        onClose={() => {
          setIsToastOpen(false);
        }}
        isShowToast={isToastOpen}
      />
      <Header />
      {isMobile ? (
        <>
          <Mobile
            handlePrepare={handlePrepare}
            handleDesktopOpen={handleDesktopOpen}
            isDesktopOpen={isDesktopOpen}
            setIsDesktopOpen={setIsDesktopOpen}
            handleNavigation={handleNavigation}
          />
        </>
      ) : (
        <>
          <Web
            handlePrepare={handlePrepare}
            handleDesktopOpen={handleDesktopOpen}
            isDesktopOpen={isDesktopOpen}
            setIsDesktopOpen={setIsDesktopOpen}
            handleNavigation={handleNavigation}
          />
        </>
      )}
   
    </main>
  );
}

export default MainPage;

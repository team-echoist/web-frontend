import React, { useEffect, useState } from "react";
import ScrollTopIcon from "@/shared/assets/img/scrollTop.webp";
import Image from "next/image";
import styled from "styled-components";

const ScrollTopButton = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 70px;
  right: 51px;
  display: ${({ visible }) => (visible ? "block" : "none")};
  cursor: pointer;
`;

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    console.log(scrollTop);
    setVisible(scrollTop > 300);
    window.Electron.ipcRenderer.send("scroll-event", scrollTop);
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
  }, [window.scrollY]);
  return (
    <ScrollTopButton visible={visible} onClick={scrollToTop} >
      <Image src={ScrollTopIcon} alt="Scroll to top" width={50} height={50} />
    </ScrollTopButton>
  );
}

export default ScrollTop;

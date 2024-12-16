"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AlarmButton } from "@/shared/ui/button";
import WriteButtonSVG from "@/shared/assets/img/write_icon.svg";
import HomeImg from "@/shared/assets/img/mainroom.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ActiveAlarmList } from "@/features/activeAlarmModal";
import { ActiveSideBar } from "@/features/activesidebar";
import { Geuloquis } from "@/features/activeGeulroquis";
import { getGeuloquis } from "@/shared/api/home";
import Bulb from "@/shared/assets/img/geuloquis/GeulRoquis_bulb.gif";

const StyledWriteButton = styled(WriteButtonSVG)`
  position: absolute;
  left: 92.5%;
  top: 85.89%;
  z-index: 10;
  cursor: pointer;
`;

const Container = styled.main<{ ismodalopen: boolean }>`
  width: ${({ ismodalopen }) =>
    ismodalopen ? "calc(100vw - 390px)" : "100vw"};
  font-family: Arial, sans-serif;
  position: fixed;
  top: 32px;
  left: 0px;
  transition: width 0.3s ease;
  overflow-x: hidden;
`;

const HomeDiv = styled.div`
  width: 100%;
  height: 98vh;
  position: relative;
`;
const BulbBtn = styled.button`
  all: unset;
  position: absolute;
  left: 60%;
  z-index: 10;
  top: 32%;
  cursor: pointer;
`;
export const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenGeuloque, setIsOpenGeuloque] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [isShowBulb, setIsShowBulb] = useState(false);
  const pendignGeuloquis = localStorage.getItem("pendignGeuloquis");
  const router = useRouter();

  const handleClick = () => {
    router.push("/web/write_essay");
  };

  const handleAlarmButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleGeuloque = () => {
    setIsOpenGeuloque((prev) => !prev);
  };
  useEffect(() => {
    // 보류일때
    if (pendignGeuloquis && pendignGeuloquis === "true") {
      setIsShowBulb(true);
    }
  }, [pendignGeuloquis]);
  useEffect(() => {
    // 하루에한번 처음 마운트될때만 글로키 나오게
    const checkAndFetchGeuloquis = async () => {
      const lastFetchDate = localStorage.getItem("lastFetchDate");
      const today = new Date().toISOString().split("T")[0];

      if (lastFetchDate !== today) {
        await fetchGeuloquis();
        localStorage.setItem("lastFetchDate", today);
      } else {
        const storedUrl = localStorage.getItem("geuloqueUrl");
        if (storedUrl) {
          setUrl(storedUrl);
        }
      }
    };

    checkAndFetchGeuloquis();
  }, []);

  const fetchGeuloquis = async () => {
    try {
      const { url, status } = await getGeuloquis();
      if (status === 200 || status === 201) {
        setUrl(url);
        localStorage.setItem("geuloqueUrl", url);
        setIsOpenGeuloque(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Geuloquis
        isAlertOpen={isModalOpen}
        isOpenGeuloque={isOpenGeuloque}
        handleGeuloque={handleGeuloque}
        url={url}
      />
      <ActiveSideBar isModalOpen={isModalOpen} />
      {isModalOpen && (
        <ActiveAlarmList
          isModalOpen={isModalOpen}
          handleAlarmButtonClick={handleAlarmButtonClick}
        />
      )}
      <Container ismodalopen={isModalOpen}>
        <HomeDiv>
          {!isModalOpen && (
            <>
              <StyledWriteButton onClick={handleClick} />
              <AlarmButton onClick={handleAlarmButtonClick} />
            </>
          )}
          {isShowBulb && (
            <BulbBtn onClick={handleGeuloque}>
              <Image alt="bulb_icon" src={Bulb} width={80} height={80} />
            </BulbBtn>
          )}

          <Image alt="home" src={HomeImg} fill />
        </HomeDiv>
      </Container>
    </>
  );
};

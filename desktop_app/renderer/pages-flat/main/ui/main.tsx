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
import { Update } from "@/features/activeUpdateModal";
import { getLatestReleases } from "@/shared/api/update";
import { NoticeModal } from "@/features/activeNoticeModal";
import { getNotices } from "@/shared/api/notice";

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
  const [isGeuloqueModalOpen, setIsGeuloqueModalOpen] = useState(false);
  const [isOpenGeuloque, setIsOpenGeuloque] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [isShowBulb, setIsShowBulb] = useState(false);
  const [isShowReleases, setIsShowReleases] = useState(false);
  const [isShowNotice, setIsShowNotice] = useState(false);
  const pendingGeuloquis = localStorage.getItem("pendingGeuloquis");
  const router = useRouter();

  const handleClick = () => {
    router.push("/web/write_essay");
  };

  const handleAlarmButtonClick = () => {
    setIsGeuloqueModalOpen(!isGeuloqueModalOpen);
  };
  const handleGeuloque = () => {
    setIsOpenGeuloque((prev) => !prev);
  };
  useEffect(() => {
    const checkAndFetchReleases = () => {
      const lastFetchDate = localStorage.getItem("lastFetchReleaseDate");
      const today = new Date().toISOString().split("T")[0];

      if (lastFetchDate !== today) {
        fetchLatestReleases();
        localStorage.setItem("lastFetchReleaseDate", today);
      }
    };

    checkAndFetchReleases();
  }, []);
  useEffect(() => {
    const checkAndFetchReleases = () => {
      const lastFetchDate = localStorage.getItem("lastFetchNoticeDate");
      const today = new Date().toISOString().split("T")[0];

      if (lastFetchDate !== today) {
        fetchNotices();
        localStorage.setItem("lastFetchNoticeDate", today);
      }
    };

    checkAndFetchReleases();
  }, []);

  const fetchNotices = async () => {
    try {
      const { data, status } = await getNotices();
      if (status === 200 || status === 201) {
        if (data === null) {
          setIsShowNotice(false);
        } else {
          setIsShowNotice(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLatestReleases = async () => {
    try {
      const { data, status } = await getLatestReleases();
      if (status === 200 || status === 201) {
        if (data === null) {
          setIsShowReleases(false);
        } else {
          setIsShowReleases(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // 보류일때
    if (pendingGeuloquis && pendingGeuloquis === "true") {
      setIsShowBulb(true);
    }
  }, [pendingGeuloquis]);
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

  const fetchGeuloquis = async (isOneMoreTime?: boolean) => {
    try {
      const { url, status } = await getGeuloquis();
      if (status === 200 || status === 201) {
        setUrl(url);
        localStorage.setItem("geuloqueUrl", url);
        if (!isOneMoreTime) {
          setIsOpenGeuloque(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {isShowReleases && (
        <Update
          onClose={() => {
            setIsShowReleases(false);
          }}
        />
      )}
      {isShowNotice && (
        <NoticeModal
          onClose={() => {
            setIsShowNotice(false);
          }}
        />
      )}
      <Geuloquis
        isAlertOpen={isGeuloqueModalOpen}
        isOpenGeuloque={isOpenGeuloque}
        handleGeuloque={handleGeuloque}
        url={url}
      />
      <ActiveSideBar isModalOpen={isGeuloqueModalOpen} />
      {isGeuloqueModalOpen && (
        <ActiveAlarmList
          isModalOpen={isGeuloqueModalOpen}
          handleAlarmButtonClick={handleAlarmButtonClick}
        />
      )}
      <Container ismodalopen={isGeuloqueModalOpen}>
        <HomeDiv>
          {!isGeuloqueModalOpen && (
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

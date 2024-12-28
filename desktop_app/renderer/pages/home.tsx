"use client";
import { useState, useEffect } from "react";
import { OnBoarding } from "../pages-flat/onboarding";
import { Loading } from "@/features/activeLoading";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/shared/api";
import { fetchData } from "@/shared/api/fetchData";
import { useStore } from "@/shared/store";

interface Tokens {
  accessToken: string | null;
  refreshToken: string | null;
}
export default function HomeClient() {
  const [tokens, setTokens] = useState<Tokens>({
    accessToken: null,
    refreshToken: null,
  });
  const setUser = useStore((state) => state.setUser);
  const router = useRouter();

  const handleUserInfo = async () => {
    try {
      let newDeviceId: string | undefined;
      let newFcmToken: string | undefined;

      const deviceIdPromise = new Promise<string>((resolve) => {
        const handleDeviceInfo = (data: string) => {
          newDeviceId = data;
          resolve(data);
        };
        window.Electron?.requestDeviceInfo();
        window.Electron?.onDeviceInfo(handleDeviceInfo);
      });

      const fcmTokenPromise = new Promise<string>((resolve) => {
        window.Electron?.getFCMToken("getFCMToken", (_: any, token: string) => {
          newFcmToken = token;
          resolve(token);
        });
      });

      await Promise.all([deviceIdPromise, fcmTokenPromise]);
      if (newDeviceId && newFcmToken) {
        const userData = await getUserInfo();
        const body = { uid: newDeviceId, fcmToken: newFcmToken };
        if (userData) {
          setUser(userData);
          if (userData.isFirst) {
            // await fetchData("support/devices/register", "post", body);
            // redirectToPage(true);
            // return;
            try {
              await fetchData("support/devices/register", "post", body);
              redirectToPage(true);
              return;
            } catch (fetchError) {
              console.error(
                "Error registering device for first-time user:",
                fetchError
              );
              alert("기기 등록 중 오류가 발생했습니다.");
              return;
            }
          }

          const deviceExists = userData.devices?.some(
            (device) => device?.uid === newDeviceId
          );

          if (!deviceExists) {
            try {
              await fetchData("support/devices/register", "post", body);
              redirectToPage(false);
            } catch (fetchError) {
              console.error(
                "Error registering device for existing user:",
                fetchError
              );
              alert("기기 등록 중 오류가 발생했습니다.");
            }
          }
          redirectToPage(false);
        }
      } else {
        const userData = await getUserInfo();

        // fcm 토큰없을때 예외처리
        if (userData) {
          setUser(userData);
          redirectToPage(false);
        }
      }
    } catch (error) {
      console.error("Error in handleUserInfo:", error);
    }
  };

  const redirectToPage = (isFirstLogin: boolean) => {
    if (isFirstLogin) {
      router.push("/web/termsofuse");
    } else {
      router.push("/web/main");
    }
  };

  const handleLogin = async (accessToken: string, refreshToken: string) => {
    try {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("isOauth", "yes");

      await handleUserInfo();
    } catch (err) {
      console.log("handleLogin error:", err);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    const refreshToken = urlParams.get("refreshToken");
    const localAccessToken = localStorage.getItem("accessToken");
    const localRefreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      setTokens({ accessToken, refreshToken });
      handleLogin(accessToken, refreshToken);
    }
    if (localAccessToken && localRefreshToken) {
      setTokens({
        accessToken: localAccessToken,
        refreshToken: localRefreshToken,
      });
      redirectToPage(false);
    }
  }, []);

  return <>{tokens.accessToken ? <Loading /> : <OnBoarding />}</>;
}

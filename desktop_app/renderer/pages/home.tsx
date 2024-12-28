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
  const [isLoading, setIsLoading] = useState(false);
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
      console.log("3",newDeviceId,newDeviceId);
      if (newDeviceId && newFcmToken) {
        const userData = await getUserInfo();
        const body = { uid: newDeviceId, fcmToken: newFcmToken };
        console.log("4");
        if (userData) {
          setUser(userData);
          console.log("5");
          if (userData.isFirst) {
            console.log("6");
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
            console.log("7");    // await fetchData("support/devices/register", "post", body);
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
        console.log("8"); 
        // fcm 토큰없을때 예외처리
        if (userData) {
          console.log("9"); 
          setUser(userData);
          redirectToPage(false);
        }
      }
    } catch (error) {
      console.log("8");
      console.error("Error in handleUserInfo:", error);
    }
  };

  const redirectToPage = (isFirstLogin: boolean) => {
    console.log("9");
    if (isFirstLogin) {
      router.push("/web/termsofuse");
    } else {
      router.push("/web/main");
    }
  };

  const handleLogin = async (accessToken: string, refreshToken: string) => {
    try {
      setIsLoading(true);
      console.log("2");
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("isOauth", "yes");

      await handleUserInfo();
    } catch (err) {
      console.log("handleLogin error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    const refreshToken = urlParams.get("refreshToken");
    setTokens({ accessToken, refreshToken });

    if (accessToken && refreshToken) {
      console.log("1");
      handleLogin(accessToken, refreshToken);
    }
  }, []);
  return <>{isLoading ? <Loading /> : <OnBoarding />}</>;
}

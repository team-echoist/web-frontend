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
        const body = { uid: newDeviceId, newFcmToken };

        if (userData) {
          setUser(userData);

          if (userData.isFirst) {
            await fetchData("support/devices/register", "post", body);
            redirectToPage(true);
            return;
          }

          const deviceExists = userData.devices?.some(
            (device) => device?.uid === newDeviceId
          );
          if (!deviceExists) {
            await fetchData("support/devices/register", "post", body);
          }
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
    setTokens({ accessToken, refreshToken });

    if (accessToken && refreshToken) {
      handleLogin(accessToken, refreshToken);
    }
  }, []);
  return <>{tokens.refreshToken ? <Loading /> : <OnBoarding />}</>;
}

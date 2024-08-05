"use client";
import RenderView from "@/pages-flat/index";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function Index() {
  const [pageName, setPageName] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const [fcmToken, setFcmToken] = useState("");
  const [machineId, setMachineId] = useState("");

  useEffect(() => {
    const handleDeviceInfo = (data: string) => {
      setMachineId(data);
    };

    window.electron.onDeviceInfo(handleDeviceInfo);
    window.electron.requestDeviceInfo();
    window.electron?.getFCMToken(
      "getFCMToken",
      (_: any, token: SetStateAction<string>) => {
        setFcmToken(token);
      }
    );
  }, []);

  console.log("머신", machineId);
  useEffect(() => {
    const pagename = searchParams.get("pagename");
    if (pagename) {
      setPageName(pagename);
    }
  }, [router, searchParams]);

  return (
    <>{pageName ? <RenderView pageName={pageName} /> : <div>Loading...</div>}</>
  );
}

export default Index;

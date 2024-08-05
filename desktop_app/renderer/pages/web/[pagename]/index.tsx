"use client";
import RenderView from "@/pages-flat/index";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";





function Index() {
  const [pageName, setPageName] = useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const [fcmToken, setFcmToken] = useState('');
  const [machineId, setMachineId] = useState('');

  console.log("machineId",machineId)

  useEffect(() => {

    console.log("window", window.electron);

    const handleDeviceInfo = (data: string) => {
      console.log("Device info received:", data);
      setMachineId(data);
    };

    window.electron.onDeviceInfo(handleDeviceInfo);
    window.electron.requestDeviceInfo();
    window.electron?.getFCMToken('getFCMToken', (_: any, token: SetStateAction<string>) => {
      console.log("token", token);
      setFcmToken(token);
    });


    // window.electron.ipcRenderer.on('machine-id', handleMachineId);

    // return () => {
    //   // Cleanup the listener when the component is unmounted
    //   window.electron.ipcRenderer.removeListener('machine-id', handleMachineId);
    // };
  }, []);

  console.log("머신",machineId)
  useEffect(() => {
    const pagename = searchParams.get('pagename');
    if (pagename) {
      setPageName(pagename);
    }
  }, [router, searchParams]);



  return (
    <>
      {pageName ? <RenderView pageName={pageName} /> : <div>Loading...</div>}
    </>
  );
}

export default Index;
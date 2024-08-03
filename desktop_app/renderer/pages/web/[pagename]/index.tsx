"use client";
import RenderView from "@/pages-flat/index";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";





function Index() {
  const [pageName, setPageName] = useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const [fcmToken, setFcmToken] = useState("");

  useEffect(() => {
    window.electron?.getFCMToken('getFCMToken', (_: any, token: SetStateAction<string>) => {
      console.log("token",token)
      setFcmToken(token);
    });
  
  }, []);

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
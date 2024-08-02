"use client";
import RenderView from "@/pages-flat/index";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/shared/api";
import { parseJwt } from "@/shared/lib/jwt";
import { useStore } from "@/shared/store";
import { useRouter, useSearchParams } from "next/navigation";

function Index() {
  const setUser = useStore((state) => state.setUser);
  const [token, setToken] = useState<string | null>(null);
  const [pageName, setPageName] = useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token") || Cookies.get("token");
    if (storedToken) {
      setToken(storedToken);
    }

    const pagename = searchParams.get('pagename');
    if (pagename) {
      setPageName(pagename);
    }
  }, [router, searchParams]);

  useEffect(() => {
    const handleUserAuthentication = async () => {
      if (token) {
        const userInfo = parseJwt(token);
        const userData = await getUserInfo(userInfo?.id);
        if (userData) {
          setUser(userData);
        }
      }
    };
    handleUserAuthentication();
  }, [setUser, token, router]);

  return (
    <>
      {pageName ? <RenderView pageName={pageName} /> : <div>Loading...</div>}
    </>
  );
}

export default Index;
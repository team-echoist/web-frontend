"use client";
import { RenderView } from "@/pages-flat";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { getUserInfo } from "@/shared/api";
import { parseJwt } from "@/shared/lib/jwt";
import { useStore } from "@/shared/store";
import { useRouter } from "next/navigation";

type PageParams = {
  pagename: string;
};

function Index({ params }: { params: PageParams }) {
  const setUser = useStore((state) => state.setUser);
  const token = sessionStorage.getItem("token") || Cookies.get("token");
  const router = useRouter();
  useEffect(() => {
    const handleUserAuthentication = async () => {
      if (token) {
        const userInfo = parseJwt(token);
        const userData = await getUserInfo(userInfo?.id);
        if (userData) {
          setUser(userData);
          // router.push("/web/main");
        }
      } else {
        // router.push("/web/login");
      }
    };
    handleUserAuthentication();
  }, [setUser, token, router]);

  return (
    <>
      <RenderView pageName={params.pagename} />
    </>
  );
}

export default Index;

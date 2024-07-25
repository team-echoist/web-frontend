"use client";
import { RenderView } from "@/pages-flat";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { getUserInfo } from "@/shared/api";
import { parseJwt } from "@/shared/lib/jwt";
import useStore from "@/shared/store/store";


type PageParams = {
  pagename: string;
};

function Index({ params }: { params: PageParams }) {
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = sessionStorage.getItem("token") || Cookies.get("token");
      if (token) {
        try {
          const userInfo = parseJwt(token);
          const userData = await getUserInfo(userInfo?.id);
          if (userData) {
            setUser(userData);
          }
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      } else {
        console.error("No token found");
      }
    };

    fetchUserInfo();
  }, [setUser]);

  return (
    <>
      <RenderView pageName={params.pagename} />
    </>
  );
}

export default Index;
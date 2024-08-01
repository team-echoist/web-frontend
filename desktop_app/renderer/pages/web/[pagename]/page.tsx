import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import RenderView from "@/pages-flat/index";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/shared/api";
import { parseJwt } from "@/shared/lib/jwt";
import { useStore } from "@/shared/store";
import { useRouter } from "next/router";

interface PageParams extends ParsedUrlQuery {
  pagename: string;
}

interface Props {
  params: PageParams;
}

const Index: NextPage<Props> = ({ params }) => {
  const setUser = useStore((state) => state.setUser);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token") || Cookies.get("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [router]);

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
      <RenderView pageName={params.pagename} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { pagename } = context.params as PageParams;

  return {
    props: {
      params: {
        pagename,
      },
    },
  };
};

export default Index;

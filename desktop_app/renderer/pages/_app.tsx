import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import Layout from "./layout";
import { useRouter } from "next/router";
import { Loading } from "@/features/activeLoading";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  //  모든페이지가 렌더링 될때 먼저 세팅됨
  return (
    <Layout>
      {loading && <Loading/>}
      <Component {...pageProps} />
    </Layout>
  );
}

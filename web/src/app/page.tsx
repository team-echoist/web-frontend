import { metadata as pageMetadata } from "./server-layout";
import HomeClient from "./homeClient";

export const metadata = pageMetadata;

export default function Home() {
  return (
    <>
      <HomeClient />
    </>
  );
}

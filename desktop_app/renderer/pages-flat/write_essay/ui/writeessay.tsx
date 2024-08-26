import React, { useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import TitleField from "./TitleField";

const Editor = dynamic(
  () => import("@/shared/ui/editor").then((mod) => mod.Editor),
  { ssr: false }
);

const Layout = styled.main`
  margin-top: 32px;
  width: 100vw;
`;

export const WriteEssay = () => {
  const [title, setTitle] = useState("제목 없음");
  const [value, setValue] = useState<string>("");
  return (
    <Layout>
      <TitleField title={title} />
      <Editor value={value} setValue={setValue} />
    </Layout>
  );
};

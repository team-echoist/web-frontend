import React, { useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import TitleField from "./contents/TitleField";
import BottomField from "./contents/BottomField";
import { fetchData } from "@/shared/api/fetchData";

const Editor = dynamic(
  () => import("@/shared/ui/editor").then((mod) => mod.Editor),
  { ssr: false }
);

const Layout = styled.main`
  margin-top: 32px;
  width: 100vw;
`;
const EditorContainer = styled.div<{ isBottomFieldVisible: boolean }>`
  height: ${({ isBottomFieldVisible }) =>
    isBottomFieldVisible ? "326px" : "auto"};
  transition: height 0.3s ease-in-out;
  .ql-container {
    height: ${({ isBottomFieldVisible }) =>
      isBottomFieldVisible ? "326px" : "auto"};
    display: flex;
    flex-direction: column;
  }

  .ql-editor {
    flex-grow: 1;
    overflow-y: auto;
  }
`;

export const WriteEssay = () => {
  const [title, setTitle] = useState("제목 없음");
  const [value, setValue] = useState<string>("");
  const [bottomValue, setBottomValue] = useState({
    active: "",
    tag: {
      values: [] as string[],
    },
    location: {
      values: [] as string[],
    },
  });
  const isBottomFieldVisible =
    bottomValue.active === "tag" || bottomValue.active === "location";

  const test = async () => {
    const body = {
      title: "web-test3",
      content: `<html lang="ko">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Linkedout</title>
                </head>
                <body>
                ${value}
                </body>
                </html>`,
      linkedOutGauge: 0,
      thumbnail: "",
      status: "published",
      latitude: 0,
      longitude: 0,
      location: "서울",
      tags: ["test"],
    };
    const { status } = await fetchData("essays", "post", body);
    console.log(status);
  };

  return (
    <Layout>
      <TitleField title={title} />
      {/* <button onClick={test}>test</button> */}
      <EditorContainer isBottomFieldVisible={isBottomFieldVisible}>
        <Editor
          value={value}
          setValue={setValue}
          tagValue={bottomValue}
          setTagValue={setBottomValue}
        />
      </EditorContainer>
      {isBottomFieldVisible && <BottomField bottomValue={bottomValue} />}
    </Layout>
  );
};

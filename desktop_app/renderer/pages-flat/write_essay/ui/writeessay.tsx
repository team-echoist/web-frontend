import React, { useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import TitleField from "./contents/TitleField";
import BottomField from "./contents/BottomField";

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
  const [isBottomFieldVisible, setIsBottomFieldVisible] = useState(true);
  return (
    <Layout>
      <TitleField title={title} />
      <EditorContainer isBottomFieldVisible={isBottomFieldVisible}>
        <Editor value={value} setValue={setValue} />
      </EditorContainer>
      <BottomField />
    </Layout>
  );
};

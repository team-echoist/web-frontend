import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import TitleField from "./contents/TitleField";
import BottomField from "./contents/BottomField";
import { fetchData } from "@/shared/api/fetchData";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

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
interface BottomValue {
  active: "tag" | "location";
  tag: {
    values: string[];
  };
  location: {
    values: string[];
  };
}
const defaultId = uuidv4();
export const WriteEssay = () => {
  const [title, setTitle] = useState("제목 없음");
  const [value, setValue] = useState<string>("");
  const [bottomValue, setBottomValue] = useState<BottomValue>({
    active: "tag",
    tag: {
      values: [],
    },
    location: {
      values: [],
    },
  });
  const [imageFile, setImageFile] = useState<File | string | null>(null);
  const [id, setId] = useState<string>(defaultId);
  const isBottomFieldVisible =
    bottomValue.active === "tag" || bottomValue.active === "location";
  const router = useRouter();
  const queryId = router.query.id as string | undefined;


  useEffect(() => {
    if (queryId) {
      const savedId = localStorage.getItem("currentEssayId");
      if (savedId) {
        const storedData = JSON.parse(localStorage.getItem("essayData") || "[]");
        const entry = storedData.find((item: any) => item.id === savedId);

        if (entry) {
          setTitle(entry.title);
          setValue(entry.value);
          setBottomValue(entry.bottomValue);
        }
      }
      else {
        localStorage.setItem("currentEssayId", queryId);
      }
    }
  }, [queryId]);

  useEffect(() => {
    if (id) {
      localStorage.setItem("currentEssayId", id);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const saveToLocalStorage = () => {
        const storedData = JSON.parse(
          localStorage.getItem("essayData") || "[]"
        );

        const existingEntryIndex = storedData.findIndex(
          (item: any) => item.id === defaultId
        );

        const newData = {
          id,
          title,
          value,
          bottomValue,
          timestamp: new Date().toISOString(),
        };

        if (existingEntryIndex > -1) {
          storedData[existingEntryIndex] = { ...newData };
        } else {
          storedData.push(newData);
        }

        localStorage.setItem("essayData", JSON.stringify(storedData));
      };

      saveToLocalStorage();

      const interval = setInterval(saveToLocalStorage, 30000);

      return () => clearInterval(interval);
    }
  }, [id, title, value, bottomValue]);

  return (
    <Layout>
      <TitleField title={title} setTitle={setTitle}/>
      <EditorContainer isBottomFieldVisible={isBottomFieldVisible}>
        <Editor
          value={value}
          setValue={setValue}
          tagValue={bottomValue}
          setTagValue={setBottomValue}
          setImageFile={setImageFile}
          id={id}
        />
      </EditorContainer>
      {isBottomFieldVisible && <BottomField bottomValue={bottomValue} setBottomValue={setBottomValue}/>}
    </Layout>
  );
};
